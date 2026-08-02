import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti · Solvo",
  description:
    "Parliamone: una call di mezz’ora per guardare la tua pipeline e capire se ha senso lavorare insieme. Email e LinkedIn.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contatti · Solvo",
    description:
      "Parliamone: una call di mezz’ora per guardare la tua pipeline e capire se ha senso lavorare insieme. Email e LinkedIn.",
  },
};

const CHANNELS = [
  {
    label: "Email",
    value: "andrea@solvo.studio",
    href: "mailto:andrea@solvo.studio",
    note: "La via più diretta. Rispondiamo entro 24h nei giorni lavorativi.",
  },
  {
    label: "LinkedIn",
    value: "in/andreadroghetti",
    href: "https://www.linkedin.com/in/andreadroghetti",
    note: "Per restare in contatto senza un&apos;esigenza specifica.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Contatti</Eyebrow>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
              <em>Parliamone</em><span className="dot">.</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
              Una mail chiara con due righe sul tuo contesto è più utile di un
              form da venti campi. Scrivici quando vuoi.
            </p>
          </div>
          <div className="space-y-10">
            {CHANNELS.map((c) => (
              <div key={c.label} className="border-l-2 border-[var(--color-ink)] pl-6">
                <div className="mb-2 text-xs uppercase tracking-widest text-[var(--color-amber)]">
                  {c.label}
                </div>
                <a
                  href={c.href}
                  className="font-display text-2xl text-[var(--color-ink)] transition-colors hover:text-[var(--color-amber)]"
                >
                  {c.value}
                </a>
                <p
                  className="mt-2 text-sm text-[var(--color-text-secondary)] text-pretty"
                  dangerouslySetInnerHTML={{ __html: c.note }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
              Dove operiamo
            </div>
            <div className="font-display text-xl text-[var(--color-ink)]">
              Italia
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Con presenza regolare a Milano per gli incontri di persona.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
              Come si parte
            </div>
            <div className="font-display text-xl text-[var(--color-ink)]">
              Call di mezz&apos;ora
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Guardiamo la tua pipeline prima di qualsiasi proposta.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
              Soglia di ingaggio
            </div>
            <div className="font-display text-xl text-[var(--color-ink)]">
              Ticket dai 10.000€
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Sotto quella soglia il modello non si ripaga.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
