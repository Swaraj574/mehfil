import SectionWrapper from "../../../components/ui/SectionWrapper";

const LegacyQuote = () => {
  return (
    <section
      className="
      bg-[var(--ink)]
      py-28
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-4xl mx-auto text-center">

          <blockquote
            className="
            text-3xl
            md:text-5xl
            italic
            leading-relaxed
            text-[var(--parchment)]
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            "Years later,
            someone may forget the poet.

            <br />
            <br />

            But if the verse survives,
            the heart that wrote it
            survives too."
          </blockquote>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default LegacyQuote;