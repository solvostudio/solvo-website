import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/insights";

const BASE = "https://solvo.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/andrea`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/insights`, changeFrequency: "monthly", priority: 0.7 },
    ...ARTICLES.map((a) => ({
      url: `${BASE}/insights/${a.slug}`,
      lastModified: a.updated ?? a.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
