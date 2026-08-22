# CLAUDE.md

Guidance for Claude Code (and other AI assistants) working in this repository.

## What this is

A marketing/funnel site for **Logan & Trey**, teaching people to start and
scale their own window cleaning business. Built as a sibling of the
`brand-acquisition-funnel` codebase (same Next.js/Tailwind stack and
conversion-flow pattern), restyled and rewritten around Logan & Trey's real
story: Logan started with a $250 Amazon window cleaning kit and zero
experience, Trey joined after a $750 first day, they made $10,000 their
first summer around school, and the business now runs $20K+ months with a
team of two technicians and a sales rep, backed by a CRM and 40,000+
followers of door-to-door content.

This build **intentionally omits the content-audit quiz** the reference
funnel has (`/content-audit` and its OpenAI/ConvertKit wiring) — not part
of this client's offer.

- **`/` (the funnel)** — a long vertical scroll of sections (hero → social
  proof → results → blueprint → mentor bio → comparison → FAQ → footer),
  ending in a repeated "Apply Now" CTA that opens an inline application
  form after a video sales letter (VSL).
- **`/thank-you`** — the page qualified applicants land on after booking a
  call for the **VIP** offer ($2,000). A "watch these before your call"
  page: one welcome video, five question-and-answer breakdown videos, then
  more proof of the business's results.
- **`/thank-you-mid`** — the same post-booking pattern, but for the **Pro**
  offer ($500). Its own welcome video and **six** (not five) FAQ videos —
  see the `QUESTIONS` array in `ObjectionVideosMid.tsx`.
- **`/offer`** — a self-contained sales page for the **Starter Kit**
  ($30, one-time), which respondents land on directly (no call to book —
  it's a self-serve purchase). Classic long-form VSL sales page structure:
  hero with VSL + checkout, an "Everything Inside The Starter Kit" bullet
  list, a proof stack, an authority/bio section, and a closing push. A
  `CtaButton` repeats after every section, each with different copy,
  scrolling back up to the hero's checkout (`href="#checkout"`).

## Conversion flow

1. Visitor lands on `/`, watches the VSL, fills out the inline application
   form.
2. The form's own routing logic (configured in the site owner's
   Typeform/similar account, not in this codebase) sends respondents one
   of three ways: Starter Kit qualifiers go straight to `/offer` (no call
   — self-serve purchase); Pro and VIP qualifiers each get their own
   Cal.com booking link.
3. After booking, each Cal.com **Event Type** needs its own **Advanced →
   "Redirect on booking"** setting pointing at the matching page on this
   site: the Pro event type → `/thank-you-mid`, the VIP event type →
   `/thank-you`. Both are Cal.com dashboard settings, not anything this
   codebase controls.
4. `/thank-you` (or `/thank-you-mid`) plays objection-breakdown videos and
   shows more results while the applicant waits for the call. `/offer`
   instead pitches the $30 Starter Kit directly with a VSL and repeated
   buy CTAs.

## Everything is a placeholder right now

**No real videos, photos, form, checkout, or booking links exist yet.**
Every spot where one belongs uses one of four "slot" components
(`src/components/ui/`), each rendering a clearly labeled placeholder box
with the exact spec of what's needed:

- **`VideoSlot`** — stands in for a VSL, welcome video, or Q&A video.
  Pass `embedUrl` (once the real video is hosted somewhere — Wistia,
  YouTube, Loom, etc.) and it renders that instead of the placeholder.
- **`ImageSlot`** — stands in for a headshot or proof screenshot. Pass
  `src` (a path under `public/images/`, once the real file is added) and
  it renders that instead of the placeholder.
