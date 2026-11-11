import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

import { OG_BASE } from "@/lib/seo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funzione commerciale esterna: servizi e tariffe · Solvo",
  description:
    "Funzione commerciale esterna (fractional sales) a prezzi chiari: retainer 2.000€/mese e success fee dal 10% al 15% sui contratti firmati. Cinque modalità, condizioni e FAQ.",
  alternates: { canonical: "/services" },
  openGraph: {
    ...OG_BASE,
    url: "/services",
    title: "Funzione commerciale esterna: servizi e tariffe · Solvo",
    description:
      "Funzione commerciale esterna (fractional sales) a prezzi chiari: retainer 2.000€/mese e success fee dal 10% al 15% sui contratti firmati. Cinque modalità, condizioni e FAQ.",
  },
};

const SERVICES = [
  {
    title: "Closing",
    bullets: [
      "Retainer 2.000€/mese",
      "Success fee 10% sul contratto firmato",
      "Il lead lo generi tu, la firma la portiamo noi",
    ],
    body: "La forma principale, e quella in cui siamo più forti. Prendiamo in carico le opportunità già presenti nella tua pipeline e le seguiamo fino al contratto: qualifica, proposta, gestione delle obiezioni, negoziazione, chiusura.",
  },
  {
    title: "Sales ownership",
    bullets: [
      "Retainer 2.000€/mese",
      "Success fee 15% sul contratto firmato",
      "Lead dal nostro network, gestito end-to-end",
    ],
    body: "Quando l&apos;opportunità nasce dalle nostre relazioni e non dalle tue. Ci prendiamo una parte di rischio maggiore, dall&apos;introduzione fino alla firma, e la fee lo riflette.",
  },
  {
    title: "Account e upsell",
    bullets: [
      "Incluso nelle due modalità sopra",
      "Success fee 10% sull&apos;incrementale",
      "Rinnovi, espansioni, secondo progetto",
    ],
    body: "Un cliente acquisito vale molto più di un cliente nuovo, ma solo se qualcuno lo presidia. Teniamo vivo il rapporto e facciamo emergere il lavoro successivo prima che lo chieda un concorrente.",
  },
  {
    title: "Referral",
    bullets: [
      "Nessun retainer",
      "10% sul netto del partner",
      "Segnaliamo, eroga il partner",
    ],
    body: "La forma leggera. Quando l&apos;introduzione ha valore ma la gestione commerciale resta a te. Nessun impegno continuativo, compenso solo a risultato.",
  },
  {
    title: "Consulenza senza mandato",
    bullets: [
      "140€/ora o a progetto",
      "Nessuna success fee",
      "Processo, pricing, tecnologia",
    ],
    body: "Advisory pura, quando non c&apos;è una componente commerciale da presidiare: processo commerciale, pricing e proposte, scelte di stack e automazione.",
  },
];

const PRICING = [
  {
    mode: "Closing",
    fixed: "2.000€/mese",
    variable: "10%",
    hourly: "90€/ora",
  },
  {
    mode: "Sales ownership",
    fixed: "2.000€/mese",
    variable: "15%",
    hourly: "90€/ora",
  },
  {
    mode: "Account e upsell",
    fixed: "incluso",
    variable: "10% sull'incrementale",
    hourly: "90€/ora",
  },
  {
    mode: "Referral",
    fixed: "nessuno",
    variable: "10% netto partner",
    hourly: "n.a.",
  },
  {
    mode: "Consulenza senza mandato",
    fixed: "a progetto",
    variable: "nessuna",
    hourly: "140€/ora",
  },
];


