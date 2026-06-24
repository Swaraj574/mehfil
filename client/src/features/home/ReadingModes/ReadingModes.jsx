import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";
import ReadingModeCard from "./ReadingModeCard";
import { readingModesData } from "../../../data/readingModesData";

const ReadingModes = () => {
  return (
    <section
      className="
      bg-[var(--parchment)]
      py-16 md:py-24
      px-4 md:px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <SectionLabel>
              ✦ Reading Modes ✦
            </SectionLabel>

            <h2
              className="
              text-5xl
              leading-tight
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Every poem deserves
              <br />

              its own{" "}
              <span className="italic text-[var(--gold)]">
                atmosphere
              </span>
            </h2>

            <p
              className="
              mt-5
              italic
              text-[var(--text-muted)]
              "
            >
              Change the mood of the page,
              not just the brightness.
            </p>

          </div>

          <div
            className="
            mt-16
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            "
          >
            {readingModesData.map((mode) => (
              <ReadingModeCard
                key={mode.title}
                {...mode}
              />
            ))}
          </div>

          <p
            className="
            text-center
            mt-10
            text-sm
            italic
            text-[var(--text-muted)]
            "
          >
            Full theme switching will be available inside every poem page.
          </p>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default ReadingModes;