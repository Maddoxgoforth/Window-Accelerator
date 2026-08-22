import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSlot from "@/components/ui/ImageSlot";

export default function MoreResults() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          title={
            <>
              MORE <span className="text-accent">RESULTS</span>
            </>
          }
          subtitle="More proof from building this business door by door, while you wait for your call."
        />

        <Card className="w-full">
          <p className="text-3xl font-extrabold text-accent">$20,000+/MO</p>
          <p className="mt-1 text-sm text-muted">
            This month&apos;s revenue from the window cleaning business — a
            live look while you wait for your call
          </p>
          <div className="mt-5">
            <ImageSlot
              label="Proof Screenshot"
              spec="Screenshot of the CRM/revenue dashboard showing this month's revenue total."
              aspectClassName="aspect-[4/3]"
            />
          </div>
        </Card>

        <Card className="w-full">
          <p className="text-3xl font-extrabold text-accent">
            40,000+ FOLLOWERS
          </p>
          <p className="mt-1 text-sm text-muted">
            Built from documenting the exact process you&apos;re about to
            learn
          </p>
          <div className="mt-5">
            <ImageSlot
              label="Proof Screenshot"
              spec="Screenshot of the TikTok or Instagram profile page showing 40K+ followers and total likes/views."
              aspectClassName="aspect-[16/10]"
            />
          </div>
        </Card>
      </Container>
    </section>
  );
}
