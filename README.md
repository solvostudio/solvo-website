# Solvo Website

Sito di [solvo.studio](https://solvo.studio) — Operating Partner per founder e scale-up.

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4** con brand tokens nel `@theme`
- **TypeScript** strict
- **Font** Newsreader + Inter via `next/font/google`

## Sviluppo locale

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run typecheck # tsc --noEmit
```

## Struttura

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Brand tokens + base styles
│   ├── andrea/             # /andrea — personal brand page
│   ├── services/           # /services — modalità di ingaggio
│   ├── insights/           # /insights — coming soon
│   └── contact/            # /contact — canali contatto
├── components/
│   ├── Header.tsx          # Nav top con logo S.
│   ├── Footer.tsx          # Footer ink con tre colonne
│   ├── Container.tsx       # Max-w-6xl + padding responsive
│   ├── Section.tsx         # Wrapper sezioni con tone light/subtle/ink
│   └── Logo.tsx            # Logo inline SVG (S. + Solvo. wordmark)
└── lib/                    # (placeholder per MDX insights futuri)

public/
├── logo-esteso.svg         # Logo esteso "Solvo." (ink reverse)
├── logo-esteso-light.svg   # Variante per bg light
├── logo-semplice.svg       # Monogramma "S." (favicon-ready)
└── favicon.svg
```

## Brand tokens

Definiti in `src/app/globals.css` come CSS variables Tailwind v4:

| Token | Hex | Uso |
|---|---|---|
| `--color-bg-primary` | `#FAF8F4` | Sfondo principale (bianco caldo) |
| `--color-bg-subtle` | `#F0EDE5` | Sezioni alternate |
| `--color-text-primary` | `#161616` | Body |
| `--color-text-secondary` | `#5A5A5A` | Caption |
| `--color-ink` ★ | `#020D4A` | Caratterizzante — headline, CTA, block presence |
| `--color-ink-deep` | `#1A2B6E` | Hover ink |
| `--color-amber` | `#C9933C` | Accent 5% — punto signature |
| `--color-border` | `#E8E2D6` | Divider |

## SEO / pubblicazione

Attualmente `robots: { index: false, follow: false }` in `app/layout.tsx`. Rimuovere quando il sito sarà pronto per il pubblico.

## Riferimenti

- Brand visual basics: `/Solvo/brand-visual/Solvo-brand-guidelines.pdf`
- Carta strategica: `project_solvo_v01.md` (memoria)
- Handoff sotto-sessione: `WORKLOG.md`
