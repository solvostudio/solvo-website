import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow, Section } from "@/components/Section";

const PILLARS = [
  {
    kicker: "Il mestiere",
    title: "Closing",
    body: "Il lead lo genera la tua azienda. Noi lo prendiamo in carico e lo portiamo a firma: qualifica, proposta, obiezioni, negoziazione, contratto.",
  },
  {
    kicker: "L'altra metà",
    title: "Relazioni istituzionali",
    body: "Rappresentiamo l'azienda davanti ai clienti che contano. Presidiamo il rapporto nel tempo, apriamo i rinnovi, facciamo emergere il lavoro successivo prima che lo chieda un concorrente.",
  },
  {
    kicker: "In dotazione",
    title: "Finanza, tecnologia, processi",
    body: "Non sono la vetrina, sono il motivo per cui vendiamo meglio di un commerciale puro: capiamo il prodotto, i numeri e cosa si può davvero consegnare.",
  },
];

const NUMBERS = [
  {
    value: "1 su 2",
    label: "trattative portate a firma",
  },
  {
    value: "20+",
    label: "trattative strutturate nel 2026",
  },
  {
    value: "+15%",
    label: "valore del deal tra prima proposta e firma",
  },
  {
    value: "< 2 sett.",
    label: "dal primo contatto alla proposta completa",
  },
];

const FIT = [
  {
    title: "Il lead esiste già",
    body: "Marketing, passaparola, rete di partner: il flusso in ingresso ce l'hai. Quello che manca è chi lo lavora fino alla firma.",
  },
  {
    title: "Il ticket è a cinque cifre",
    body: "Sotto i 10.000 euro questo mestiere non si ripaga, per nessuno dei due. Il valore si vede dove la trattativa dura settimane e il contratto pesa.",
  },
  {
    title: "Decide un founder o un C-level",
    body: "Vendita complessa, interlocutore che decide davvero, ciclo da uno a sei mesi. È lì che una persona batte qualunque automazione.",
  },
];

const MODES = [
  {
    title: "Closing",
    price: "2.000€/mese",
    fee: "+ 10% success fee",
    body: "La forma principale. Retainer mensile di presidio più success fee sui contratti che si firmano. Il grosso del nostro guadagno arriva quando arriva il tuo.",
  },
  {
    title: "Sales ownership",
    price: "2.000€/mese",
    fee: "+ 15% success fee",
    body: "Quando il lead arriva dal nostro network e lo seguiamo dall'inizio alla firma. Success fee più alta, perché più alta è la parte di rischio che ci prendiamo.",
  },
  {
    title: "Referral",
    price: "Nessun retainer",
    fee: "10% sul netto partner",
    body: "Segnaliamo, eroga il partner. Fee solo sul risultato. La forma leggera per chi entra nel network senza un mandato pieno.",
  },
  {
    title: "Consulenza senza mandato",
    price: "140€/ora",
    fee: "nessuna success fee",
    body: "Advisory su finanza, tecnologia e processi quando non c'è una componente commerciale da presidiare.",
  },
];

