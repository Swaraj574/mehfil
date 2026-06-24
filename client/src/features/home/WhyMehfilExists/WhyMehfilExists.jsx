import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";

const WhyMehfilExists = () => {
  return (
    <section
      className="
      bg-[var(--cream)]
      py-28
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-4xl mx-auto text-center">

          <SectionLabel>
            ✦ Why Mehfil Exists ✦
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
            Because some words
            <br />

            deserve a{" "}
            <span className="italic text-[var(--gold)]">
              home
            </span>
          </h2>

          <p
            className="
            mt-10
            text-xl
            leading-10
            italic
            text-[var(--ink2)]
            "
            style={{
              fontFamily: "var(--font-verse)",
            }}
          >
            Social media rewards speed.
            Poetry asks for patience.

            <br />
            <br />

            Posts disappear.
            Algorithms move on.

            <br />
            <br />

            But some poems deserve context,
            memory, voice, and permanence.

            <br />
            <br />

            Mehfil exists to preserve
            not just the poem,
            but the entire journey behind it.
          </p>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default WhyMehfilExists;