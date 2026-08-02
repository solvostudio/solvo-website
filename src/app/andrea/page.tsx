import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrea Droghetti · Solvo",
  description:
    "Founder di SMACE, Forbes Under 30 Italia 2023. In attività dal 2019 tra Capgemini e imprenditoria: percorso, track record e approccio dietro Solvo.",
  alternates: { canonical: "/andrea" },
  openGraph: {
    title: "Andrea Droghetti · Solvo",
    description:
      "Founder di SMACE, Forbes Under 30 Italia 2023. In attività dal 2019 tra Capgemini e imprenditoria: percorso, track record e approccio dietro Solvo.",
  },
};

const TRAITS = [
  {
    label: "Percorso",
    body: "In attività dal 2019: prima project management in Capgemini su implementazioni ERP Microsoft Dynamics, poi founder e CEO di SMACE dal 2021.",
  },
  {
    label: "Riconoscimenti",
    body: "Forbes Under 30 Italia 2023.",
  },
  {
    label: "Mestiere",
    body: "Portare a firma trattative complesse su ticket a cinque cifre. Finanza e tecnologia sono il corredo che fa vendere meglio, non la vetrina.",
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

const RECORD = [
  {
    value: "Dal 2019",
    label: "tra corporate e imprenditoria, da Capgemini alla fondazione di SMACE",
  },
  {
    value: "Milioni di euro",
    label: "di valore commerciale intermediato e negoziato negli anni",
  },
  {
    value: "Centinaia",
    label: "di clienti serviti, da PMI a grandi gruppi",
  },
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
              Founder di SMACE e Forbes Under 30 Italia 2023. Ho passato gli
              ultimi anni dall&apos;altra parte del tavolo, a costruire
              un&apos;azienda e a venderne il servizio: è da lì che nasce Solvo,
              e oggi facciamo la stessa cosa per poche aziende alla volta,{" "}
              <em>senza fondarle</em>.
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
          Quello che c&apos;è dietro alle trattative di
          oggi<span className="dot">.</span>
        </h2>
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {RECORD.map((r) => (
            <div
              key={r.value}
              className="border-t border-[var(--color-bg-primary)]/20 pt-5"
            >
              <div className="font-display text-3xl md:text-4xl">{r.value}</div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-bg-primary)]/70 text-pretty">
                {r.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <div className="mb-6 text-xs uppercase tracking-[0.2em] text-[var(--color-bg-primary)]/60">
            Account corporate e istituzionali gestiti negli anni di SMACE
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 font-display text-xl text-[var(--color-bg-primary)]/90 md:text-2xl">
            {ACCOUNTS.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="subtle">
        <Eyebrow>Approccio</Eyebrow>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
              Poche aziende<span className="dot">.</span>
              <br />
              Operatività vera<span className="dot">.</span>
            </h2>
            <p className="mt-6 text-[var(--color-text-secondary)] text-pretty">
              Non lavoriamo a portfolio di trenta nomi. Seguiamo poche aziende
              alla volta, dove si può entrare con le mani fino al gomito e dove
              il lavoro si misura sui contratti che si firmano. Una funzione
              commerciale spalmata su troppi tavoli non è una funzione
              commerciale.
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
            Scrivici
          </Link>
        </div>
      </Section>
    </>
  );
}
