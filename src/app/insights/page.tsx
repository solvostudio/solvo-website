import Link from "next/link";
import { Eyebrow, Section } from "@/components/Section";
import { ARTICLES, formatDate } from "@/content/insights";

import type { Metadata } from "next";

const DESCRIPTION =
  "Note di campo su vendita B2B, closing e funzione commerciale: i conti, i metodi e gli errori che vediamo nelle trattative dei servizi.";

export const metadata: Metadata = {
  title: "Insights · Solvo",
  description: DESCRIPTION,
  alternates: { canonical: "/insights" },
  openGraph: { title: "Insights · Solvo", description: DESCRIPTION },
};

export default function InsightsPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
            Note di <em>campo</em>
            <span className="dot">.</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
            Qui pubblichiamo quello che impariamo portando trattative a
            firma: i conti dietro le scelte commerciali, i punti in cui i
            deal si fermano, i metodi che funzionano nel B2B dei servizi. Pubblichiamo
            con regolarità, niente opinioni di maniera.
          </p>
        </div>
      </Section>
      <Section tone="subtle">
        <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {ARTICLES.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/insights/${a.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-10"
              >
                <div className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
                  <time dateTime={a.date}>{formatDate(a.date)}</time>
                  {" · "}
                  {a.readingMinutes} min
                </div>
                <div>
                  <h2 className="font-display text-2xl leading-snug tracking-tight text-balance transition-colors group-hover:text-[var(--color-amber)] md:text-3xl">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-[var(--color-text-secondary)] text-pretty">
                    {a.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
