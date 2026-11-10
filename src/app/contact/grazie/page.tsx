import Link from "next/link";
import { Eyebrow, Section } from "@/components/Section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messaggio ricevuto · Solvo",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact/grazie" },
};

export default function ThankYouPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Contatti</Eyebrow>
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          Messaggio <em>ricevuto</em>
          <span className="dot">.</span>
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
          Ti rispondiamo entro 24 ore nei giorni lavorativi, per fissare la
          call o per chiederti quello che ci manca.
        </p>
        <Link
          href="/insights"
          className="mt-12 inline-flex items-center text-sm font-medium text-[var(--color-ink)] underline underline-offset-4 transition-all hover:underline-offset-2"
        >
          Nel frattempo, leggi gli insights →
        </Link>
      </div>
    </Section>
  );
}
