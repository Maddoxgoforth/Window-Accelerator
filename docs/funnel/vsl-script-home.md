# VSL Script — Home Page (`/`)

Fills the "Main VSL — Home Page" placeholder in `Hero.tsx`. Written for a
single narrator (Trey, referring to Logan by name and story) to match how
the "Our Window Cleaning Journey" doc is written in first person. Could
also be shot as a two-person dialogue with Logan — see note at the bottom.

**Est. length:** ~830 words → roughly 5–6 min at a deliberate, conversational
pace. Matches the "3–6 min" spec already on the placeholder.

**Adapted from:** Maddox's own VSL script (provided as reference), keeping
the same structural beats — hook, credibility, origin story, reframe,
3-step framework, leverage explanation, business economics, offer,
disqualifier, CTA — but rewritten around Logan & Trey's real story rather
than reusing Maddox's. One deliberate deviation: the reference script's
origin beat is "tried dropshipping, crypto, day trading, SMMA, lawn
mowing, pressure washing, trash cans — quit each one." That's not Logan &
Trey's story, so it's not in here — their real origin (a $250 kit, zero
experience, and committing from the first door) does the same narrative
job without putting words in their mouths.

---

## Script

**[HOOK]**

You're the type who's seen the videos — guys knocking doors, showing off
the checks, the trucks, the routes — and part of you thinks, "I could do
that." Maybe you bought a kit and it's still sitting in the garage. Maybe
you knocked a couple doors, got a couple no's, and figured it wasn't for
you. Give me the next few minutes, and I'll show you exactly how two of
us turned a $250 Amazon kit into a business doing $20,000-plus a month.

**[CREDIBILITY]**

I'm Trey. Along with my business partner Logan, we've built a window
cleaning company that's done multiple $20K months, built an audience of
40,000-plus followers documenting the entire thing, and we did it after
realizing something most people never figure out: the guys winning at
this aren't the ones with the nicest equipment. They're the ones who
actually knock the door.

**[ORIGIN]**

Here's how it started. Logan saw a few videos of people making real money
cleaning windows, bought a $250 kit off Amazon, and had zero experience —
none. He practiced his pitch on nobody in particular, then went out into
his own neighborhood and started knocking. A few doors said no. Then one
said yes. Then another. And before long, he'd made his first $1,000.

**[TURNING POINT]**

When he told me what he was doing, we went out together. My first day
out, we made $750. That was the moment it stopped being a "maybe" and
started being real. I bought the same $250 kit, and from there we learned
everything by actually doing it — pricing on the spot, handling
rejection, figuring out what actually works at the door.

**[RESULT]**

We didn't have a team, a truck wrap, or a big territory. Just a kit and a
willingness to keep knocking after a door said no. That first summer,
working it around school, we made $10,000. Not because we were special —
because we kept showing up after most people would've quit.

**[REFRAME — WHY MOST PEOPLE NEVER GET HERE]**

And that's really the whole thing nobody tells you: you're not stuck
because you live in the wrong area, or you don't have the right
equipment, or window cleaning "doesn't work anymore." You're stuck
because you're waiting to feel ready before you knock the first door.
Every day you see someone else's route, someone else's truck, and it eats
at you — not because you're scared of the work, but because you're scared
of hearing no.

Here's the truth: most people who buy a kit never knock a single door.
The ones who do, and quit after the first no, never find out it gets
easier fast. The business isn't complicated. It's just uncomfortable for
about two weeks.

**[THE FRAMEWORK]**

So here's exactly how we'd do it if we were starting over, and it comes
down to three things.

One — pick your area and get the minimum kit. You don't need $2,000 in
equipment to start. We started with $250.

Two — learn the pitch and the pricing cold. You need one script you can
say without thinking, and a pricing system so you're never guessing a
number on someone's doorstep.

Three — knock consistently, and track everything. One good day doesn't
make a route. A route comes from doors knocked, follow-ups, and repeat
customers — which is exactly why we built our own systems and a CRM to
track every door, every yes, every no.

**[WHY SYSTEMS CHANGE EVERYTHING]**

That's the part that actually changes everything — not the kit, the
systems. Our pricing calculator, our scripts, our CRM setup — that's
leverage. It's the difference between guessing at every door and knowing
exactly what to say and what to charge before you knock. It's what let
two of us build a team instead of staying two guys doing every job
forever.

**[THE ECONOMICS]**

And here's something people get backwards: it's way easier to land ten
homeowners on a full package — windows, screens, gutters — than to knock
a thousand doors chasing the cheapest job in the neighborhood. You don't
need a massive territory to make real money. You need the right pitch in
front of the right homeowner, and a system that turns a one-time job into
a repeat customer.

**[THE OFFER]**

This is the exact system we coach people through directly. Here's what
you get: an 8-week roadmap built around your market, direct chat access
to me and Logan, and regular 1-on-1 calls with us throughout the program.
You get our full course library — everything from picking your service
area to pricing, marketing, upsells, and building a team — plus our AI
Quote & Route Generator, our complete resource library of contracts,
scripts, and templates, and a private community of people building this
at the same time as you.

And if you don't make your investment back, we'll refund you. *[Logan &
Trey — confirm the exact terms and timeframe you're comfortable
guaranteeing before this gets filmed; don't promise a number neither of
you has actually tested.]* The goal isn't just to make your money back —
it's to get your route to real, repeat customers, the same foundation
that got us to our first $10,000 that summer. The work's on you. But if
you're willing to knock the door, we'll show you exactly what to say when
it opens.

**[DISQUALIFIER]**

This isn't for everyone. If you're looking for a business that doesn't
require you to talk to a single homeowner, this isn't it. And if you're
going to buy the kit and let it sit in the garage, don't bother.

**[CTA]**

But if you're the person who's watched enough of these videos and you're
ready to go knock the door yourself, click the button below, fill out a
short application, and book a call with our team. We'll look at where
you're at, and either way, you'll leave with a clear next step. If you
meet what we're looking for, apply now — we'll talk soon.

---

## Notes for filming

- **Two-person option:** every "I/me" line works fine split between Logan
  and Trey on camera — e.g. Logan delivers his own origin beat directly
  ("I saw a few videos...") instead of Trey narrating it in third person.
  If filming as a duo, that's a stronger choice than this solo version.
- **The bracketed guarantee note** is the one line in here that isn't
  ready to say on camera as-is — it mirrors the same open item flagged in
  `docs/offers/window-accelerator-offers.md` (guarantee terms need real
  numbers once the offer's been tested). Fill in the actual promise before
  recording that section.
- Once filmed, this replaces the "Main VSL — Home Page" placeholder in
  `src/components/sections/Hero.tsx` by passing the hosted video's
  `embedUrl` into `VideoSlot`.
