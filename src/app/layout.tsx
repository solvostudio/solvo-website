import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const TITLE = "Solvo Studio · Funzione commerciale esterna per il B2B dei servizi";
const OG_TITLE = "Solvo · Trasformiamo i tuoi lead in clienti";
const DESCRIPTION =
  "Solvo è la funzione commerciale esterna (fractional sales) di poche aziende B2B dei servizi: portiamo a firma i lead che generate già e presidiamo i clienti chiave.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://solvo.studio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    url: "https://solvo.studio",
    siteName: "Solvo",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "https://solvo.studio/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Solvo · Trasformiamo i tuoi lead in clienti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
    images: ["https://solvo.studio/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Grafo unico: organizzazione, persona e sito collegati per @id.
// Award, knowsAbout e worksFor servono anche a distinguere Andrea dagli
// omonimi nei motori e negli assistenti AI.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://solvo.studio/#org",
      name: "Solvo",
      alternateName: "Solvo Studio",
      url: "https://solvo.studio",
      logo: "https://solvo.studio/logo-semplice.svg",
      image: "https://solvo.studio/og.png",
      description: DESCRIPTION,
      email: "andrea@solvo.studio",
      areaServed: { "@type": "Country", name: "Italia" },
      availableLanguage: ["it", "en"],
      priceRange: "€€",
      slogan: "Trasformiamo i tuoi lead in clienti",
      serviceType: [
        "Funzione commerciale esterna (fractional sales)",
        "Gestione trattative e closing B2B",
        "Account management e upsell",
        "Referral commerciale",
      ],
      founder: { "@id": "https://solvo.studio/#andrea" },
      sameAs: ["https://www.linkedin.com/in/andreadroghetti"],
    },
    {
      "@type": "Person",
      "@id": "https://solvo.studio/#andrea",
      name: "Andrea Droghetti",
      url: "https://solvo.studio/andrea",
      jobTitle: "Founder",
      image: "https://solvo.studio/andrea-ritratto.jpg",
      email: "andrea@solvo.studio",
      worksFor: { "@id": "https://solvo.studio/#org" },
      award: "Forbes Under 30 Italia 2023, categoria Social Impact",
      knowsAbout: [
        "Vendita B2B",
        "Closing di trattative complesse",
        "Fractional sales",
        "Eventi corporate",
        "Software house",
      ],
      sameAs: ["https://www.linkedin.com/in/andreadroghetti"],
      subjectOf: {
        "@type": "WebPage",
        name: "Forbes Italia Under 30 2023, Social Impact",
        url: "https://forbes.it/classifiche-forbes/under-30/under-30-2023-social-impact",
      },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Università di Bologna" },
        { "@type": "CollegeOrUniversity", name: "Università Bocconi" },
        { "@type": "CollegeOrUniversity", name: "SDA Bocconi" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://solvo.studio/#website",
      url: "https://solvo.studio",
      name: "Solvo",
      inLanguage: "it-IT",
      publisher: { "@id": "https://solvo.studio/#org" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
