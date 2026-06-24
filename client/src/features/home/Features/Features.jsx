import SectionWrapper from "../../../components/ui/SectionWrapper";
import FeatureCard from "./FeatureCard";
import { featuresData } from "../../../data/featuresData";

const Features = () => {
  return (
    <section className="bg-[var(--parchment-2)] py-24 px-6">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              More than a poetry{" "}
              <span className="italic text-[var(--gold)]">
                archive
              </span>
            </h2>

            <p className="mt-4 italic text-[var(--text-muted)]">
              Poetry is not simply read here — it is experienced.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Features;