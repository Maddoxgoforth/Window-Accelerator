import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import CtaButton from "@/components/ui/CtaButton";
import ImageSlot from "@/components/ui/ImageSlot";

const STATS = [
  { value: "$20K/MO", label: "from window cleaning alone, today" },
  { value: "40K+", label: "followers, millions of views" },
  { value: "$10K", label: "made their very first summer, starting from zero" },
];

export default function OfferAuthority() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-8">
        <div className="w-full">
          <ImageSlot
            label="Social Profile Screenshot"
            spec="Screenshot of the TikTok or Instagram profile page showing 40K+ followers, total likes, and profile photo."
            aspectClassName="aspect-[16/10]"
          />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-24 w-24">
              <ImageSlot
                label="Logan Headshot"
                spec="Square headshot of Logan, cropped tight, no background clutter."
                aspectClassName="aspect-square"
                shape="circle"
              />
            </div>
            <div className="h-24 w-24">
              <ImageSlot
                label="Trey Headshot"
                spec="Square headshot of Trey, cropped tight, no background clutter."
                aspectClassName="aspect-square"
                shape="circle"
              />
            </div>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Why Listen To Us
          </p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            MEET <span className="text-accent">LOGAN &amp; TREY</span>
          </h2>
          <p className="max-w-md text-muted">
            Logan started with a $250 kit off Amazon and zero experience.
            Trey joined after one day together turned into $750. The
            Starter Kit is the exact first-steps playbook they used before
            any of the systems, the team, or the $20K months existed.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <Card
              key={stat.value}
              className={`text-center ${i === 2 ? "col-span-2" : ""}`}
            >
              <p className="text-2xl font-extrabold text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </Card>
          ))}
        </div>

        <CtaButton
          label="LEARN DIRECTLY FROM US — $30"
          subtext="Get the same first steps we used."
          href="#checkout"
        />
      </Container>
    </section>
  );
}
