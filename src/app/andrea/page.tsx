import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

const TRAITS = [
  {
    label: "Percorso",
    body: "Founder e CEO di SMACE dal 2021. Prima, project management in Capgemini su implementazioni ERP Microsoft Dynamics.",
  },
  {
    label: "Riconoscimenti",
    body: "Forbes Under 30 Italia 2023.",
  },
  {
    label: "Verticale",
    body: "Vendite, finanza, tecnologia. Coltello da chirurgo su singoli problemi, non rete da pesca.",
  },
  {
    label: "Formazione",
    body: "Finanza (UniBo), Management (Bocconi), Master Digital Transformation (SDA Bocconi).",
  },
  {
    label: "Lingue",
    body: "Italiano madrelingua, inglese C1, spagnolo e tedesco B1.",
  },
];

const ACCOUNTS = [
  "Amazon",
  "Bending Spoons",
  "EY",
  "Intesa Sanpaolo",
  "Elite · Borsa Italiana",
];

export default function AndreaPage() {
  return (
    <>
      <Section>
        <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>L&apos;autore dietro Solvo</Eyebrow>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
              Andrea Droghetti<span className="dot">.</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
              Trentun&apos;anni, base Ferrara, una settimana al mese a Milano.
              Founder di SMACE e Forbes Under 30 Italia 2023, oggi affianco
              founder che vogliono <em>fare</em> più che parlare e imprese che
              hanno bisogno di una mano che metta insieme i pezzi.
            </p>
          </div>
          <div className="space-y-8 border-l border-[var(--color-border)] pl-10">
            {TRAITS.map((t) => (
              <div key={t.label}>
                <div className="mb-2 text-xs uppercase tracking-widest text-[var(--color-amber)]">
                  {t.label}
                </div>
                <p className="text-[var(--color-text-primary)] text-pretty">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <Eyebrow>Track record</Eyebrow>
        <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
          Account corporate e istituzionali gestiti negli anni di
          SMACE<span className="dot">.</span>
        </h2>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-display text-xl text-[var(--color-bg-primary)]/90 md:text-2xl">
          {ACCOUNTS.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <Eyebrow>Approccio</Eyebrow>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
              Pochi clienti<span className="dot">.</span>
              <br />
              Operatività vera<span className="dot">.</span>
            </h2>
            <p className="mt-6 text-[var(--color-text-secondary)] text-pretty">
              Non lavoro a portfolio di trenta nomi. Lavoro su pochi business
              alla volta, dove posso entrare con le mani fino al gomito.
              Quando entro, entro sul serio: sales pipeline, modelli
              finanziari, scelte tech. Non solo strategia.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
              Una sola firma<span className="dot">.</span>
              <br />
              Un network dietro<span className="dot">.</span>
            </h2>
            <p className="mt-6 text-[var(--color-text-secondary)] text-pretty">
              Solvo è il punto di contatto. Dietro, un network selezionato di
              professionisti senior (software, fiscale, M&amp;A, finanza
              agevolata, AI applicata) attivabili quando il problema lo
              richiede.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Vediamoci<span className="dot">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--color-bg-primary)]/70 text-pretty">
            Mezz&apos;ora di call per capire se ha senso lavorare insieme.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-[var(--color-amber)] px-7 py-3.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-amber)]/90"
          >
            Scrivimi
          </Link>
        </div>
      </Section>
    </>
  );
}
