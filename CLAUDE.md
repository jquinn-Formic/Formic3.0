# Formic 3.0 — Project conventions for Claude

This file is loaded automatically at the start of every Claude Code session in this repo. Follow these conventions exactly; do not invent alternatives.

## Stack

- Astro 4.16 (static), deployed by Netlify on every push to `main`.
- Optional Sanity CMS (project `q7pbjl6y`); currently most copy is hardcoded in `.astro` files.
- Node 20+. Dev server: `npm run dev` on port 4321.

## Workflow (non-negotiable)

- `main` is protected. **Never push directly to `main`.**
- For every change: branch from `main` as `feat/short-thing` or `fix/short-thing`, commit, push, open a PR via `gh pr create`.
- Commit messages: `Area: short description` on the subject line, blank line, body that explains **why** not **what**. Include `Co-Authored-By: Claude …` trailer.
- Squash-merge PRs. Netlify auto-deploys `main` to production.
- The required Netlify status check is `netlify/snazzy-syrniki-934ac6/deploy-preview`.

## Design language — "restrained"

Anduril-leaning: neutral surfaces, monochrome typography, orange used sparingly as an accent indicator only.

- **Section pattern**: small mono eyebrow (`01 / SECTION`) → big H2 with italic `<em>` accent on the punchy second clause → 1-line blurb → content.
- **Title pattern**: `<h1>Statement here.<br><em>Punchy second part</em>.</h1>`
- **Em-dashes (—) for clauses**, never `--` or ` - `. Hyphenated compound modifiers: "vision-guided," "high-strain," "lights-out."
- Use **design tokens only**: `var(--ink)`, `var(--bone)`, `var(--orange)`, `var(--hairline)`, `var(--sans)`, `var(--mono)` (defined in `public/formic.css`). **Never hardcode hex values.**
- Mono labels: 10–11px, uppercase, .18–.22em letter-spacing.
- Live counters: `font-variant-numeric: tabular-nums`.

## Copy voice

- "Physical AI" is the platform framing across Magic page, Core, Cortex.
- CTAs are verb-led: "Talk with…", "See…", "Schedule…" — never "Click here" or "Learn more" alone.
- Oxford commas. No jargon.
- Be specific when you can: name the customer, the part, the cycle time.

## Code patterns

- `.astro` files use `<style is:global slot="head">` for page-scoped CSS.
- **Class name prefixes by section**, never overlap:
  - `.mg-*` Magic page
  - `.rs-*` homepage Results strip
  - `.sol-*` Solutions tiles
  - `.hpanel-*`, `.htab-*` homepage tab panels and tabs
  - `.db-*` detail-block pattern (used on Results, Learn More, Stories, Solutions)
  - `.mg-stack`, `.mg-layer` Magic architecture stack
- Page-scoped JS: `<script is:inline slot="scripts">` at the bottom of the file. Each page registers an init function added to `initAll()` (see `src/pages/index.astro` for the pattern — `initCounters`, `initNavBottom`, `initHomeSections`, `initLogoMarquees`, `initHomeMagic`, `initHeroStats`).
- Semantic HTML: `<section>`, `<article>`, `<h2>`. Avoid `<div>`-soup.
- Astro layout shared in `src/layouts/Layout.astro` — header, nav, footer. Footer columns: Platform / Solutions / Company (don't add a fourth without asking).

## Image conventions

- Save new images to `public/` with **descriptive kebab-case** names: `Wyandot-Palletizing.jpg`, `Formic-Pallet-Wrapper.jpg`, `Cameron-Cobot-Palletizing.jpg`. **Never** keep camera-roll names like `R52_5055.jpg` in `public/`.
- Alt text describes value to reader, not just contents: `alt="Formic palletizing cell — robot taking on the high-strain stacking task"`.
- Reuse existing `Talos-*.jpg` shots when they fit the section's theme.
- Hero video: `public/Formic-Header.mp4`, referenced site-wide. To replace, overwrite the file; no code change needed.

## File and route map

```
src/
├── pages/
│   ├── index.astro         /
│   ├── magic.astro         /magic       Physical AI deep dive (Core + Cortex split screen)
│   ├── results.astro       /results     four pillars (labor / ergo / productivity / cost)
│   ├── full-service.astro  /full-service
│   ├── learn-more.astro    /learn-more  mission, news, downloads, careers
│   ├── stories.astro       /stories     index + 4 featured cards
│   ├── talk-with-an-expert.astro
│   ├── solutions/index.astro and /solutions/{palletizing,packing,machine-tending,pallet-wrapping,humanoids,amrs}.astro
│   └── stories/{land-o-frost,mariani-family,mi-rancho,taffy-town}.astro
├── layouts/Layout.astro    shared nav + footer + global head
└── lib/sanity.ts           Sanity client wrapper
public/
├── formic.css              design tokens (--ink, --bone, --orange, --hairline, --sans, --mono)
├── Formic-Header.mp4       site-wide hero video
├── Talos-*.jpg, Focus-*.jpg, *.gif  primary image library
└── logos/                  customer logo SVGs
```

## What to never do

- Never push directly to `main`.
- Never hardcode hex colors — always use tokens.
- Never invent new class prefixes; reuse an existing one.
- Never duplicate copy across pages; if the same line appears in two places, move it to `Layout.astro` or ask first.
- Never replace `Formic-Header.mp4` references with a new filename — overwrite the file instead, so all 19 references stay valid.
- Never bypass the Netlify deploy-preview check on a PR.

## When in doubt

- Look at how the closest existing page solves the problem before inventing a new pattern.
- Read recent merged PRs (`gh pr list --state merged`) to see how changes are typically shaped.
