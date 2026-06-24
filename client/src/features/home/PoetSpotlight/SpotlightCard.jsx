import ReactionPill from "../../../components/common/ReactionPill";

const SpotlightCard = () => {
  return (
    <div
      className="
      bg-white/5
      border
      border-[rgba(200,146,42,0.25)]
      p-8
      "
    >
      <div
        className="
        flex
        flex-wrap
        gap-2
        text-xs
        uppercase
        tracking-wider
        text-[rgba(250,245,235,0.45)]
        "
      >
        <span>15 Jan 2026</span>
        <span>✦</span>
        <span>Vadodara</span>
        <span>✦</span>
        <span>Rainy Night · 2:13 AM</span>
      </div>

      <blockquote
        className="
        mt-6
        border-l-2
        border-[var(--gold)]
        pl-5
        italic
        text-xl
        leading-9
        text-[rgba(250,245,235,0.85)]
        "
        style={{
          fontFamily: "var(--font-verse)",
        }}
      >
        Main woh sheher hoon
        <br />
        jo apne hi shoor mein
        <br />
        kho gaya hai.
      </blockquote>

      <p
        className="
        mt-4
        uppercase
        tracking-widest
        text-xs
        text-[var(--gold-dim)]
        "
      >
        From "The New City" Collection
      </p>

      <div
        className="
        mt-6
        flex
        flex-wrap
        gap-3
        "
      >
        <ReactionPill active>
          ✨ Beautiful
        </ReactionPill>

        <ReactionPill>
          💛 Heartfelt
        </ReactionPill>

        <ReactionPill>
          🌊 Deep
        </ReactionPill>

        <ReactionPill>
          🔥 Powerful
        </ReactionPill>

        <ReactionPill>
          🌙 Thought-Provoking
        </ReactionPill>
      </div>
    </div>
  );
};

export default SpotlightCard;