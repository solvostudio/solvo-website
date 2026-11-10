import { Eyebrow, Section } from "@/components/Section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informativa privacy · Solvo",
  description: "Come trattiamo i dati inviati dal sito solvo.studio.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

// Informativa breve ex art. 13 GDPR per il form di contatto e le
// statistiche di visita.
export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <Eyebrow>Informativa privacy</Eyebrow>
        <h1 className="font-display text-4xl leading-tight tracking-tight text-balance md:text-5xl">
          Dati personali, in breve<span className="dot">.</span>
        </h1>
        <div className="mt-10 space-y-6 text-[var(--color-text-primary)] [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl">
          <h2>Chi tratta i dati</h2>
          <p className="text-pretty">
            Titolare del trattamento è Andrea Droghetti, che opera con il
            nome Solvo. Per qualsiasi richiesta sui tuoi dati scrivi a{" "}
            <a href="mailto:andrea@solvo.studio" className="underline underline-offset-4">
              andrea@solvo.studio
            </a>
            .
          </p>
          <h2>Cosa raccogliamo dal form</h2>
          <p className="text-pretty">
            Nome, email, azienda se la indichi, il messaggio e come ci hai
            conosciuto. Li usiamo solo per rispondere alla tua richiesta e
            per valutare un&apos;eventuale collaborazione: la base giuridica
            sono le misure precontrattuali richieste da te (art. 6.1.b GDPR).
            Non li usiamo per newsletter né li cediamo a terzi.
          </p>
          <p className="text-pretty">
            Il messaggio arriva nella nostra casella email (Google Workspace)
            e viene registrato nel nostro gestionale interno (Notion): i due
            fornitori agiscono come responsabili del trattamento. I dati
            restano lì per il tempo necessario a gestire il rapporto e
            comunque non oltre 24 mesi dall&apos;ultimo contatto, salvo
            obblighi di legge.
          </p>
          <h2>Statistiche di visita</h2>
          <p className="text-pretty">
            Misuriamo le visite con Vercel Web Analytics e Speed Insights, in
            forma aggregata, senza cookie e senza identificare chi visita il
            sito. Per questo non c&apos;è un banner cookie.
          </p>
          <p className="text-pretty">
            I fornitori possono trattare i dati fuori dall&apos;UE, con le
            garanzie previste dal GDPR (clausole contrattuali standard).
          </p>
          <h2>I tuoi diritti</h2>
          <p className="text-pretty">
            Puoi chiedere in ogni momento accesso, rettifica, cancellazione,
            limitazione od opposizione al trattamento scrivendo
            all&apos;indirizzo sopra, e hai diritto di proporre reclamo al
            Garante per la protezione dei dati personali.
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Ultimo aggiornamento: novembre 2026.
          </p>
        </div>
      </div>
    </Section>
  );
}
