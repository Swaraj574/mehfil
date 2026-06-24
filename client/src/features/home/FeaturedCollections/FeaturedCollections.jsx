import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";
import Book from "./Book";
import { collectionsData } from "../../../data/collectionsData";

const FeaturedCollections = () => {
  return (
    <section
      className="
      bg-[var(--ink)]
      py-24
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <SectionLabel>
              ✦ Featured Collections ✦
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
              From the{" "}
              <span className="italic text-[var(--gold)]">
                shelf
              </span>
            </h2>

          </div>

          <div
            className="
            mt-16
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-4
            "
          >
            {collectionsData.map((book) => (
              <Book
                key={book.title}
                {...book}
              />
            ))}
          </div>

          {/* Shelf */}

          <div
            className="
            h-3
            mt-3
            rounded-sm
            bg-gradient-to-b
            from-[#2a1a0d]
            to-[#0d0805]
            "
          />

        </div>

      </SectionWrapper>
    </section>
  );
};

export default FeaturedCollections;
