import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";

export default function OfferClose() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          Your Next $30 Can Buy Dinner, Or It Can Buy The Exact System That
          Got Logan His First <span className="text-accent">$1,000</span>
        </h2>
        <p className="max-w-md text-lg text-muted">
          You already qualified for this. The only thing left is deciding
          to start.
        </p>
        <CtaButton
          label="CHOOSE THE STARTER KIT — $30"
          subtext="Don't overthink it. Just start."
          href="#checkout"
        />
      </Container>
    </section>
  );
}
