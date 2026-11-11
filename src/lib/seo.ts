// Base Open Graph condivisa: l'openGraph di una pagina sostituisce per intero
// quello del layout, quindi ogni pagina la richiama con uno spread.
export const OG_BASE = {
  siteName: "Solvo",
  locale: "it_IT",
  type: "website" as const,
  images: [{ url: "/og.png", width: 1200, height: 630 }],
};
