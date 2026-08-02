import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights · Solvo",
  description:
    "Note e materiali su vendita complessa, closing e relazioni con i clienti. In apertura a fine 2026.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights · Solvo",
    description:
      "Note e materiali su vendita complessa, closing e relazioni con i clienti. In apertura a fine 2026.",
  },
};

export default function InsightsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Insights</Eyebrow>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          In arrivo<span className="dot">.</span>
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
          Qui pubblicherò case study, framework operativi, riflessioni su
          founder economy, M&amp;A, AI applicata e dintorni. Non un blog di
          opinioni: note di campo da chi sta dentro alle decisioni.
        </p>
        <p className="mt-6 text-sm text-[var(--color-text-secondary)]">
          Apertura prevista: fine 2026.
        </p>
        <Link
          href="/contact"
          className="mt-12 inline-flex items-center text-sm font-medium text-[var(--color-ink)] underline underline-offset-4 transition-all hover:underline-offset-2"
        >
          Vuoi essere avvisato quando esce? Scrivici.
        </Link>
      </div>
    </Section>
  );
}
