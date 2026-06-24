import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";

const stats = [
  {
    value: "15K+",
    label: "Poems Preserved",
  },

  {
    value: "3K+",
    label: "Stories Shared",
  },

  {
    value: "850+",
    label: "Audio Recitations",
  },

  {
    value: "120+",
    label: "Featured Poets",
  },
];

const CommunityImpact = () => {
  return (
    <section
      className="
      bg-[var(--ink)]
      py-24
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-6xl mx-auto text-center">

          <SectionLabel>
            ✦ Community Impact ✦
          </SectionLabel>

          <h2
            className="
            text-5xl
            text-[var(--parchment)]
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            A growing{" "}
            <span className="italic text-[var(--gold)]">
              literary gathering
            </span>
          </h2>

          <p
            className="
            mt-5
            italic
            text-[rgba(250,245,235,0.65)]
            "
          >
            Every poem added here becomes part of a living archive.
          </p>

          <div
            className="
            mt-16
            grid
            grid-cols-2 
            md:grid-cols-4
            gap-6
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                border
                border-[rgba(200,146,42,0.2)]
                p-8
                "
              >
                <h3
                  className="
                  text-4xl
                  text-[var(--gold)]
                  "
                  style={{
                    fontFamily:
                      "var(--font-display)",
                  }}
                >
                  {stat.value}
                </h3>

                <p
                  className="
                  mt-3
                  text-sm
                  text-[rgba(250,245,235,0.6)]
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <blockquote
            className="
            mt-20
            italic
            text-xl
            max-w-3xl
            mx-auto
            text-[rgba(250,245,235,0.75)]
            "
            style={{
              fontFamily: "var(--font-verse)",
            }}
          >
            "The internet remembers trends.
            Mehfil remembers people."
          </blockquote>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default CommunityImpact;