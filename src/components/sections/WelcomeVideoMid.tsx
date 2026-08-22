import Container from "@/components/ui/Container";
import VideoSlot from "@/components/ui/VideoSlot";

export default function WelcomeVideoMid() {
  return (
    <section className="pb-16">
      <Container>
        <VideoSlot
          label="Welcome Video — Pro (Mid-Ticket)"
          spec="Short welcome/congrats video from Logan and Trey confirming the Pro ($500) booking and setting expectations for the call. 60–90 sec, 16:9."
        />
      </Container>
    </section>
  );
}
