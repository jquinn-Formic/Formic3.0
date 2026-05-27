# Welcome to Formic 3.0

This is the marketing site for Formic Technologies — Astro static site, deployed by Netlify on every push to `main`. This doc is your "how we work" intro so you can move fast without breaking convention.

---

## 1. Start working in 90 seconds — no installs

1. Open the repo: <https://github.com/jquinn-Formic/Formic3.0>
2. Click the green **Open in Codespaces** badge in the README → **Create codespace on main**
3. Wait ~90 seconds. The dev server starts itself; a notification offers to **Open in Browser** — that's your live preview URL.
4. Edit any file under `src/pages/`. Hit save. The preview hot-reloads.
5. **Source Control** sidebar (Ctrl/Cmd + Shift + G) → type a commit message → **Commit** → **Sync Changes** → **Create Pull Request**. Netlify posts a preview URL on the PR within ~2 minutes.

Reuse the same Codespace forever. Create a fresh one only if something gets weird.

---

## 2. Optional: Claude Code inside your Codespace

For bigger changes (rewriting a section, finding references, generating new pages), an AI assistant helps a lot:

```bash
# In your Codespace terminal:
npm install -g @anthropic-ai/claude-code
claude    # opens browser for you to log into your Claude account
```

Then ask things like:

- "Rewrite the `/magic` hero to match this copy: …"
- "Find every reference to `/Talos-0143.jpg` and tell me what each one is for."
- "Add a new solution page like `/solutions/palletizing` but for cobot welding."

The project's conventions in this repo's `CLAUDE.md` load automatically — your Claude follows the same patterns Jonathan's Claude follows.

---

## 3. Workflow rules (enforced on `main`)

- `main` is protected: **no direct pushes**. Always open a PR.
- Branch from `main`: `feat/short-thing-here` or `fix/short-thing-here`.
- Commit messages: `Area: short description` on the subject; explain **why** in the body, not what.
- **Squash-merge** to `main`. Netlify auto-deploys.
- The Netlify deploy-preview check must pass before merging.

---

## 4. Design language — "restrained"

The site uses an Anduril-leaning visual system: neutral surfaces, monochrome typography, orange used sparingly as an accent indicator only.

- **Section pattern**: small mono eyebrow `01 / SECTION NAME` → big H2 with an italic `<em>` accent on the punchy second clause → 1-line blurb → content.
- **Typography**: sans for headlines using `clamp()` for fluid sizes; mono (`var(--mono)`) for labels and numbering — ~10–11px uppercase, .18–.22em letter-spacing.
- **Colors**: use design tokens — `var(--ink)`, `var(--bone)`, `var(--orange)`, `var(--hairline)`. Defined in `public/formic.css`. **Never hardcode hex.**
- **Punctuation**: em-dashes (—) for clauses; hyphenated compound modifiers ("vision-guided," "high-strain," "lights-out").

---

## 5. Copy voice

- **"Physical AI"** is the platform framing across Magic, Core, Cortex.
- Title pattern: `<h1>Statement here.<br><em>Punchy second part</em>.</h1>`
- Oxford commas yes. Avoid jargon.
- CTAs are verb-led: "Talk with…", "See…", "Schedule…" — never "Click here."
- Be specific when you can: "Cameron's cobot palletizing fleet" beats "an automated palletizer."

---

## 6. Code patterns

- Astro files use `<style is:global slot="head">` for page-scoped CSS.
- Class name prefixes per section:
  - `.mg-*` Magic page
  - `.rs-*` homepage Results strip
  - `.sol-*` Solutions tiles
  - `.hpanel-*` homepage tab panels
- Page-scoped JS goes in `<script is:inline slot="scripts">`. Init functions wire through one `initAll()` chain — see `src/pages/index.astro` for the pattern.
- Semantic HTML: `<section>`, `<article>`, `<h2>`. No `<div>`-soup.

---

## 7. Images

- Save new images to `public/` with **descriptive kebab-case** names: `Wyandot-Palletizing.jpg`, `Formic-Pallet-Wrapper.jpg`, `Cameron-Cobot-Palletizing.jpg`.
- Alt text describes the **value to the reader**, not just "robot doing thing." Example: `alt="Formic palletizing cell — robot taking on the high-strain stacking task"`.
- Reuse existing `Talos-*.jpg` shots when they fit.

---

## 8. Where things live

```
src/
├── pages/                  every route on the site
│   ├── index.astro         /            homepage
│   ├── magic.astro         /magic       AI platform deep dive (Core + Cortex)
│   ├── results.astro       /results     four pillars
│   ├── learn-more.astro    /learn-more  mission, news, careers, downloads
│   ├── stories.astro       /stories     customer stories index
│   ├── solutions/*.astro   /solutions/* one per solution type
│   └── stories/*.astro     /stories/*   one per customer
├── layouts/Layout.astro    shared nav + footer (edit here, applies everywhere)
└── lib/sanity.ts           Sanity client (CMS, optional)

public/                     static assets — images, videos, /formic.css (design tokens)
.devcontainer/              Codespaces config — leave alone unless you mean to
CLAUDE.md                   conventions Claude Code follows on this repo
README.md                   the Codespaces "Open in" badge + short setup
```

---

## 9. When you get stuck

- Ping Jonathan.
- Run `claude` in your Codespace terminal and ask it.
- For "is this the right pattern?" — look at how the closest existing page does it.

---

## 10. Things you don't need to worry about

Jonathan handles these:

- Domain / DNS for formic.co
- Netlify deploys (automatic on merge to `main`)
- Sanity project access and tokens
- Billing for Codespaces, Netlify, Claude

---

That's it. Have fun.
