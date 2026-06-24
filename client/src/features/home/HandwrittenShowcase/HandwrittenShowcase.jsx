import DigitalVersion from "./DigitalVersion";
import NotebookVersion from "./NotebookVersion";
import { useState } from "react";
import SectionWrapper from "../../../components/ui/SectionWrapper";
import SectionLabel from "../../../components/common/SectionLabel";

const HandwrittenShowcase = () => {
  const [view, setView] = useState("digital");

  return (
    <section
      className="
      bg-[var(--parchment-2)]
      py-24
      px-6
      "
    >
      <SectionWrapper>

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <SectionLabel>
              ✦ Handwritten Draft Showcase ✦
            </SectionLabel>

            <h2
              className="
              text-4xl
              md:text-5xl
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              Ink doesn't{" "}
              <span className="italic text-[var(--gold)]">
                lie
              </span>
            </h2>

            <p
              className="
              mt-5
              italic
              text-[var(--text-muted)]
              "
            >
              The version you read,
              and the version it began as.
            </p>

          </div>

          {/* Toggle */}

          <div
            className="
            flex
            justify-center
            gap-3
            mt-12
            "
          >
            <button
              onClick={() => setView("digital")}
              className={`
                px-6 py-3 text-sm uppercase tracking-wider
                ${
                  view === "digital"
                    ? "bg-[var(--ink)] text-[var(--gold-light)]"
                    : "bg-white text-[var(--text-muted)]"
                }
              `}
            >
              Digital Version
            </button>

            <button
              onClick={() => setView("original")}
              className={`
                px-6 py-3 text-sm uppercase tracking-wider
                ${
                  view === "original"
                    ? "bg-[var(--ink)] text-[var(--gold-light)]"
                    : "bg-white text-[var(--text-muted)]"
                }
              `}
            >
              Original Notebook
            </button>
          </div>

          {/* Content */}

          <div className="mt-12">

            {view === "digital" ? (
              <DigitalVersion />
            ) : (
              <NotebookVersion />
            )}

          </div>

        </div>

      </SectionWrapper>
    </section>
  );
};

export default HandwrittenShowcase;