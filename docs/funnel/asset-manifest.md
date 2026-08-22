# Asset Manifest — What Logan & Trey Need To Send Over

Every video and photo the funnel needs is currently a labeled placeholder
box on the live pages (dashed border, camera/image icon, instructions
inside it). This doc is the same list in one place — send it to Logan &
Trey as-is, and once the files come back they get dropped in and every
placeholder they match disappears automatically.

**7 unique photos** and **15 short videos** total (several photos are
reused across multiple pages — send one file, it covers every spot listed
under it).

---

## Photos (7 files, reused across pages)

| # | What we need | Used on |
|---|---|---|
| 1 | **Logan headshot** — square crop, tight to the face/shoulders, no background clutter | Home (`/`) Mentor section, `/offer` Authority section |
| 2 | **Trey headshot** — same crop style as Logan's | Home (`/`) Mentor section, `/offer` Authority section |
| 3 | **Social profile screenshot** — full screenshot of the TikTok or Instagram profile page showing 40K+ followers and total likes/views | Home (`/`) Mentor section, `/offer` Authority section, `/thank-you` More Results, `/thank-you-mid` More Results |
| 4 | **Trey's first $750 day** — a screenshot proving it: CRM job total, payment app screenshot, or bank deposit. Redact any customer's personal info (name/address/phone). | Home (`/`) Results, `/offer` Results |
| 5 | **Logan's first $1,000** — screenshot of the revenue total, deposit, or CRM summary at that milestone | Home (`/`) Results, `/offer` Results |
| 6 | **First-summer $10,000 total** — screenshot of a revenue summary (CRM report, spreadsheet, or bank summary) showing the season total | Home (`/`) Results, `/offer` Results |
| 7 | **Current ~$20K month** — screenshot of the CRM/revenue dashboard showing a recent month around $20,000 | Home (`/`) Results, `/offer` Results, `/thank-you` More Results, `/thank-you-mid` More Results |

---

## Videos (15 total)

### Home page (`/`) — 1 video
- **Main VSL**: 3–6 minutes. Logan and Trey talking to camera (or narrated
  over route/job B-roll), telling the $250-kit-to-$20K/month story and
  pitching the roadmap. Landscape 16:9.

### `/offer` — Starter Kit ($30) — 1 video
- **Low-ticket VSL**: 60–120 seconds, pitching the $30 Starter Kit
  specifically — what's inside, who it's for, how fast someone can use
  it. Landscape 16:9.

### `/thank-you-mid` — Pro ($500) — 7 videos
- **Welcome video**: 60–90 sec, confirming the Pro booking and setting
  expectations for the call.
- **6 Q&A videos** (60–90 sec each, 16:9), one per question:
  1. Do I need experience or equipment already?
  2. Do I need to know how to knock doors or sell?
  3. I'm busy with school or a job — do I have time for this?
  4. What if I don't have a team yet?
  5. How much does it cost, and how does it work?
  6. How fast can I see results?

### `/thank-you` — VIP ($2,000) — 6 videos
- **Welcome video**: 60–90 sec, confirming the VIP booking and setting
  expectations for the call.
- **5 Q&A videos** (60–90 sec each, 16:9), one per question:
  1. How fast can I see results?
  2. How much does this cost?
  3. What if I have zero experience cleaning windows?
  4. What if I'm busy with school or work?
  5. Do I need a team, or can I start alone?

---

## Not a video or photo, but still needed before this goes live

- **Application form** (Typeform or similar) with real qualification
  logic: routes Starter Kit applicants straight to `/offer`, and routes
  Pro / VIP applicants to their own separate Cal.com booking links.
- **Two Cal.com event types** (or equivalent booking tool) — one for the
  Pro call, one for the VIP call — each with its "redirect on booking"
  setting pointing at `/thank-you-mid` and `/thank-you` respectively.
- **A $30 one-time product** set up in a payment processor (Whop, Stripe,
  Gumroad, etc.) for the `/offer` checkout.

None of the above are code changes — they're accounts/settings on
Typeform, Cal.com, and a payment processor. Once they exist, the relevant
`FormSlot` / `CheckoutSlot` component just needs the real embed URL
passed in.
