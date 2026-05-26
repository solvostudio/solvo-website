# WORKLOG — Sito Solvo

Diario di sotto-sessione del progetto sito. Entry più recente in alto.

---

## 2026-05-26 — Incident OneDrive + consolidamento paths definitivi

**Status:** codice tornato in `/Solvo/website/` (decisione di Andrea), repo Git pushato su GitHub privato come backup remoto vero.

### Timeline della giornata

1. **Mattina:** mount OneDrive Personale temporaneamente sparita dal Mac, cartella `website/` apparsa svuotata.
2. **Primo tentativo:** ricostruito scaffolding in `~/Code/solvo-website/` (fuori OneDrive) per evitare ricaduta dell'antipattern Node+sync.
3. **OneDrive tornato:** rsync `/Solvo/website/` originale → `~/Code/` preservando git history (3 commit).
4. **Discussione con Andrea sulla regola "tutto in cartella Claude":** Andrea chiede di rimettere il codice in `/Solvo/`. Eccezione fuori-Claude non giustificata abbastanza per la sua organizzazione.
5. **Test symlink (`node_modules` e `.next` puntati a `~/Library/Caches/solvo-website/`):** `npm install` ha sovrascritto il symlink con cartella reale → strategia fragile.
6. **Decisione finale di Andrea:** codice in `/Solvo/website/`, accetta sync di `node_modules` (56MB + ri-sync ad ogni install) per mantenere ordine.
7. **Push remoto GitHub:** `gh repo create solvostudio/solvo-website --private --source=. --remote=origin --push` ✓. Backup vero indipendente da OneDrive.
8. **Cleanup:** `~/Code/` rimossa (cartelle spostate in /tmp). Pointer `/Solvo/website_MOVED.md` rimosso.

### Paths definitivi

- **Working copy**: `/Users/drog/Library/CloudStorage/OneDrive-Personale/Claude/Solvo/website/` (OneDrive, cartella Claude)
- **node_modules + .next**: cartelle reali dentro la working copy, sincronizzate da OneDrive (trade-off accettato)
- **Repo remoto**: `github.com/solvostudio/solvo-website` (privato, backup vero)
- **Asset brand**: `/Solvo/brand-visual/` (come sempre)

### Git history (locale + remoto)

```
dc3481c chore: progetto spostato OneDrive → ~/Code, WORKLOG aggiornato
5451847 fix: titoli visibili dentro sezioni ink + README e WORKLOG
625cec1 chore: scaffolding iniziale sito Solvo
```

Tutta su `origin/main`.

### Regola consolidata

Le cartelle di lavoro Claude vivono in **OneDrive `/Claude/`** anche se sono progetti Node. Le esperienze (es. file scomparsi del 26/05) restano eccezioni; la sicurezza del codice passa da **GitHub** come backup remoto, non da spostamenti fuori cartella Claude.

Eccezione fuori-Claude solo se davvero giustificata caso per caso.

---

## 2026-05-22 — Sotto-sessione 5a (autonomous): scaffolding MVP v1

**Status:** scaffolding completo, sito gira in locale, **non pubblicato**.

### Cosa ho fatto in autonomia

Andrea ha autorizzato a procedere senza supervisione mentre chiudeva il Mac, con il vincolo "tanto non pubblichiamo niente per ora". Ho preso queste decisioni e le ho eseguite:

**Decisioni tecniche:**
- Stack: **Next.js 16 + Tailwind CSS v4 + TypeScript strict**. Razionale: ecosystem GitHub `solvostudio` già pronto, deploy Vercel istantaneo quando vorrai, MDX nativo per `/insights` futuri, è quello che padroneggio meglio. Coerente con le skill `vercel:*` dell'ambiente.
- App Router (default Next.js 16). Turbopack ON.
- Font via `next/font/google` (self-hosted, no Google Fonts CDN runtime).
- robots: noindex, nofollow — sito non ancora pubblico.

**Decisioni di copy/layout:**
- Routing: `/`, `/andrea`, `/services`, `/insights`, `/contact`. `/about` scartato in favore di `/andrea` (più narrativo, italian-boutique, coerente con dual-layer del dominio).
- Pricing in `/services` esposto in modo trasparente (150€/h base + day rate + retainer + project + success fee 10%). Coerente con la memoria pricing model.
- `/insights` come "coming soon" elegante (apertura fine 2026).
- Tutto il copy è **placeholder editato**: l'ho scritto io ispirandomi al posizionamento ("Operating Partner for Founders", three leve, italian-premium tone) — è da rivedere insieme nella sotto-sessione "copy reale" già parcheggiata.

