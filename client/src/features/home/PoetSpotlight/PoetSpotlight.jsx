import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";
import SpotlightCard from "./SpotlightCard";

const PoetSpotlight = () => {
  return (
    <section
      className="
      bg-[var(--ink)]
      py-24
      px-6
      "
    >
      <SectionWrapper>

        <div
          className="
          max-w-6xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >

          {/* Left */}

          <div>

            <SectionLabel>
              ✦ Featured Poet ✦
            </SectionLabel>

            <h2
              className="
              text-5xl
              leading-tight
              text-[var(--parchment)]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              A poet's journey,
              <br />

              <span className="italic text-[var(--gold)]">
                not a résumé
              </span>
            </h2>

            <p
              className="
              mt-6
              italic
              leading-8
              text-[rgba(250,245,235,0.65)]
              "
            >
              At Mehfil, every poet receives a dedicated
              literary space.

              Not a profile page.

              A living archive of voice, journey,
              drafts, and legacy.
            </p>

            <button
              className="
              mt-8
              bg-[var(--gold)]
              text-[var(--ink)]
              px-8
              py-3
              "
            >
              Explore My Mehfil
            </button>

          </div>

          {/* Right */}

          <SpotlightCard />

        </div>

      </SectionWrapper>
    </section>
  );
};

export default PoetSpotlight;