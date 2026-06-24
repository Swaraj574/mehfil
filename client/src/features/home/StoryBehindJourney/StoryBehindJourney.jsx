import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";
import JourneyStep from "./JourneyStep";
import { journeyData } from "../../../data/journeyData";

const StoryBehindJourney = () => {
  return (
    <section
      className="
      bg-[var(--cream)]
      py-24
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <SectionLabel>
              ✦ The Mehfil Difference ✦
            </SectionLabel>

            <h2
              className="
              text-4xl
              md:text-5xl
              leading-tight
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              From a{" "}
              <span className="italic text-[var(--gold)]">
                private thought
              </span>

              <br />

              to a shared verse
            </h2>

            <p
              className="
              mt-5
              italic
              text-[var(--text-muted)]
              "
            >
              Most platforms show you the poem.
              Mehfil shows you everything that came before it.
            </p>

          </div>

          <div
            className="
            mt-20
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-10
            "
          >
            {journeyData.map((step, index) => (
              <JourneyStep
                key={step.title}
                {...step}
                isLast={
                  index === journeyData.length - 1
                }
              />
            ))}
          </div>

          <div
            className="
            max-w-3xl
            mx-auto
            mt-20
            text-center
            "
          >
            <p
              className="
              italic
              text-xl
              leading-9
              text-[var(--ink2)]
              "
              style={{
                fontFamily: "var(--font-verse)",
              }}
            >
              "A poem is never just the final lines.
              It's the 2 AM it was written in,
              the city it was written about,
              and the voice that first said it out loud.
              Mehfil preserves all four."
            </p>
          </div>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default StoryBehindJourney;