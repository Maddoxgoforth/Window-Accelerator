import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import CtaButton from "@/components/ui/CtaButton";

const FEATURES = [
  {
    icon: "◎",
    title: "DONE-FOR-YOU SYSTEMS",
    body: "Our pricing calculator, door-knocking scripts, quote templates, and the same CRM setup we use to run our own route. You just plug in and go.",
  },
  {
    icon: "💬",
    title: "LIVE COACHING & MENTORSHIP",
    body: "Direct access to Logan and Trey — the people who actually knocked these doors — with a roadmap built around your market.",
  },
  {
    icon: "💰",
    title: "REAL RESULTS",
    body: "The goal is your first paying customer fast, and your first $1,000 within your first weeks, if you do the work.",
  },
];

export default function Blueprint() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <div className="w-full border-t-4 border-accent" />

        <h2 className="text-center text-3xl font-extrabold leading-tight sm:text-4xl">
          THIS{" "}
          <span className="text-accent line-through decoration-4">
            ISN&apos;T A COURSE.
          </span>{" "}
          IT&apos;S A BLUEPRINT TO YOUR FIRST{" "}
          <span className="text-accent">$1,000</span> CLEANING{" "}
          <span className="text-accent">WINDOWS</span>
        </h2>

        <p className="text-center text-lg text-muted">
          You&apos;re Not Here To &ldquo;Learn.&rdquo; You&apos;re Here To
          Knock Doors And Get Paid.
        </p>

        <div className="flex w-full flex-col gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-4"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl text-white">
                {feature.icon}
              </span>
              <Card className="w-full text-center">
                <h3 className="text-xl font-extrabold">{feature.title}</h3>
                <p className="mt-3 text-muted">{feature.body}</p>
              </Card>
            </div>
          ))}
        </div>

        <CtaButton />
      </Container>
    </section>
  );
}
