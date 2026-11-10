import { article as commercialeInternoOEsterno } from "./commerciale-interno-o-esterno";
import type { Article } from "./types";

// Nuovo articolo: un file accanto a questo e una riga qui sotto.
export const ARTICLES: Article[] = [commercialeInternoOEsterno].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
