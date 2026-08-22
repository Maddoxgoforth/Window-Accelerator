import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";
import ImageSlot from "@/components/ui/ImageSlot";

const RESULTS_A = [
  {
    stat: "$1,000",
    caption:
      "Logan's first $1,000 made from window cleaning, starting with a $250 kit",
    spec: "Screenshot showing Logan's first $1,000 milestone — a running revenue total, bank deposit, or CRM summary from that point.",
  },
  {
    stat: "$750 IN ONE DAY",
    caption: "Trey's very first day out knocking doors with Logan",
    spec: "Screenshot of the payment/cash total from Trey's first $750 day. Redact any customer personal info.",
  },
];

const RESULTS_B = [
  {
    stat: "$10,000",
    caption:
      "Total revenue their first summer — starting with nothing but a kit and a willingness to knock doors",
    spec: "Screenshot of a revenue summary (CRM report, spreadsheet, or bank summary) showing the ~$10K first-summer total.",
  },
  {
    stat: "$20,000+/MO",
    caption:
      "What the business does today, with two technicians and a sales rep on the team",
    spec: "Screenshot of the CRM/revenue dashboard showing a recent ~$20K month.",
  },
];

export default function OfferResults() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="Real Results"
          title={
            <>
              This Isn&apos;t <span className="text-accent">Theory</span>
            </>
          }
          subtitle="Real numbers from building this business door by door."
        />

        {RESULTS_A.map((result) => (
          <Card key={result.stat} className="w-full text-left">
            <p className="text-3xl font-extrabold text-accent">
              {result.stat}
            </p>
            <p className="mt-1 text-sm text-muted">{result.caption}</p>
            <div className="mt-5">
              <ImageSlot
                label="Proof Screenshot"
                spec={result.spec}
                aspectClassName="aspect-[4/3]"
              />
            </div>
          </Card>
        ))}

        <CtaButton
          label="START YOUR OWN RESULTS — $30"
          subtext="This could be your first job next."
          href="#checkout"
        />

        {RESULTS_B.map((result) => (
          <Card key={result.stat} className="w-full text-left">
            <p className="text-3xl font-extrabold text-accent">
              {result.stat}
            </p>
            <p className="mt-1 text-sm text-muted">{result.caption}</p>
            <div className="mt-5">
              <ImageSlot
                label="Proof Screenshot"
                spec={result.spec}
                aspectClassName="aspect-[4/3]"
              />
            </div>
          </Card>
        ))}

        <CtaButton
          label="BE THE NEXT SUCCESS STORY — $30"
          subtext="No experience needed to start."
          href="#checkout"
        />

        <Card className="w-full text-left">
          <p className="text-3xl font-extrabold text-accent">
            40,000+ FOLLOWERS
          </p>
          <p className="mt-1 text-sm text-muted">
            Built entirely from documenting the door-to-door process —
            including the &ldquo;Road to $20K&rdquo; series
          </p>
          <div className="mt-5">
            <ImageSlot
              label="Proof Screenshot"
              spec="Screenshot of the TikTok or Instagram profile page showing 40K+ followers and total likes/views."
              aspectClassName="aspect-[16/10]"
            />
          </div>
        </Card>

        <CtaButton
          label="UNLOCK THE STARTER KIT — $30"
          subtext="One payment. Start whenever you're ready."
          href="#checkout"
        />
      </Container>
    </section>
  );
}
