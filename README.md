# Formic 3.0

The Formic marketing site — Astro + Sanity. Production: [formic.co](https://formic.co) (deployed by Netlify on every push to `main`).

## Contribute — no setup required

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jquinn-Formic/Formic3.0?quickstart=1)

1. Click the badge above. Sign in to GitHub if prompted, then **Create codespace**.
2. Wait ~90 seconds. The dev server starts itself; a notification pops up offering to **Open in Browser** — that's your live preview URL.
3. Edit any file under `src/pages/`. Hit save. The preview tab hot-reloads.
4. When you're happy:
   - Open the **Source Control** sidebar (Ctrl/Cmd + Shift + G).
   - Type a short message, click **Commit**, then **Sync Changes**.
   - Click **Create Pull Request**. Netlify posts a preview URL on the PR within a couple of minutes — share that link before merging.

That's the whole loop. You never leave the browser tab.

## Project layout

```
src/
├── pages/               every route on the site
│   ├── index.astro      /
│   ├── magic.astro      /magic
│   ├── results.astro    /results
│   ├── learn-more.astro /learn-more
│   ├── stories.astro    /stories
│   ├── solutions/       /solutions/*
│   └── stories/         /stories/*
├── layouts/Layout.astro shared nav + footer
└── lib/sanity.ts        Sanity client (CMS, optional)
public/                  static assets — images, videos, /formic.css
astro.config.mjs         site config + redirects
```

## Local setup (optional)

If you'd rather work on your own machine:

```bash
git clone https://github.com/jquinn-Formic/Formic3.0.git
cd Formic3.0
npm install
npm run dev   # http://localhost:4321
```

Requires Node 20+.

## Workflow conventions

- One change per branch. Branch names: `feat/short-thing`, `fix/short-thing`.
- Squash-merge PRs to `main`. Netlify auto-deploys `main` to production.
- Need a CMS-driven content edit? Run `npm run studio` to launch Sanity Studio locally.
