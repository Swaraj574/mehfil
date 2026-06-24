const JourneyStep = ({
  icon,
  title,
  description,
  isLast,
}) => {
  return (
    <div className="relative text-center">

      <div
        className="
        w-16
        h-16
        mx-auto
        mb-5
        rounded-full
        border-2
        border-[var(--gold)]
        bg-[var(--parchment-2)]
        flex
        items-center
        justify-center
        text-2xl
        "
      >
        {icon}
      </div>

      {!isLast && (
        <div
          className="
          hidden
          lg:block
          absolute
          top-8
          left-[70%]
          text-[var(--gold)]
          text-xl
          "
        >
          →
        </div>
      )}

      <h3
        className="mb-2 text-lg"
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        {title}
      </h3>

      <p
        className="
        text-sm
        leading-6
        text-[var(--text-muted)]
        "
      >
        {description}
      </p>

    </div>
  );
};

export default JourneyStep;