import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

const SERVICES = [
  {
    title: "Closing",
    bullets: [
      "Retainer mensile di presidio",
      "Success fee 10% sul contratto firmato",
      "Il lead lo generi tu, la firma la porto io",
    ],
    body: "La forma principale, e quella in cui sono più forte. Prendo in carico le opportunità già presenti nella tua pipeline e le seguo fino al contratto: qualifica, proposta, gestione delle obiezioni, negoziazione, chiusura.",
  },
  {
    title: "Sales ownership",
    bullets: [
      "Retainer mensile di presidio",
      "Success fee 15% sul contratto firmato",
      "Lead dal mio network, gestito end-to-end",
    ],
    body: "Quando l&apos;opportunità nasce dalle mie relazioni e non dalle tue. Mi prendo una parte di rischio maggiore, dall&apos;introduzione fino alla firma, e la fee lo riflette.",
  },
  {
    title: "Account e upsell",
    bullets: [
      "Incluso nelle due modalità sopra",
      "Success fee 10% sull&apos;incrementale",
      "Rinnovi, espansioni, secondo progetto",
    ],
    body: "Un cliente acquisito vale molto più di un cliente nuovo, ma solo se qualcuno lo presidia. Tengo vivo il rapporto e faccio emergere il lavoro successivo prima che lo chieda un concorrente.",
  },
  {
    title: "Referral",
    bullets: [
      "Nessun retainer",
      "10% sul netto del partner",
      "Segnalo, eroga il partner",
    ],
    body: "La forma leggera. Quando l&apos;introduzione ha valore ma la gestione commerciale resta a te. Nessun impegno continuativo, compenso solo a risultato.",
  },
  {
    title: "Consulenza senza mandato",
    bullets: [
      "A progetto o a tariffa oraria",
      "Nessuna success fee",
      "Finanza, tecnologia, processi",
    ],
    body: "Advisory pura, quando non c&apos;è una componente commerciale da presidiare. Setup finanziari, finanza agevolata, scelte di stack e automazione, riorganizzazione di processi.",
  },
];

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
          Solvo non vende ore, vende contratti firmati. La struttura economica
          è costruita perché io guadagni davvero solo quando guadagni tu: un
          fisso che copre il presidio, e la parte grossa legata al risultato.
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
              quando l&apos;opportunità nasce dal mio network. Matura sul contratto
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
                Richiedi un preventivo →
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
