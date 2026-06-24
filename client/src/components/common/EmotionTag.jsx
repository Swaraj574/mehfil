const EmotionTag = ({
  name,
  emoji,
  count,
}) => {
  return (
    <button
      className="
      bg-white
      border
      border-[var(--parchment-3)]
      px-6
      py-5
      rounded-sm
      transition
      duration-300
      hover:-translate-y-1
      hover:border-[var(--gold)]
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
      "
    >
      <div className="text-2xl">
        {emoji}
      </div>

      <h3
        className="mt-3"
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        {name}
      </h3>

      <p
        className="
        text-xs
        mt-2
        text-[var(--text-muted)]
        "
      >
        {count}
      </p>
    </button>
  );
};

export default EmotionTag;