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

export const metadata: Metadata = {
  title: "Solvo · La funzione commerciale che porta i deal a firma",
  description:
    "Solvo è il brand operativo di Andrea Droghetti: prendo in carico i lead che la tua azienda genera e li porto a contratto firmato. Closing su ticket a cinque cifre, retainer più success fee.",
  metadataBase: new URL("https://solvo.studio"),
  openGraph: {
    title: "Solvo · La funzione commerciale che porta i deal a firma",
    description:
      "Solvo è il brand operativo di Andrea Droghetti: prendo in carico i lead che la tua azienda genera e li porto a contratto firmato. Closing su ticket a cinque cifre, retainer più success fee.",
    url: "https://solvo.studio",
    siteName: "Solvo",
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
