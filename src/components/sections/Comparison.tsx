import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";

const WITH_US = [
  "KNOCK DOORS, MAKE THE PITCH, AND ACTUALLY GET PAID",
  "REAL PRICING, SCRIPTS & SYSTEMS — NO GUESSWORK",
  "A ROADMAP BUILT BY PEOPLE WHO'VE KNOCKED THE SAME DOORS",
  "BUILD A ROUTE THAT RUNS WITHOUT YOU DOING EVERY JOB",
  "YOU DO THE WORK. WE GUIDE YOU. YOU GET PAID.",
];

const WITHOUT_US = [
  "BUY A KIT OFF AMAZON AND NEVER KNOCK A SINGLE DOOR",
  "GUESS AT PRICING AND UNDERCUT THEMSELVES ON EVERY JOB",
  "QUIT THE MOMENT A FEW DOORS SAY NO",
  "STAY A ONE-MAN JOB FOREVER, NEVER BUILD A TEAM",
  "TRY TO FIGURE OUT SYSTEMS FROM SCRATCH, ALONE",
];

export default function Comparison() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            ⚠️ WHY MOST PEOPLE NEVER MAKE IT PAST THE FIRST FEW DOORS
          </h2>
          <p className="text-muted">And Why Ours Build A Real Route Fast</p>
        </div>

        <div className="w-full rounded-2xl bg-accent p-6">
          <p className="mb-4 flex items-center gap-3 text-lg font-extrabold text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-accent">
              ✓
            </span>
            WITH LOGAN &amp; TREY:
          </p>
          <ul className="flex flex-col gap-3">
            {WITH_US.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-zinc-900"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full rounded-2xl border border-rose-900/50 bg-rose-950/20 p-6">
          <p className="mb-4 flex items-center gap-3 text-lg font-extrabold text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-danger text-white">
              ✕
            </span>
            MOST PEOPLE:
          </p>
          <ul className="flex flex-col gap-3">
            {WITHOUT_US.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-zinc-900"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger text-xs text-white">
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <CtaButton />
      </Container>
    </section>
  );
}
