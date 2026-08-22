"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const FAQS = [
  {
    q: "WHAT EXACTLY AM I GETTING?",
    a: "A roadmap built around your market, direct access to Logan and Trey, the full course library, our pricing calculator and AI quote & route generator, the complete template library, and a private community building the exact same thing.",
  },
  {
    q: "DO I NEED EXPERIENCE OR EQUIPMENT ALREADY?",
    a: "No. Logan started with a $250 kit off Amazon and zero experience — that's the whole point. We show you exactly what to buy, how to price your first jobs, and how to knock your first door. What matters is that you show up and knock.",
  },
  {
    q: "HOW MUCH TIME DO I NEED?",
    a: "You don't need this to be your whole life. We built the first summer's $10,000 around school. You knock doors when you can, follow the system, and let the route build from there.",
  },
  {
    q: "WHAT IF I DON'T HAVE A TEAM OR EVEN ONE CUSTOMER YET?",
    a: "That's exactly where we started. Step one is your first door, your first quote, your first yes. Building a team comes later — we didn't hire anyone until years in.",
  },
  {
    q: "IS THIS A COURSE OR MENTORSHIP?",
    a: "Both, but the mentorship is the point. The courses give you the system; direct access to us is how you actually get unstuck when a door says no or a job goes sideways.",
  },
  {
    q: "HOW FAST CAN I SEE RESULTS?",
    a: "Depends on you. Trey made $750 on his very first day out. Logan's first $1,000 took a bit longer. We won't promise a number, but if you knock the doors and follow the system, it compounds fast.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="text-accent">OUR</span> ANSWERS
          </h2>
          <p className="italic text-muted">
            To all of your questions and concerns
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-border bg-background-elevated"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-extrabold">{faq.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-white transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-6 pb-6 text-muted">{faq.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
