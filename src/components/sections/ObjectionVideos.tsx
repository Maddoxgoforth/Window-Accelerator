import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoSlot from "@/components/ui/VideoSlot";

const QUESTIONS = [
  "HOW FAST CAN I SEE RESULTS?",
  "HOW MUCH DOES THIS COST?",
  "WHAT IF I HAVE ZERO EXPERIENCE CLEANING WINDOWS?",
  "WHAT IF I'M BUSY WITH SCHOOL OR WORK?",
  "DO I NEED A TEAM, OR CAN I START ALONE?",
];

export default function ObjectionVideos() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          title="BEFORE YOUR CALL"
          subtitle="A few quick answers to the questions people usually have before they join VIP."
        />

        <div className="flex w-full flex-col gap-6">
          {QUESTIONS.map((question, i) => (
            <Card key={question} className="w-full">
              <p className="mb-4 text-lg font-extrabold">{question}</p>
              <VideoSlot
                label={`VIP Q&A Video ${i + 1} of ${QUESTIONS.length}`}
                spec={`Short answer video (60–90 sec) from Logan and/or Trey answering: "${question}" — specific to the $2,000 VIP tier. 16:9.`}
              />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
