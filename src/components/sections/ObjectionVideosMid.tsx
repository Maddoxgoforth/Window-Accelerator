import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoSlot from "@/components/ui/VideoSlot";

const QUESTIONS = [
  "DO I NEED EXPERIENCE OR EQUIPMENT ALREADY?",
  "DO I NEED TO KNOW HOW TO KNOCK DOORS OR SELL?",
  "I'M BUSY WITH SCHOOL OR A JOB — DO I HAVE TIME FOR THIS?",
  "WHAT IF I DON'T HAVE A TEAM YET?",
  "HOW MUCH DOES IT COST, AND HOW DOES IT WORK?",
  "HOW FAST CAN I SEE RESULTS?",
];

export default function ObjectionVideosMid() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          title="BEFORE YOUR CALL"
          subtitle="A few quick answers to the questions people usually have before they join Pro."
        />

        <div className="flex w-full flex-col gap-6">
          {QUESTIONS.map((question, i) => (
            <Card key={question} className="w-full">
              <p className="mb-4 text-lg font-extrabold">{question}</p>
              <VideoSlot
                label={`Pro Q&A Video ${i + 1} of ${QUESTIONS.length}`}
                spec={`Short answer video (60–90 sec) from Logan and/or Trey answering: "${question}" — specific to the $500 Pro tier. 16:9.`}
              />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
