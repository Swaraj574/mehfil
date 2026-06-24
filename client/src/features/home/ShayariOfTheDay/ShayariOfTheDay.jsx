import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";
import PoetAvatar from "../../../components/ui/PoetAvatar";

const ShayariOfTheDay = () => {
  return (
    <section
      className="
      py-24
      px-6
      bg-[var(--cream)]
      border-b
      border-[var(--parchment-3)]
      "
    >
      <SectionWrapper>

        <SectionLabel>
          ✦ Shayari of the Day ✦
        </SectionLabel>

        <div className="max-w-3xl mx-auto text-center">

          <p
            className="
            text-2xl
            md:text-3xl
            italic
            leading-relaxed
            "
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            "Dil ko dekho, chehra mat dekho,
            <br />
            chehra dhoka de sakta hai."
          </p>

          <p
            className="
            mt-4
            text-xl
            "
            dir="rtl"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            دل کو دیکھو، چہرہ مت دیکھو
          </p>

          <div
            className="
            mt-8
            flex
            items-center
            justify-center
            gap-4
            "
          >
            <PoetAvatar letter="G" />

            <div className="text-left">

              <h4 className="font-semibold">
                Mirza Ghalib
              </h4>

              <p
                className="
                text-sm
                text-[var(--text-muted)]
                "
              >
                Favourite Shayar · Urdu & Hindi
              </p>

            </div>

          </div>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default ShayariOfTheDay;