- **`FormSlot`** — stands in for the application form on `/`. Pass
  `embedUrl` (the real form's share URL) once it exists.
- **`CheckoutSlot`** — stands in for the `/offer` checkout widget. Pass
  `embedUrl` once the $30 Starter Kit product exists in a payment
  processor.

In every case, swapping a placeholder for the real thing is a one-line
prop change at the call site in the relevant section component — no
structural changes needed. See `docs/funnel/asset-manifest.md` for the
full, page-by-page list of every video and photo needed, written to be
sent directly to Logan and Trey.

## Stack

- **Next.js 16** (App Router, Turbopack), React 19, TypeScript
- **Tailwind CSS v4** (CSS-first config via `@theme inline` in
  `src/app/globals.css` — there is no `tailwind.config.ts`)
- No database, no auth, no API routes. Every route is fully static.
- Font: `next/font/google` Geist, loaded once in `src/app/layout.tsx`.

## Dev workflow

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build; also runs the TypeScript check
npm run lint    # eslint (flat config in eslint.config.mjs)
```

There is no test suite. Before calling a change done:
1. `npm run lint` and `npm run build` must pass cleanly.
2. For anything visual, run `npm run dev` and actually look at the page
   (desktop **and** narrow/mobile width — this design is mobile-first and
   the whole page lives inside one centered `max-w-xl` column even on
   desktop).
3. If you touch `Faq.tsx`, verify the accordion still opens/closes — it's
   the only stateful interaction on `/`.

## Structure and conventions

```
src/app/
  layout.tsx              # root layout: font, <html>/<body>, metadata (applies to every route)
  globals.css              # Tailwind import + design tokens (@theme inline)
  page.tsx                 # the funnel ("/"): one <SectionComponent /> per section, in scroll order
  thank-you/page.tsx        # the VIP post-booking page ("/thank-you")
  thank-you-mid/page.tsx    # the Pro post-booking page ("/thank-you-mid") — same layout,
                            # own Welcome/Objection video sections (six FAQ videos, not five)
  offer/page.tsx            # the Starter Kit ($30) sales page ("/offer")
src/components/
  ui/                     # generic, content-agnostic primitives, including the four
                          # placeholder "slot" components described above
  sections/               # one file per page section; the funnel, both thank-you
                          # pages, and /offer's sections (Offer*.tsx) all live here,
                          # matching their page.tsx order
public/images/             # real photos/screenshots go here once provided —
                            # currently empty; every reference is a placeholder
docs/funnel/
  asset-manifest.md        # the full list of every video/photo needed, by page
```

- **Sections are Server Components by default.** Only `Faq.tsx` has
  `"use client"` (it needs `useState` for the accordion).
- **Section anatomy**: every section is `<section className="py-16"><Container>...</Container></section>`.
  Reuse `Container` for the centered column. Repeated visual motifs:
  - `Pill` — small rounded badge (blue dot + text), used in the hero.
  - `CtaButton` — the "APPLY NOW / Book your intro call" button + italic
    subtext. Appears after most sections — always via this component.
  - `Card` — bordered, rounded, dark "elevated" panel background.
  - `SectionHeading` — eyebrow + title + optional subtitle, centered.
- **Copy is hardcoded** in the section components (a single fixed offer
  page, not a CMS-driven site). FAQ entries live as a `FAQS` array at the
  top of `Faq.tsx`; comparison items are `WITH_US` / `WITHOUT_US` arrays
  in `Comparison.tsx`. Edit those arrays rather than the JSX when
  changing text.
- Everything routes through the `@/*` import alias (`src/*`), configured
  in `tsconfig.json`.

## Design tokens (`src/app/globals.css`)

Dark theme only — no light-mode media query, no toggle. Deliberately a
different accent from the `brand-acquisition-funnel` site (cyan/sky blue
instead of indigo) to keep this brand visually distinct:

| Token | Hex | Use |
|---|---|---|
| `background` | `#05070d` | page background |
| `background-elevated` | `#0a0f1a` | cards, placeholder boxes, pills |
| `foreground` | `#f4f8fb` | primary text |
| `muted` | `#93a5b1` | secondary text |
| `accent` | `#2fc6ef` | brand cyan — links, highlighted words, CTA |
| `accent-dim` | `#1a9fc4` | CTA hover state |
| `danger` | `#e5484d` | the "✕" / most-people-fail-because list |
| `border` | `#1c2c39` | card/panel borders, placeholder box borders |

## What's intentionally not built yet

- `/privacy` and `/terms` — footer links currently point to `#`.
- No analytics/pixel wiring (Meta/TikTok pixels etc.).
- The application form → Cal.com and Cal.com → `/thank-you`/`/thank-you-mid`
  redirects live in the site owner's form/Cal.com dashboards, not in this
  codebase (see "Conversion flow" above).
- No `/content-audit` — deliberately excluded, not part of this offer.
