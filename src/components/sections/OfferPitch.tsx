import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";

const INCLUDES = [
  "A quick-start course (2–3 hours) covering picking your service area, the minimum equipment to start under $300, pricing your first jobs, and landing your first 10 customers",
  "A pricing cheat sheet for quoting by pane count, story height, and residential vs. commercial jobs",
  "A door-knocking script, flyer template, and follow-up text/DM script — copy and use today",
  "A ready-to-send quote and invoice template",
  "The exact equipment starter list — what to buy first, and what to skip until it's paid for itself",
];

export default function OfferPitch() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="The Offer"
          title="Everything Inside The Starter Kit"
          subtitle="One payment. Yours for good."
        />

        <Card className="w-full text-left">
          <ul className="flex flex-col gap-4">
            {INCLUDES.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <CtaButton
          label="CLAIM YOUR SPOT — $30"
          subtext="Everything above, unlocked today."
          href="#checkout"
        />
      </Container>
    </section>
  );
}
