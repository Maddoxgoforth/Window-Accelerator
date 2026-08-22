import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import VideoSlot from "@/components/ui/VideoSlot";
import CheckoutSlot from "@/components/ui/CheckoutSlot";

export default function OfferHero() {
  return (
    <section className="pt-12 pb-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <p className="text-xl font-black tracking-[0.3em]">LOGAN &amp; TREY</p>

        <Pill>You Qualify For This</Pill>

        <p className="text-sm font-extrabold uppercase tracking-widest text-accent">
          ▶ Watch This Video Now
        </p>

        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          The <span className="text-accent">$30 Kit</span> That Gets You
          Your First <span className="text-accent">Paying Customer</span>
        </h1>

        <p className="max-w-md text-lg text-muted">
          We turned a $250 window cleaning kit and zero experience into
          $20K+ months. This is the exact starter system, broken down into
          a one-time purchase so you can start this week.
        </p>

        <VideoSlot
          label="Low-Ticket VSL — /offer"
          spec="60–120 sec video pitching the $30 Starter Kit specifically — what's inside, who it's for, how fast someone can use it. Landscape 16:9."
        />

        <p className="text-2xl font-extrabold text-accent">$30 One-Time</p>

        <CheckoutSlot
          label="Checkout — $30 Starter Kit"
          spec="Real checkout widget goes here once the $30 one-time Starter Kit product exists in a payment processor (Whop, Stripe, Gumroad, etc.). Needs a plan/price/product ID from that provider."
        />
      </Container>
    </section>
  );
}
