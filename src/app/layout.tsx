import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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

const TITLE = "Solvo · Trasformiamo i tuoi lead in clienti";
const DESCRIPTION =
  "Solvo è lo studio commerciale di Andrea Droghetti: siamo la funzione commerciale di poche aziende alla volta. Portiamo le trattative a firma e presidiamo le relazioni con i clienti che contano.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://solvo.studio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
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
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://solvo.studio/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Solvo",
  url: "https://solvo.studio",
  description: DESCRIPTION,
  areaServed: "IT",
  availableLanguage: ["it", "en"],
  serviceType: [
    "Sviluppo commerciale",
    "Gestione trattative e closing",
    "Relazioni con i clienti",
    "Advisory finanza e tecnologia",
  ],
  founder: {
    "@type": "Person",
    name: "Andrea Droghetti",
    jobTitle: "Operating Partner",
    email: "andrea@solvo.studio",
    sameAs: ["https://www.linkedin.com/in/andreadroghetti"],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Università di Bologna" },
      { "@type": "CollegeOrUniversity", name: "Università Bocconi" },
      { "@type": "CollegeOrUniversity", name: "SDA Bocconi" },
    ],
  },
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
      </body>
    </html>
  );
}