const CLIENTS = [
  {
    name: "ShadApps",
    role: "Software house. Sviluppo commerciale e gestione dei deal.",
  },
  {
    name: "Startax",
    role: "Consulenza fiscale e finanza agevolata. Vendite, operations e bandi.",
  },
  {
    name: "SMACE",
    role: "Eventi corporate. Ruolo operativo dentro strategia e crescita.",
  },
  {
    name: "Wonders",
    role: "Advisory e M&A. Partnership sui servizi finance per i loro clienti.",
  },
  {
    name: "Blue Venture",
    role: "Venture e private equity. Operazioni di investimento e deal del network.",
  },
  {
    name: "Cognivra",
    role: "Espansione in Arabia Saudita. Introduciamo aziende italiane nel mercato KSA.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <Container className="py-28 md:py-40">
          <Eyebrow>Solvo · Studio di Andrea Droghetti</Eyebrow>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
            Trasformiamo i tuoi lead
            <br />
            in <em>clienti</em><span className="dot">.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] text-pretty md:text-xl">
            Siamo la funzione commerciale di poche aziende in cui crediamo.
            Due cose, fatte bene: portare le trattative a firma e tenere le
            relazioni con i clienti che contano.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-ink-deep)]"
            >
              Parliamone
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
            >
              Come lavoriamo
            </Link>
          </div>
        </Container>
      </section>

      {/* NUMERI */}
      <Section tone="subtle">
        <Eyebrow>I numeri</Eyebrow>
        <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
          Un commerciale si giudica sui contratti chiusi, non sulle
          intenzioni<span className="dot">.</span>
        </h2>
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((n) => (
            <div
              key={n.label}
              className="border-t border-[var(--color-border)] pt-5"
            >
              <div className="font-display text-4xl text-[var(--color-ink)] md:text-5xl">
                {n.value}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)] text-pretty">
                {n.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-2xl text-sm leading-relaxed text-[var(--color-text-secondary)] text-pretty">
          Dati riferiti alle trattative gestite nel 2026, con uno sconto medio
          concesso sotto il 10%. Il valore cresce perché in negoziazione si
          allarga il perimetro, non perché si abbassa il prezzo.
        </p>
      </Section>

      {/* PILASTRI */}
      <Section>
        <Eyebrow>Cosa facciamo, in ordine di importanza</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance md:text-5xl">
          Una funzione sola, fatta <em>bene</em>, invece di tre fatte a
          metà<span className="dot">.</span>
        </h2>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                {p.kicker}
              </div>
              <div className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-amber)]">
                {p.title}
              </div>
              <p className="font-display text-xl leading-relaxed text-[var(--color-ink)] text-pretty">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* QUANDO HA SENSO */}
      <Section tone="subtle">
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Quando ha senso</Eyebrow>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
              Non conta il settore<span className="dot">.</span>
              <br />
              Conta la forma del deal<span className="dot">.</span>
            </h2>
            <p className="mt-6 text-[var(--color-text-secondary)] text-pretty">
              Lavoriamo con software house, consulenza, eventi corporate,
              finanza. Ma il criterio vero è un altro, ed è sempre lo stesso.
            </p>
          </div>
          <div className="space-y-10">
            {FIT.map((f) => (
              <div
                key={f.title}
                className="border-l-2 border-[var(--color-ink)] pl-6"
              >
                <div className="font-display text-xl text-[var(--color-ink)]">
                  {f.title}
                </div>
                <p className="mt-2 text-[var(--color-text-secondary)] text-pretty">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DOVE OPERO OGGI — block presence + prova reale */}
      <Section tone="ink">
        <Eyebrow>Dove opero oggi</Eyebrow>
        <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
          Non collaborazioni a slide: realtà e partner con cui lavoro
          davvero<span className="dot">.</span>
        </h2>
        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c) => (
            <div
              key={c.name}
              className="border-t border-[var(--color-bg-primary)]/20 pt-5"
            >
              <div className="font-display text-2xl">{c.name}</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-bg-primary)]/70 text-pretty">
                {c.role}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-2xl text-sm leading-relaxed text-[var(--color-bg-primary)]/60 text-pretty">
          Poche aziende alla volta, per scelta. Una funzione commerciale
          distribuita su troppi tavoli smette di essere una funzione
          commerciale.
        </p>
      </Section>

      {/* MODALITÀ DI INGAGGIO */}
      <Section>
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>In pratica</Eyebrow>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
              Come ci si ingaggia<span className="dot">.</span>
            </h2>
          </div>
          <div className="space-y-8">
            {MODES.map((m) => (
              <div
                key={m.title}
                className="border-l-2 border-[var(--color-ink)] pl-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <div className="font-display text-xl text-[var(--color-ink)]">
                    {m.title}
                  </div>
                  <div className="font-display text-lg text-[var(--color-ink)]">
                    {m.price}{" "}
                    <span className="text-[var(--color-amber)]">{m.fee}</span>
                  </div>
                </div>
                <p className="mt-2 text-[var(--color-text-secondary)] text-pretty">
                  {m.body}
                </p>
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-[var(--color-ink)] underline underline-offset-4 transition-all hover:underline-offset-2"
              >
                Tutte le condizioni in dettaglio →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA CHIUSURA */}
      <Section tone="subtle">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Hai lead che si <em>fermano</em> prima della firma?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[var(--color-text-secondary)] text-pretty">
            Mezz&apos;ora di call, senza listino. Guardiamo la tua pipeline e
            decidiamo insieme se c&apos;è una conversazione che vale la pena
            fare.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg-primary)] transition-colors hover:bg-[var(--color-ink-deep)]"
          >
            Scrivici
          </Link>
        </div>
      </Section>
    </>
  );
}
