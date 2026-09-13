# farhanrangkuti.vercel.app

Personal professional site for Farhan Rangkuti — data scientist. Case studies for
[QuantDesk](https://github.com/farhanrkt/QuantDesk),
[ScholarTrack](https://github.com/farhanrkt/ScholarshipTracker) and
[LinguaKu](https://github.com/farhanrkt/LinguaKu), plus the ICICyTA 2024 paper,
an analysis index, and writing.

Live at **https://farhanrangkuti.vercel.app**.

## Stack

| Layer     | Choice                                                        |
| --------- | ------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, React 19, Server Components)          |
| Styling   | Tailwind CSS v4; tokens declared in `@theme` in `app/globals.css` |
| Fonts     | Petrona (text serif) + Archivo Narrow (label sans), `next/font/google` |
| Images    | OG cards and favicon generated at build time by `next/og`     |
| Analytics | Vercel Web Analytics — cookieless, production only            |
| Deploy    | Vercel — every route is static                                |

Every page is a Server Component and no interactive client JavaScript is shipped.
The single client-side script is the Vercel Analytics beacon in `app/layout.tsx`,
which is inert outside production.

## Design

The palette is warm paper, not white — a deliberate choice, because two of the
three products have dark UIs and were reading as pasted-on against a white
ground. Light and dark schemes are both defined; dark is served via
`prefers-color-scheme`, with no toggle and no stored preference.

`DESIGN.md` is the authority: it carries the tokens, the eight canonical
sections, and a set of named rules that constrain future edits — The One Screen
Rule, The Crop Only Downward Rule, The Real Screenshot Rule, and others.
`PRODUCT.md` holds the product truth — what this site claims, what it
deliberately omits, and why. Read both before changing anything visual;
several rules exist because an earlier build broke them.

## Content

Everything readable lives in `lib/` — no JSX edits needed for routine changes.

| File               | Holds                                                                 |
| ------------------ | --------------------------------------------------------------------- |
| `lib/site.ts`      | Name, role, contact, canonical URL, photo path, intro, proof lines, background, education, certifications, capabilities |
| `lib/projects.ts`  | One object per project: metrics, problem, how-it-works sections, decisions, limitations, screenshots |
| `lib/research.ts`  | The ICICyTA 2024 paper — abstract, method, results table, findings    |
| `lib/writing.ts`   | Essays; one object per piece                                          |
| `lib/analysis.ts`  | The notebook index — modelling work that isn't a deployed product     |
| `lib/excluded.ts`  | What the site does not show, and why it was left out                  |

Adding an entry to `projects` or `pieces` creates its page, its OG image and its
sitemap entry automatically.

Per-project diagrams are hand-drawn SVG in `components/signature.tsx`, keyed by
slug; a project without a matching key renders no diagram.

### Screenshots

`public/images/` holds real screenshots of the running applications, captured
from the live deployments — never mockups, stock photography or invented charts.
Each project's `imageW`/`imageH` must match the file's true pixel dimensions, or
the card crop misbehaves.

> Next's image optimiser caches by filename. Replacing an image in place serves
> the stale optimisation even after clearing `.next/cache/images`. Give a
> replacement a new filename.

## Commands

```bash
npm run dev        # dev server on :3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run check      # typecheck + lint + build
```

## Deploying

Pushes to `main` deploy automatically. No environment variables and no build
configuration are required.

Web Analytics must be switched on once per project, under **Analytics** in the
Vercel dashboard; the `<Analytics />` component reports nothing until it is.

If the domain changes, update `site.url` in `lib/site.ts` — canonical URLs, the
sitemap, `robots.txt` and every OG image read from it.
