import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, Section } from "@/components/Section";
import { ARTICLES, formatDate, getArticle } from "@/content/insights";
import type { Block } from "@/content/insights/types";

import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  const url = `/insights/${a.slug}`;
  return {
    title: `${a.title} · Solvo`,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: url },
    authors: [{ name: "Andrea Droghetti", url: "https://solvo.studio/andrea" }],
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url,
      publishedTime: a.date,
      modifiedTime: a.updated ?? a.date,
      authors: ["https://solvo.studio/andrea"],
      images: [{ url: "https://solvo.studio/og.png", width: 1200, height: 630 }],
    },
  };
}

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "h2":
      return (
        <h2 className="mt-14 font-display text-2xl leading-tight tracking-tight text-balance md:text-3xl">
          {b.text}
        </h2>
      );
    case "p":
      return (
        <p
          className="mt-6 text-lg leading-relaxed text-pretty"
          dangerouslySetInnerHTML={{ __html: b.html }}
        />
      );
    case "ul":
      return (
        <ul className="mt-6 list-disc space-y-2 pl-6 text-lg leading-relaxed marker:text-[var(--color-amber)]">
          {b.items.map((i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: i }} />
          ))}
        </ul>
      );
    case "callout":
      return (
        <p
          className="mt-10 border-l-2 border-[var(--color-amber)] pl-6 font-display text-xl leading-relaxed text-[var(--color-ink)] text-pretty"
          dangerouslySetInnerHTML={{ __html: b.html }}
        />
      );
    case "table":
      return (
        <figure className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm md:text-base">
            <caption className="mb-3 text-left text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">
              {b.caption}
            </caption>
            <thead>
              <tr className="border-b border-[var(--color-ink)]">
                {b.head.map((h) => (
                  <th key={h} scope="col" className="py-3 pr-4 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r.join("|")} className="border-b border-[var(--color-border)]">
                  {r.map((c, i) => (
                    <td
                      key={i}
                      className="py-3 pr-4 align-top"
                      dangerouslySetInnerHTML={{ __html: c }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      );
  }
}

export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.updated ?? a.date,
    inLanguage: "it-IT",
    keywords: a.keywords.join(", "),
    mainEntityOfPage: `https://solvo.studio/insights/${a.slug}`,
    image: "https://solvo.studio/og.png",
    author: { "@id": "https://solvo.studio/#andrea" },
    publisher: { "@id": "https://solvo.studio/#org" },
  };

  return (
    <>
      <Section>
        <article className="mx-auto max-w-2xl">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Eyebrow>
            <Link href="/insights" className="hover:underline">
              Insights
            </Link>
          </Eyebrow>
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-balance md:text-5xl">
            {a.title}
          </h1>
          <p className="mt-6 text-sm text-[var(--color-text-secondary)]">
            <Link href="/andrea" className="underline underline-offset-4">
              Andrea Droghetti
            </Link>
            {" · "}
            <time dateTime={a.date}>{formatDate(a.date)}</time>
            {" · "}
            {a.readingMinutes} min di lettura
          </p>
          <div className="mt-6">
            {a.blocks.map((b, i) => (
              <BlockView key={i} b={b} />
            ))}
          </div>
          {a.sources && (
            <div className="mt-14 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-secondary)]">
              <div className="mb-2 text-xs uppercase tracking-widest">Fonti</div>
              <ul className="space-y-1">
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </Section>
      <Section tone="subtle">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
            Vuoi rifare questi conti sulla tua <em>pipeline</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--color-text-secondary)] text-pretty">
            Mezz&apos;ora di call, senza impegno. Guardiamo insieme volumi,
            ticket e trattative aperte, e ti diciamo con franchezza se ha
            senso lavorare insieme.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-ink-deep)]"
          >
            Parliamone
          </Link>
        </div>
      </Section>
    </>
  );
}
