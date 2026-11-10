import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { notionConfigured, smtpConfigured } from "@/lib/contact-config";

// Backend del form contatti: nessun servizio terzo, solo gli strumenti che
// Solvo usa già. Ogni invio diventa (1) una riga nel DB Notion "Pipeline
// macro-clienti" e (2) una mail di notifica sulla casella Google Workspace.
// Basta che una delle due riesca perché il contatto non vada perso.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOTION_VERSION = "2022-06-28";
const MIN_FILL_MS = 3_000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

const LIMITS = { name: 120, email: 200, company: 160, message: 4000 } as const;

// Etichetta del form -> opzione del select Notion "Fonte contatto".
const SOURCE_MAP: Record<string, string> = {
  "Ricerca Google": "Ricerca Google",
  "Assistente AI (ChatGPT, Perplexity, ecc.)": "Assistente AI",
  LinkedIn: "LinkedIn",
  Passaparola: "Passaparola",
  Altro: "Altro",
};
const TICKETS = new Set([
  "Sotto 10.000 €",
  "10.000-30.000 €",
  "Oltre 30.000 €",
  "Non saprei",
]);

// Limite di frequenza minimo, per istanza: frena gli abusi ripetuti senza
// infrastruttura aggiuntiva.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

type Lead = {
  name: string;
  email: string;
  company: string;
  ticket: string;
  source: string;
  message: string;
};

function clean(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function oneLine(s: string): string {
  return s.replace(/[\r\n]+/g, " ").trim();
}

function chunks(s: string, size = 1900) {
  const out: { type: "text"; text: { content: string } }[] = [];
  for (let i = 0; i < s.length; i += size) {
    out.push({ type: "text", text: { content: s.slice(i, i + size) } });
  }
  return out;
}

async function createNotionRow(lead: Lead, when: string): Promise<string> {
  const title = lead.company || lead.name;
  const note = `${when} · ${lead.message}`;
  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_SITE_TOKEN}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: process.env.NOTION_LEADS_DB_ID },
      properties: {
        Azienda: { title: [{ text: { content: title } }] },
        Referente: { rich_text: [{ text: { content: lead.name } }] },
        Email: { email: lead.email },
        Stage: { select: { name: "Da qualificare" } },
        "Prossimo passo": {
          rich_text: [{ text: { content: "Rispondere e fissare la call" } }],
        },
        "Fonte contatto": { select: { name: SOURCE_MAP[lead.source] } },
        ...(lead.ticket && {
          "Valore medio contratti": { select: { name: lead.ticket } },
        }),
        Note: { rich_text: chunks(note.slice(0, 1990)) },
      },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: chunks(
              `Contatto dal form del sito, ${when}. Fonte dichiarata: ${lead.source}.`,
            ),
          },
        },
        {
          object: "block",
          type: "quote",
          quote: { rich_text: chunks(lead.message) },
        },
      ],
    }),
  });
  if (!res.ok) {
    throw new Error(`Notion ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  const page = (await res.json()) as { url?: string };
  return page.url ?? "";
}

async function sendNotification(lead: Lead, when: string, notionUrl: string) {
  const user = process.env.SMTP_USER as string;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass: process.env.SMTP_APP_PASSWORD },
  });
  const who = oneLine(lead.company || lead.name);
  const text = [
    `Nuovo contatto dal form di solvo.studio (${when}).`,
    "",
    `Nome: ${lead.name}`,
    `Email: ${lead.email}`,
    `Azienda: ${lead.company || "non indicata"}`,
    `Valore medio dei contratti: ${lead.ticket || "non indicato"}`,
    `Come ci ha conosciuto: ${lead.source}`,
    "",
    "Messaggio:",
    lead.message,
    "",
    notionUrl
      ? `Riga su Notion: ${notionUrl}`
      : "Riga su Notion: non creata (vedi i log di Vercel).",
    "",
    "Rispondi a questa mail per scrivere direttamente al contatto.",
  ].join("\n");
  await transporter.sendMail({
    from: { name: "Sito Solvo", address: user },
    to: user,
    replyTo: { name: oneLine(lead.name), address: lead.email },
    subject: `Nuovo contatto dal sito: ${who}`,
    text,
  });
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Bot: honeypot compilato o form inviato troppo in fretta. Rispondiamo
  // successo senza fare nulla, per non dare segnali a chi automatizza.
  const started = Number(body.ts);
  const elapsed = Date.now() - started;
  if (
    body.botcheck ||
    !Number.isFinite(started) ||
    elapsed < MIN_FILL_MS ||
    elapsed > MAX_FORM_AGE_MS
  ) {
    return NextResponse.json({ ok: true });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "anon";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  const lead: Lead = {
    name: oneLine(clean(body.name, LIMITS.name)),
    email: oneLine(clean(body.email, LIMITS.email)),
    company: oneLine(clean(body.company, LIMITS.company)),
    ticket: TICKETS.has(String(body.ticket)) ? String(body.ticket) : "",
    source: Object.hasOwn(SOURCE_MAP, String(body.source)) ? String(body.source) : "Altro",
    message: clean(body.message, LIMITS.message),
  };
  if (
    !lead.name ||
    !lead.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)
  ) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }

  const when = new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" });

  let notionUrl = "";
  let notionOk = false;
  if (notionConfigured()) {
    try {
      notionUrl = await createNotionRow(lead, when);
      notionOk = true;
    } catch (err) {
      console.error("[contact] Notion non riuscito", err);
    }
  }

  let mailOk = false;
  if (smtpConfigured()) {
    try {
      await sendNotification(lead, when, notionUrl);
      mailOk = true;
    } catch (err) {
      console.error("[contact] Mail non riuscita", err);
    }
  }

  if (!notionOk && !mailOk) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