**Cosa NON ho fatto (per scelta):**
- Nessun deploy live su Vercel.
- Nessuna modifica al DNS / dominio.
- Nessun repo creato su GitHub `solvostudio` (solo git init locale).
- Nessuna OG image vera (placeholder solo metadata).
- Nessun form di contatto (canali diretti email/tel/LinkedIn invece — coerente con il messaggio "una mail chiara con due righe...").
- Nessuna analytics, niente cookie, niente banner.

### Output

Tutto in `/Solvo/website/`:

```
website/
├── README.md           # Setup, struttura, brand tokens
├── WORKLOG.md          # Questo file
├── package.json        # Next 16 + Tailwind 4 + React 19
├── tsconfig.json       # TS strict + path alias @/*
├── next.config.ts
├── postcss.config.mjs  # Tailwind PostCSS
├── src/
│   ├── app/            # Routes + globals.css + layout
│   └── components/     # Header, Footer, Logo, Container, Section
├── public/             # Loghi SVG copiati da /Solvo/brand-visual/
└── screenshots/        # PNG full-page delle 5 pagine
```

Git: branch `main`, 1 commit iniziale. Repo solo locale.

### Verifiche fatte

- `npm install` → 48 packages, 23s, no errors bloccanti (2 moderate audit warnings irrilevanti per ora).
- `npm run build` → 5 pagine statiche prerendered, ✓ in 1.5s con Turbopack.
- `npx tsc --noEmit` → clean.
- Dev server su `:3939` → reachable, screenshot Chrome headless di tutte le 5 pagine.
- Bug visto e fixato in itinere: titoli h2/h3 dentro sezioni `tone="ink"` erano blu-su-blu (invisibili). Aggiunta classe `section-ink` con override colore titoli a `--color-bg-primary`.

### Decisioni da prendere insieme quando torni

Sono i nodi che ho **deliberatamente** non sciolto da solo. In ordine di priorità:

1. **Copy reale.** Tutto il testo è scritto in tono Solvo ma è draft. Va riletto, calibrato, magari riscritto. Sotto-sessione dedicata era già in piano (vedi `project_solvo_brand_visual.md` punti aperti).
2. **GitHub: pubblicare repo su `solvostudio`.** Quando vorrai, comando: `gh repo create solvostudio/solvo-website --private --source=. --remote=origin --push`. Privato o pubblico — decidi tu (suggerisco privato in fase di copy lavorato).
3. **Vercel: collegare repo + deploy preview.** Dopo il push GitHub, importare su Vercel. Preview gratuita su ogni branch. Nessun cost.
4. **DNS: collegare solvo.studio.** Quando il preview deploy ti convince. GoDaddy → CNAME a Vercel. **Solo quando dici tu** — finché il dominio punta a Google Workspace per la mail, va distinto: l'A record dell'apex dominio per il sito non interferisce con i record MX di Workspace.
5. **`/insights` strategy.** Tenere coming-soon o rimuovere completamente dalla nav finché non c'è contenuto? Mio default è coming-soon (segnala futuro intent).
6. **Modulo contatto.** Per ora canali diretti. Vuoi aggiungere un form (con Resend / Plunk per inviare email)? È un'ora di lavoro quando deciderai.
7. **andreadroghetti.com.** Implementare il redirect a `solvo.studio/andrea`. Si fa lato GoDaddy DNS quando il sito principale è live.
8. **Block presence #020D4A.** Andrea aveva detto "una maggiore presenza del colore caratterizzante nei vari blocchi non sarebbe male, ma questa la vediamo quando costruiamo le varie pagine" (memoria brand visual). Ora le pagine ci sono: si possono aumentare i blocchi ink. Da valutare insieme.

### Stato salvato

- `MEMORY.md` aggiornato con cross-reference a questo WORKLOG.
- `project_solvo_setup.md` aggiornato: Step 3 da "DA INIZIARE" a "MVP v1 scaffolding completo in locale, in attesa di decisioni copy/pubblicazione".

### Come riprendere

```bash
cd "/Users/drog/Library/CloudStorage/OneDrive-Personale/Claude/Solvo/website"
npm run dev
# apri http://localhost:3000
```

Per vedere gli screenshot generati: `open screenshots/`.

---
