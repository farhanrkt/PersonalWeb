# Portfolio — farhanrkt

Personal site and case studies for [QuantDesk](https://github.com/farhanrkt/QuantDesk),
[ScholarTrack](https://github.com/farhanrkt/ScholarshipTracker) and
[LinguaKu](https://github.com/farhanrkt/LinguaKu).

## Stack

| Layer    | Choice                                             |
| -------- | -------------------------------------------------- |
| Framework | Next.js 16 (App Router, React 19, Server Components) |
| Styling  | Tailwind CSS v4, dark-only palette defined in `@theme` |
| Fonts    | Geist Sans + Geist Mono, self-hosted via `next/font` |
| Images   | OG cards and favicon generated at build time by `next/og` |
| Deploy   | Vercel — every route is static                     |

No client-side JavaScript is shipped for interactivity: every page is a Server
Component, and the scroll reveals are CSS scroll-driven animations that fall
back to plain visible content where `animation-timeline` is unsupported.

## Editing content

Everything readable lives in two files — no JSX edits needed for routine changes.

- **`lib/site.ts`** — name, role, tagline, email, social links, availability,
  the intro paragraphs, and the stack groups on the home page.
- **`lib/projects.ts`** — one object per project: metrics, problem statement,
  how-it-works sections, decisions, limitations and stack table. Adding an entry
  to the `projects` array creates its case-study page, its OG image and its
  sitemap entry automatically.

The per-project diagrams are hand-drawn SVG in `components/signature.tsx`, keyed
by slug. A project without a matching key simply renders no diagram.

## Commands

```bash
npm run dev        # dev server on :3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run check      # typecheck + lint + build
```

## Deploying

Push to GitHub, then import the repository at
[vercel.com/new](https://vercel.com/new). No environment variables and no build
configuration are required. Set `site.url` in `lib/site.ts` to the final domain
so canonical URLs, OG tags and the sitemap point at the right place.
