import Container from "@/components/ui/Container";
import Pill from "@/components/ui/Pill";
import VideoSlot from "@/components/ui/VideoSlot";
import FormSlot from "@/components/ui/FormSlot";

export default function Hero() {
  return (
    <section className="pt-12 pb-16">
      <Container className="flex flex-col items-center gap-8 text-center">
        <p className="text-xl font-black tracking-[0.3em]">LOGAN &amp; TREY</p>

        <Pill>No Experience. No Audience. Just A Kit And A Door To Knock.</Pill>

        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
          Learn exactly how we turned a{" "}
          <span className="text-accent">$250 Amazon kit</span> into{" "}
          <span className="text-accent">$20K/month</span> cleaning windows
        </h1>

        <p className="max-w-md text-lg text-muted">
          The exact system we used to land our first customer with a door
          knock, make our first $1,000, and build a route that now runs
          $20K+ months with a real team behind it. No experience, no
          audience, no guessing.
        </p>

        <VideoSlot
          label="Main VSL — Home Page"
          spec="3–6 min video of Logan and Trey talking to camera (or narrated over route/job B-roll), telling the $250-kit-to-$20K/month story and pitching the roadmap. Landscape 16:9. Send an MP4, or a Wistia/YouTube link."
        />

        <FormSlot
          label="Application Form"
          spec="Real embedded application form goes here once built in Typeform (or similar). Needs: a form ID, plus routing logic set inside Typeform so answers send Starter Kit ($30) applicants straight to /offer, Pro ($500) applicants to a Cal.com booking link, and VIP ($2,000) applicants to a separate Cal.com booking link. That routing lives in Typeform/Cal.com's own dashboards, not in this codebase."
        />
      </Container>
    </section>
  );
}
