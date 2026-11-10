"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

// Inoltro via Web3Forms (piano gratuito): nessun backend nostro, il messaggio
// arriva sulla casella di Solvo con reply-to sull'email di chi scrive.
// Senza chiave il form non viene mostrato: restano email e LinkedIn.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const SOURCES = [
  "Ricerca Google",
  "Assistente AI (ChatGPT, Perplexity, ecc.)",
  "LinkedIn",
  "Passaparola",
  "Altro",
];

type Status = "idle" | "sending" | "error";

const field =
  "mt-2 w-full rounded-none border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-4 py-3 text-base text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-ink)]";
const label =
  "text-xs uppercase tracking-widest text-[var(--color-text-secondary)]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");

  if (!WEB3FORMS_KEY) return null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Honeypot: un bot che compila il campo nascosto non invia nulla.
    if (data.botcheck) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: WEB3FORMS_KEY,
          subject: `Nuovo contatto dal sito: ${data.name}`,
          from_name: "Sito Solvo",
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message);
      form.reset();
      // Pagina di conferma dedicata: conta come conversione nelle statistiche.
      router.push("/contact/grazie");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Nome e cognome
          </label>
          <input
            id="cf-name"
            name="name"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-company" className={label}>
            Azienda <span className="normal-case tracking-normal">(facoltativo)</span>
          </label>
          <input
            id="cf-company"
            name="company"
            autoComplete="organization"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cf-source" className={label}>
            Come ci hai conosciuto?
          </label>
          <select
            id="cf-source"
            name="source"
            required
            defaultValue=""
            className={field}
          >
            <option value="" disabled>
              Seleziona
            </option>
            {SOURCES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          Messaggio
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Due righe sul contesto: cosa vendete, a chi, dove si fermano le trattative."
          className={field}
        />
      </div>
      <p className="text-xs leading-relaxed text-[var(--color-text-secondary)] text-pretty">
        Usiamo questi dati solo per risponderti. Dettagli nell&apos;
        <Link href="/privacy" className="underline underline-offset-4">
          informativa privacy
        </Link>
        .
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-ink-deep)] disabled:opacity-60"
        >
          {status === "sending" ? "Invio in corso…" : "Invia"}
        </button>
        <p role="status" aria-live="polite" className="text-sm text-[var(--color-text-secondary)]">
          {status === "error" &&
            "Invio non riuscito. Riprova, oppure scrivici direttamente a andrea@solvo.studio."}
        </p>
      </div>
    </form>
  );
}
