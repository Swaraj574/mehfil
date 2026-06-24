import SectionWrapper from "../../../components/ui/SectionWrapper";

const CTA = () => {
  return (
    <section
      className="
      bg-[var(--parchment)]
      py-32
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-5xl mx-auto text-center">

          <h2
            className="
            text-5xl
            md:text-7xl
            leading-tight
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Join the{" "}
            <span className="italic text-[var(--gold)]">
              gathering
            </span>
          </h2>

          <p
            className="
            mt-8
            text-xl
            italic
            text-[var(--text-muted)]
            "
          >
            Write. Preserve. Remember.
          </p>

          <div
            className="
            mt-14
            flex
            flex-col 
            sm:flex row
            justify-center
            gap-4
            "
          >

            <button
              className="
              bg-[var(--gold)]
              text-[var(--ink)]
              px-8
              py-4
              "
            >
              Enter The Mehfil
            </button>

            <button
              className="
              border
              border-[var(--ink)]
              px-8
              py-4
              "
            >
              Start Writing
            </button>

            <button
              className="
              border
              border-[var(--gold)]
              text-[var(--gold)]
              px-8
              py-4
              "
            >
              Explore Poetry
            </button>

          </div>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default CTA;