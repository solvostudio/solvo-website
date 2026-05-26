# WORKLOG — Sito Solvo

Diario di sotto-sessione del progetto sito. Entry più recente in alto.

---

## 2026-05-26 — Spostamento OneDrive → ~/Code/ (incident recovery)

**Status:** sito spostato da OneDrive a path locale. Tutto funzionante.

### Cosa è successo

OneDrive Personale è temporaneamente sparito come mount dal Mac. Tutta la cartella `Claude/` (sito compreso) era inaccessibile da terminale. Quando OneDrive è tornato, abbiamo deciso di spostare il sito **fuori** dalla cartella sincronizzata: `node_modules` (decine di migliaia di file) e `.next` (riscritti continuamente da Turbopack) sono **antipattern** in cartelle sync.

### Mossa eseguita

1. `mv ~/Code/solvo-website` → `~/Code/solvo-website.recon_backup` (backup defensivo di una ricostruzione fatta nel frattempo)
2. `rsync -a --exclude='node_modules' --exclude='.next' --exclude='tsconfig.tsbuildinfo' --exclude='next-env.d.ts'` da `/Solvo/website/` → `~/Code/solvo-website/`
3. `npm install` nel nuovo path
4. `npm run build` → ✓ 5 pagine statiche prerendered
5. Dev server up su :3939
6. Pointer permanente lasciato in `/Solvo/website_MOVED.md` (OneDrive)

### Cleanup ancora da eseguire (rm -rf bloccato da policy)

```bash
rm -rf "/Users/drog/Library/CloudStorage/OneDrive-Personale/Claude/Solvo/website"
rm -rf ~/Code/solvo-website.recon_backup
```

### Git history preservata

```
5451847 fix: titoli visibili dentro sezioni ink + README e WORKLOG
625cec1 chore: scaffolding iniziale sito Solvo
```

### Pattern operativo consolidato

- **Codice**: `~/Code/solvo-website/`
- **Asset brand**: `/Solvo/brand-visual/` (OneDrive)
- **Cross-reference**: quando il sito ha bisogno di un asset, `cp` dal path OneDrive a `~/Code/.../public/`
- Memoria aggiornata: [[project_solvo_website]], [[feedback_onedrive_node_antipattern]]

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
