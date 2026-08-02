import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servizi e tariffe · Solvo",
  description:
    "Cinque modalità di ingaggio: closing, sales ownership, account e upsell, referral, consulenza. Retainer 2.000€/mese, success fee dal 10% al 15%, tariffe orarie 90€ e 140€.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Servizi e tariffe · Solvo",
    description:
      "Cinque modalità di ingaggio: closing, sales ownership, account e upsell, referral, consulenza. Retainer 2.000€/mese, success fee dal 10% al 15%, tariffe orarie 90€ e 140€.",
  },
};

const SERVICES = [
  {
    title: "Closing",
    bullets: [
      "Retainer 2.000€/mese",
      "Success fee 10% sul contratto firmato",
      "Il lead lo generi tu, la firma la portiamo noi",
    ],
    body: "La forma principale, e quella in cui siamo più forti. Prendiamo in carico le opportunità già presenti nella tua pipeline e le seguiamo fino al contratto: qualifica, proposta, gestione delle obiezioni, negoziazione, chiusura.",
  },
  {
    title: "Sales ownership",
    bullets: [
      "Retainer 2.000€/mese",
      "Success fee 15% sul contratto firmato",
      "Lead dal nostro network, gestito end-to-end",
    ],
    body: "Quando l&apos;opportunità nasce dalle nostre relazioni e non dalle tue. Ci prendiamo una parte di rischio maggiore, dall&apos;introduzione fino alla firma, e la fee lo riflette.",
  },
  {
    title: "Account e upsell",
    bullets: [
      "Incluso nelle due modalità sopra",
      "Success fee 10% sull&apos;incrementale",
      "Rinnovi, espansioni, secondo progetto",
    ],
    body: "Un cliente acquisito vale molto più di un cliente nuovo, ma solo se qualcuno lo presidia. Teniamo vivo il rapporto e facciamo emergere il lavoro successivo prima che lo chieda un concorrente.",
  },
  {
    title: "Referral",
    bullets: [
      "Nessun retainer",
      "10% sul netto del partner",
      "Segnaliamo, eroga il partner",
    ],
    body: "La forma leggera. Quando l&apos;introduzione ha valore ma la gestione commerciale resta a te. Nessun impegno continuativo, compenso solo a risultato.",
  },
  {
    title: "Consulenza senza mandato",
    bullets: [
      "140€/ora o a progetto",
      "Nessuna success fee",
      "Finanza, tecnologia, processi",
    ],
    body: "Advisory pura, quando non c&apos;è una componente commerciale da presidiare. Setup finanziari, finanza agevolata, scelte di stack e automazione, riorganizzazione di processi.",
  },
];

