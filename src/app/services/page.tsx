import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

const SERVICES = [
  {
    title: "Operating Partner frazionale",
    bullets: [
      "Retainer mensile (10-20h)",
      "Presenza continuativa nel business",
      "Sales, finance, tech con la stessa mano",
    ],
    body: "Per founder che vogliono un secondo cervello operativo nei prossimi 12 mesi, non un advisor che vede l&apos;azienda due volte l&apos;anno.",
  },
  {
    title: "Progetti verticali",
    bullets: [
      "Setup finance — 6-12K€",
      "AI strategy — 10-20K€",
      "M&A advisory — 15-40K€",
    ],
    body: "Scope chiuso, durata e deliverable definiti in partenza. La forma giusta quando il problema è circoscritto e va risolto bene una volta sola.",
  },
  {
    title: "Strategy advisor / CDA",
    bullets: [
      "Membership ricorrente",
      "Governance attiva",
      "Per fondi, family office, imprese strutturate",
    ],
    body: "Per chi ha un piano di crescita o exit serio e vuole una voce esterna che pensi con l&apos;ownership, non per il fee.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Eyebrow>Servizi</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          Tre modalità<span className="dot">.</span>
          <br />
          <em>Una sola sostanza</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
          Solvo non è una consulenza che vende ore. È un brand operativo che
          firma per risultati. Tre forme di ingaggio, ciascuna calibrata su
          una fase diversa del business.
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
                    <li key={b}>· {b}</li>
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
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
              Trasparente, ma su misura<span className="dot">.</span>
            </h2>
          </div>
          <div className="space-y-6 text-[var(--color-text-primary)]">
            <p className="text-pretty">
              La tariffa di riferimento Solvo è <strong>150€/ora</strong>. Da
              lì derivano day rate (1200€), retainer da 10h (1500€) o 20h
              (2700€), e i pacchetti project-based.
            </p>
            <p className="text-pretty">
              Per i progetti con risultato misurabile (deal closing, capital
              raise, exit) la struttura include sempre una{" "}
              <strong>success fee</strong>: tipicamente il 10% del valore
              realizzato. Non per tutti i clienti — solo dove ha senso e dove
              i risultati sono attribuibili.
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
