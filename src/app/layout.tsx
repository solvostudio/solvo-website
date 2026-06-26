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
  title: "Solvo · Operating Partner for Founders",
  description:
    "Solvo è il brand operativo di Andrea Droghetti: Operating Partner per founder e scale-up su vendite, finanza e tecnologia.",
  metadataBase: new URL("https://solvo.studio"),
  openGraph: {
    title: "Solvo · Operating Partner for Founders",
    description:
      "Solvo è il brand operativo di Andrea Droghetti: Operating Partner per founder e scale-up su vendite, finanza e tecnologia.",
    url: "https://solvo.studio",
    siteName: "Solvo",
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
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
