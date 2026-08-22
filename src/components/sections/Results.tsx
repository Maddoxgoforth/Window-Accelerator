import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";
import ImageSlot from "@/components/ui/ImageSlot";

const RESULTS = [
  {
    stat: "$750 IN ONE DAY",
    caption: "Trey's very first day out knocking doors with Logan",
    spec: "Screenshot of the payment/cash total from Trey's first $750 day — a CRM job total, payment app screenshot, or similar. Redact any customer personal info.",
  },
  {
    stat: "$1,000",
    caption:
      "Logan's first $1,000 made from window cleaning, starting with a $250 kit",
    spec: "Screenshot showing Logan's first $1,000 milestone — a running revenue total, bank deposit, or CRM summary from that point.",
  },
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
  {
    stat: "40,000+ FOLLOWERS",
    caption:
      'Built entirely from documenting the door-to-door process — including the "Road to $20K" series',
    spec: "Screenshot of the TikTok or Instagram profile page showing 40K+ followers and total likes/views.",
  },
];

export default function Results() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          title={
            <>
              OUR <span className="text-accent">RESULTS</span>
            </>
          }
          subtitle="Real numbers from building this business door by door."
        />

        {RESULTS.map((result) => (
          <Card key={result.stat} className="w-full">
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

        <CtaButton />
      </Container>
    </section>
  );
}
