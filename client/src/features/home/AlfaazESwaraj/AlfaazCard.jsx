const AlfaazCard = ({
  label,
  content,
  meta,
}) => {
  return (
    <div
      className="
      bg-white/5
      border
      border-[rgba(200,146,42,0.2)]
      p-7
      "
    >
      <div
        className="
        text-xs
        uppercase
        tracking-[0.14em]
        text-[var(--gold-dim)]
        mb-4
        "
      >
        {label}
      </div>

      <blockquote
        className="
        italic
        text-lg
        leading-8
        text-[rgba(250,245,235,0.85)]
        whitespace-pre-line
        "
        style={{
          fontFamily: "var(--font-verse)",
        }}
      >
        {content}
      </blockquote>

      <p
        className="
        mt-4
        text-sm
        text-[rgba(250,245,235,0.45)]
        "
      >
        {meta}
      </p>
    </div>
  );
};

export default AlfaazCard;