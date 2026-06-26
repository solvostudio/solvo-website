import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

const CHANNELS = [
  {
    label: "Email",
    value: "andrea@solvo.studio",
    href: "mailto:andrea@solvo.studio",
    note: "La via più diretta. Rispondo entro 24h nei giorni lavorativi.",
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
              form da venti campi. Scrivimi quando vuoi.
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
              Base
            </div>
            <div className="font-display text-xl text-[var(--color-ink)]">
              Ferrara
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Studio principale.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
              In settimana
            </div>
            <div className="font-display text-xl text-[var(--color-ink)]">
              Milano
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Una settimana al mese, per incontri di persona.
            </p>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
              Disponibilità
            </div>
            <div className="font-display text-xl text-[var(--color-ink)]">
              Su appuntamento
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Call di mezz&apos;ora prima di qualsiasi proposta.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