const PRICING = [
  {
    mode: "Closing",
    fixed: "2.000€/mese",
    variable: "10%",
    hourly: "90€/ora",
  },
  {
    mode: "Sales ownership",
    fixed: "2.000€/mese",
    variable: "15%",
    hourly: "90€/ora",
  },
  {
    mode: "Account e upsell",
    fixed: "incluso",
    variable: "10% sull'incrementale",
    hourly: "90€/ora",
  },
  {
    mode: "Referral",
    fixed: "nessuno",
    variable: "10% netto partner",
    hourly: "n.a.",
  },
  {
    mode: "Consulenza senza mandato",
    fixed: "a progetto",
    variable: "nessuna",
    hourly: "140€/ora",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Eyebrow>Servizi</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          Un mestiere<span className="dot">.</span>
          <br />
          <em>Cinque modi</em> di ingaggiarlo.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
          Solvo non vende ore, vende contratti firmati. La struttura economica
          è costruita perché guadagniamo davvero solo quando guadagni tu: un
          fisso che copre il presidio, e la parte grossa legata al risultato.
        </p>
      </Section>


      <Section tone="ink">
        <Eyebrow>Listino in breve</Eyebrow>
        <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
          I numeri, prima delle parole<span className="dot">.</span>
        </h2>
        {/* Desktop: tabella. Mobile: card, per non forzare scroll orizzontale */}
        <div className="mt-14 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--color-bg-primary)]/25 text-xs uppercase tracking-[0.15em] text-[var(--color-bg-primary)]/60">
                <th className="pb-4 pr-6 font-normal">Modalità</th>
                <th className="pb-4 pr-6 font-normal">Fisso</th>
                <th className="pb-4 pr-6 font-normal">Variabile</th>
                <th className="pb-4 font-normal">Ore fuori perimetro</th>
              </tr>
            </thead>
            <tbody className="font-display text-lg">
              {PRICING.map((r) => (
                <tr
                  key={r.mode}
                  className="border-b border-[var(--color-bg-primary)]/10"
                >
                  <td className="py-5 pr-6">{r.mode}</td>
                  <td className="py-5 pr-6 text-[var(--color-bg-primary)]/80">
                    {r.fixed}
                  </td>
                  <td className="py-5 pr-6 text-[var(--color-amber)]">
                    {r.variable}
                  </td>
                  <td className="py-5 text-[var(--color-bg-primary)]/80">
                    {r.hourly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 space-y-8 md:hidden">
          {PRICING.map((r) => (
            <div
              key={r.mode}
              className="border-t border-[var(--color-bg-primary)]/20 pt-4"
            >
              <div className="font-display text-xl">{r.mode}</div>
              <dl className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--color-bg-primary)]/60">Fisso</dt>
                  <dd className="text-right">{r.fixed}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--color-bg-primary)]/60">
                    Variabile
                  </dt>
                  <dd className="text-right text-[var(--color-amber)]">
                    {r.variable}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--color-bg-primary)]/60">
                    Ore fuori perimetro
                  </dt>
                  <dd className="text-right">{r.hourly}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-[var(--color-bg-primary)]/60 text-pretty">
          Il retainer non è un monte ore prepagate: è il costo del presidio
          commerciale continuativo, con ore indicative. Soglia di ingaggio:
          ticket dai 10.000€ in su.
        </p>
      </Section>

      <Section tone="subtle">
        <div className="space-y-24">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="grid gap-10 md:grid-cols-[auto_1fr_2fr] md:items-start"
            >
              <div className="font-display text-5xl text-[var(--color-amber)] md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="font-display text-2xl leading-tight tracking-tight text-balance md:text-3xl">
                  {s.title}<span className="dot">.</span>
                </h2>
                <ul className="mt-6 space-y-1 text-sm text-[var(--color-text-secondary)]">
                  {s.bullets.map((b) => (
                    <li key={b} dangerouslySetInnerHTML={{ __html: `· ${b}` }} />
                  ))}
                </ul>
              </div>
              <p
                className="font-display text-lg leading-relaxed text-[var(--color-ink)] text-pretty"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Condizioni</Eyebrow>
            <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
              Trasparente, ma su misura<span className="dot">.</span>
            </h2>
          </div>
          <div className="space-y-6 text-[var(--color-text-primary)]">
            <p className="text-pretty">
              Il <strong>retainer di riferimento è 2.000€ al mese</strong>. Non
              è un monte ore prepagate: è il costo del presidio commerciale
              continuativo. Le ore sono indicative e si adattano alla fase, non
              si contano col cronometro.
            </p>
            <p className="text-pretty">
              La <strong>success fee</strong> va dal <strong>10%</strong> sui
              deal chiusi su lead tuoi al <strong>15%</strong>{" "}
              quando l&apos;opportunità nasce dal nostro network. Matura sul contratto
              firmato e si paga a incasso avvenuto, al netto delle voci
              riaddebitate senza margine (hosting, licenze, provider).
            </p>
            <p className="text-pretty">
              Le attività fuori perimetro dentro un rapporto con success fee si
              tariffano a <strong>90€/ora</strong>. La{" "}
              <strong>consulenza senza mandato commerciale</strong>, che non
              prevede alcuna componente variabile, è a{" "}
              <strong>140€/ora</strong> o a progetto.
            </p>
            <p className="text-pretty">
              Il modello funziona sopra una certa soglia: sotto i{" "}
              <strong>10.000€ di ticket</strong> il conto non torna per
              nessuno dei due. È una condizione di ingaggio, non una
              preferenza.
            </p>
            <div className="border-t border-[var(--color-border)] pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-[var(--color-ink)] underline underline-offset-4 transition-all hover:underline-offset-2"
              >
                Richiedi un preventivo →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