// Domande vere dei buyer, emerse nelle call. Stesse frasi nel JSON-LD
// FAQPage: Google oggi mostra poco i rich result FAQ, ma il markup resta
// utile agli assistenti AI che leggono la pagina.
const FAQ = [
  {
    q: "Che differenza c'è rispetto ad assumere un commerciale?",
    a: "Un commerciale senior interno costa per intero anche nei mesi in cui non chiude, e prima di rendere ha bisogno di mesi di inserimento. Con noi il fisso è circa un quarto di quello di un assunto e copre il presidio, il resto del compenso arriva solo con i contratti firmati, e partiamo dalla pipeline che hai già. Ha senso finché il volume non giustifica una persona a tempo pieno, e quando arriva quel momento, il passaggio di consegne è già scritto nella pipeline.",
  },
  {
    q: "Il retainer corrisponde a un monte ore?",
    a: "No. È il costo del presidio commerciale continuativo: le ore sono indicative e si adattano alla fase della trattativa. Le attività fuori dal perimetro commerciale si concordano prima, per iscritto, a 90€/ora.",
  },
  {
    q: "Generate anche i lead?",
    a: "No, il nostro mestiere è portare a firma i lead che la tua azienda genera già. Quando un'opportunità nasce dal nostro network la seguiamo dall'introduzione alla firma, ed è la modalità sales ownership con success fee al 15%.",
  },
  {
    q: "Su cosa si calcola la success fee e quando si paga?",
    a: "Sul valore del contratto firmato, al netto delle voci riaddebitate senza margine come hosting, licenze e provider. Matura alla firma e si paga quando il cliente ha pagato te.",
  },
  {
    q: "Con che tipo di aziende lavorate?",
    a: "B2B dei servizi: software house, consulenza, eventi corporate, finanza. Aziende con un flusso di lead già attivo, ticket dai 10.000€ in su e un decisore founder o C-level. Lavoriamo con poche aziende alla volta, per scelta.",
  },
  {
    q: "Quanto dura l'impegno?",
    a: "Sui mandati a retainer il rapporto è a tempo indeterminato, con un preavviso di recesso uguale per entrambe le parti e scritto nel contratto. Nessun vincolo pluriennale: restiamo finché i contratti firmati giustificano il costo.",
  },
  {
    q: "Chi segue le trattative, in concreto?",
    a: "Andrea Droghetti, in prima persona, su ogni trattativa. Quando serve una competenza specifica, fiscale, legale o tecnica, attiviamo un professionista del nostro network, sempre concordato prima con te.",
  },
  {
    q: "Lavorate anche con nostri concorrenti?",
    a: "Lo verifichiamo prima di partire: non seguiamo due aziende che vendono la stessa cosa allo stesso tipo di cliente. La riservatezza è scritta nel contratto.",
  },
  {
    q: "In quanto tempo arrivano i primi contratti?",
    a: "Dipende dal ciclo di vendita. Sulle trattative già aperte, dalla presa in carico alla firma passano di solito dalle 4 alle 8 settimane. Il primo mese serve anche a entrare nel prodotto, nei numeri e nella pipeline.",
  },
  {
    q: "Che differenza c'è con un direttore commerciale part-time o un temporary manager?",
    a: "Un direttore commerciale part-time o un temporary manager costruisce e guida l'organizzazione di vendita. Noi lavoriamo un passo più vicino al contratto: prendiamo in carico le trattative e le portiamo a firma, con un compenso legato a quello che si firma.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <Eyebrow>Servizi</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
          Un mestiere<span className="dot">.</span>
          <br />
          <em>Cinque modi</em> di ingaggiarlo.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
          Siamo una funzione commerciale esterna, quella che nel mondo
          anglosassone si chiama <em>fractional sales</em>. Non vendiamo ore,
          vendiamo contratti firmati. La struttura economica lega il nostro
          compenso al tuo risultato: un fisso contenuto che copre il presidio,
          e una success fee su ogni contratto firmato.
        </p>
      </Section>


      <Section tone="ink">
        <Eyebrow>Listino in breve</Eyebrow>
        <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
          I numeri, prima delle parole<span className="dot">.</span>
        </h2>
        {/* Desktop: tabella. Mobile: card, per non forzare scroll orizzontale */}
        <div className="mt-14 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--color-bg-primary)]/25 text-xs uppercase tracking-[0.15em] text-[var(--color-bg-primary)]/60">
                <th className="pb-4 pr-6 font-normal">Modalità</th>
                <th className="pb-4 pr-6 font-normal">Fisso</th>
                <th className="pb-4 pr-6 font-normal">Variabile</th>
                <th className="pb-4 font-normal">Ore fuori perimetro</th>
              </tr>
            </thead>
            <tbody className="font-display text-lg">
              {PRICING.map((r) => (
                <tr
                  key={r.mode}
                  className="border-b border-[var(--color-bg-primary)]/10"
                >
                  <td className="py-5 pr-6">{r.mode}</td>
                  <td className="py-5 pr-6 text-[var(--color-bg-primary)]/80">
                    {r.fixed}
                  </td>
                  <td className="py-5 pr-6 text-[var(--color-amber)]">
                    {r.variable}
                  </td>
                  <td className="py-5 text-[var(--color-bg-primary)]/80">
                    {r.hourly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 space-y-8 md:hidden">
          {PRICING.map((r) => (
            <div
              key={r.mode}
              className="border-t border-[var(--color-bg-primary)]/20 pt-4"
            >
              <div className="font-display text-xl">{r.mode}</div>
              <dl className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--color-bg-primary)]/60">Fisso</dt>
                  <dd className="text-right">{r.fixed}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--color-bg-primary)]/60">
                    Variabile
                  </dt>
                  <dd className="text-right text-[var(--color-amber)]">
                    {r.variable}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[var(--color-bg-primary)]/60">
                    Ore fuori perimetro
                  </dt>
                  <dd className="text-right">{r.hourly}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-[var(--color-bg-primary)]/60 text-pretty">
          Il retainer non è un monte ore prepagate: è il costo del presidio
          commerciale continuativo, con ore indicative. Soglia di ingaggio:
          ticket dai 10.000€ in su.
        </p>
      </Section>

      <Section tone="subtle">
        <div className="space-y-24">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="grid gap-10 md:grid-cols-[auto_1fr_2fr] md:items-start"
            >
              <div className="font-display text-5xl text-[var(--color-amber)] md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="font-display text-2xl leading-tight tracking-tight text-balance md:text-3xl">
                  {s.title}<span className="dot">.</span>
                </h2>
                <ul className="mt-6 space-y-1 text-sm text-[var(--color-text-secondary)]">
                  {s.bullets.map((b) => (
                    <li key={b} dangerouslySetInnerHTML={{ __html: `· ${b}` }} />
                  ))}
                </ul>
              </div>
              <p
                className="font-display text-lg leading-relaxed text-[var(--color-ink)] text-pretty"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Condizioni</Eyebrow>
            <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
              Trasparente, ma su misura<span className="dot">.</span>
            </h2>
          </div>
          <div className="space-y-6 text-[var(--color-text-primary)]">
            <p className="text-pretty">
              Il <strong>retainer di riferimento è 2.000€ al mese</strong>. Non
              è un monte ore prepagate: è il costo del presidio commerciale
              continuativo. Le ore sono indicative e si adattano alla fase, non
              si contano col cronometro.
            </p>
            <p className="text-pretty">
              La <strong>success fee</strong> va dal <strong>10%</strong> sui
              deal chiusi su lead tuoi al <strong>15%</strong>{" "}
              quando l&apos;opportunità nasce dal nostro network. Matura sul contratto
              firmato e si paga a incasso avvenuto, al netto delle voci
              riaddebitate senza margine (hosting, licenze, provider).
            </p>
            <p className="text-pretty">
              Le attività fuori perimetro dentro un rapporto con success fee si
              tariffano a <strong>90€/ora</strong>. La{" "}
              <strong>consulenza senza mandato commerciale</strong>, che non
              prevede alcuna componente variabile, è a{" "}
              <strong>140€/ora</strong> o a progetto.
            </p>
            <p className="text-pretty">
              Il modello funziona sopra una certa soglia: sotto i{" "}
              <strong>10.000€ di ticket</strong> il conto non torna per
              nessuno dei due. È una condizione di ingaggio, non una
              preferenza.
            </p>
            <div className="border-t border-[var(--color-border)] pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-[var(--color-ink)] underline underline-offset-4 transition-all hover:underline-offset-2"
              >
                Parliamone →
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="subtle">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
        />
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Domande frequenti</Eyebrow>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
              Quello che ci chiedono prima di partire<span className="dot">.</span>
            </h2>
          </div>
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl text-[var(--color-ink)] [&::-webkit-details-marker]:hidden">
                  <h3 className="text-xl font-normal leading-snug">{f.q}</h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[var(--color-amber)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[var(--color-text-secondary)] text-pretty">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-[var(--color-text-secondary)] text-pretty">
            I conti completi, assunzione contro funzione esterna:{" "}
            <Link
              href="/insights/commerciale-interno-o-funzione-commerciale-esterna"
              className="text-[var(--color-ink)] underline underline-offset-4 transition-all hover:underline-offset-2"
            >
              Commerciale interno o funzione commerciale esterna →
            </Link>
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-ink-deep)]"
          >
            Parliamone
          </Link>
        </div>
      </Section>
    </>
  );
}
