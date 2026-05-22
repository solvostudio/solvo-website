import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

const PILLARS = [
  {
    title: "Vendite",
    body: "Pipeline, posizionamento, offerta. Costruisco il motore commerciale dove il founder oggi è collo di bottiglia.",
  },
  {
    title: "Finanza",
    body: "Modello, capital strategy, finanza agevolata. Trasformo la complessità in decisioni eseguibili.",
  },
  {
    title: "Tecnologia",
    body: "Stack, automazione, AI applicata. Quello che ieri richiedeva un team, oggi richiede una scelta.",
  },
];

const METRICS = [
  { value: "10+", label: "anni dentro PMI e scale-up" },
  { value: "3", label: "aziende attive in portafoglio" },
  { value: "1", label: "punto di contatto, multi-disciplina" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <Container className="py-28 md:py-40">
          <Eyebrow>Solvo — Studio di Andrea Droghetti</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
            <em>Operating Partner</em>
            <br />
            per founder ambiziosi<span className="dot">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
            Non consulenza che fa slide. Operatività diretta dentro il business:
            vendite, finanza, tecnologia — con la stessa mano e un solo punto
            di contatto.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-ink-deep)]"
            >
              Parliamone
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
            >
              Come lavoro
            </Link>
          </div>
        </Container>
      </section>

      {/* PILASTRI */}
      <Section>
        <Eyebrow>Tre leve, una verticale</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance md:text-5xl">
          Una mossa che <em>cambia traiettoria</em>, non un parere che fa
          rumore<span className="dot">.</span>
        </h2>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <div className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-amber)]">
                {p.title}
              </div>
              <p className="font-display text-xl leading-relaxed text-[var(--color-ink)] text-pretty">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* METRIC ROW — block presence */}
      <Section tone="ink">
        <div className="grid gap-12 md:grid-cols-3">
          {METRICS.map((m) => (
            <div key={m.label}>
              <div className="font-display text-6xl font-medium tracking-tight md:text-7xl">
                {m.value}
              </div>
              <div className="mt-3 text-sm text-[var(--color-bg-primary)]/70">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* COSA FACCIO IN PRATICA */}
      <Section tone="subtle">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>In pratica</Eyebrow>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
              Tre modalità di ingaggio<span className="dot">.</span>
            </h2>
          </div>
          <div className="space-y-10">
            <div className="border-l-2 border-[var(--color-ink)] pl-6">
              <div className="font-display text-xl text-[var(--color-ink)]">
                Operating Partner frazionale
              </div>
              <p className="mt-2 text-[var(--color-text-secondary)] text-pretty">
                Retainer mensile, presenza continuativa nel business. La forma
                preferita per founder che hanno bisogno di un secondo cervello
                operativo, non di un consulente esterno.
              </p>
            </div>
            <div className="border-l-2 border-[var(--color-ink)] pl-6">
              <div className="font-display text-xl text-[var(--color-ink)]">
                Progetto verticale
              </div>
              <p className="mt-2 text-[var(--color-text-secondary)] text-pretty">
                Scope chiuso su un&apos;esigenza specifica: setup finance, AI
                strategy, M&amp;A advisory. Da 6 a 40K€, durata e deliverable
                definiti in partenza.
              </p>
            </div>
            <div className="border-l-2 border-[var(--color-ink)] pl-6">
              <div className="font-display text-xl text-[var(--color-ink)]">
                Strategy advisor / CDA
              </div>
              <p className="mt-2 text-[var(--color-text-secondary)] text-pretty">
                Per fondi, family office e imprese con piani strutturati di
                crescita o exit. Ruolo continuativo con governance attiva.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA CHIUSURA */}
      <Section>
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Hai un&apos;idea su cui vuoi <em>una mossa concreta</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--color-text-secondary)] text-pretty">
            Mezz&apos;ora di call, senza listino. Decidiamo insieme se c&apos;è
            una conversazione che vale la pena fare.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-ink-deep)]"
          >
            Scrivimi
          </Link>
        </div>
      </Section>
    </>
  );
}
