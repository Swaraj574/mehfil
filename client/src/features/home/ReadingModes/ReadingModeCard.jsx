const ReadingModeCard = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <div
      className="
      bg-[var(--cream)]
      border
      border-[var(--parchment-3)]
      p-8
      transition
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
      "
    >
      <div
        className="
        w-14
        h-14
        rounded-full
        flex
        items-center
        justify-center
        text-2xl
        mb-5
        "
        style={{
          backgroundColor: `${color}20`,
        }}
      >
        {icon}
      </div>

      <h3
        className="text-xl mb-3"
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        {title}
      </h3>

      <p
        className="
        text-[var(--text-muted)]
        leading-7
        text-sm
        "
      >
        {description}
      </p>

      <div
        className="
        mt-6
        h-2
        rounded-full
        "
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ReadingModeCard;