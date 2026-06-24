import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";
import AlfaazCard from "./AlfaazCard";
import AudioPreview from "./AudioPreview";
import { alfaazData } from "../../../data/alfaazData";

const AlfaazESwaraj = () => {
  return (
    <section
      className="
      bg-[var(--ink)]
      py-24
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-6xl mx-auto">

          <SectionLabel>
            ✦ Alfaaz-e-Swaraj ✦
          </SectionLabel>

          <h2
            className="
            text-center
            text-5xl
            text-[var(--parchment)]
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            From the <span className="text-[var(--gold)] italic">founder's notebook</span>
          </h2>

          <p
            className="
            max-w-2xl
            mx-auto
            text-center
            mt-6
            italic
            text-[rgba(250,245,235,0.55)]
            "
          >
            This is the corner of Mehfil I didn't design.
            I just keep adding to it.
          </p>

          <div
            className="
            grid
            md:grid-cols-2
            gap-6
            mt-14
            "
          >
            <AlfaazCard
              label={alfaazData.latestShayari.title}
              content={alfaazData.latestShayari.content}
              meta={alfaazData.latestShayari.meta}
            />

            <AlfaazCard
              label={alfaazData.featuredCollection.title}
              content={alfaazData.featuredCollection.content}
              meta={alfaazData.featuredCollection.meta}
            />

            <AlfaazCard
              label={alfaazData.lovedVerse.title}
              content={alfaazData.lovedVerse.content}
              meta={alfaazData.lovedVerse.meta}
            />

            <AudioPreview />
          </div>

          <div
            className="
            mt-6
            border-l-2
            border-[var(--gold)]
            bg-white/5
            p-6
            "
          >
            <h4 className="text-[var(--gold)] mb-3">
              Journal Fragment
            </h4>

            <p
              className="
              italic
              text-[rgba(250,245,235,0.65)]
              "
            >
              {alfaazData.journal.content}
            </p>

            <p className="mt-4 text-sm text-gray-500">
              {alfaazData.journal.date}
            </p>
          </div>

          <div className="text-center mt-10">
            <button
              className="
              bg-[var(--gold)]
              text-[var(--ink)]
              px-8
              py-3
              "
            >
              Read Full Archive
            </button>
          </div>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default AlfaazESwaraj;