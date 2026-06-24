import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";
import EmotionTag from "../../../components/common/EmotionTag";
import { emotionsData } from "../../../data/emotionsData";

const EmotionDiscovery = () => {
  return (
    <section
      className="
      bg-[var(--parchment-2)]
      py-24
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <SectionLabel>
              ✦ Emotion Discovery ✦
            </SectionLabel>

            <h2
              className="text-5xl"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Search by{" "}
              <span className="italic text-[var(--gold)]">
                feeling
              </span>
            </h2>

            <p
              className="
              mt-5
              italic
              text-[var(--text-muted)]
              "
            >
              Don't search for poems.
              Search for what you're feeling.
            </p>

          </div>

          <div
            className="
            mt-16
            grid
            md:grid-cols-3
            gap-6
            "
          >
            {emotionsData.map((emotion) => (
              <EmotionTag
                key={emotion.name}
                {...emotion}
              />
            ))}
          </div>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default EmotionDiscovery;