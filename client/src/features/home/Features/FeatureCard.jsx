const colorMap = {
  gold: {
    border: "border-[var(--gold)]",
    iconBg: "bg-[rgba(200,146,42,0.12)]",
    iconText: "text-[var(--gold)]",
  },

  rose: {
    border: "border-[var(--rose)]",
    iconBg: "bg-[rgba(139,46,66,0.12)]",
    iconText: "text-[var(--rose)]",
  },

  teal: {
    border: "border-[var(--teal)]",
    iconBg: "bg-[rgba(30,95,110,0.12)]",
    iconText: "text-[var(--teal)]",
  },

  ink: {
    border: "border-[var(--ink2)]",
    iconBg: "bg-[rgba(26,16,8,0.08)]",
    iconText: "text-[var(--ink2)]",
  },
};

const FeatureCard = ({
  icon,
  title,
  description,
  variant,
}) => {
  const style = colorMap[variant];

  return (
    <div
      className="
      bg-[var(--cream)]
      border
      p-8
      transition
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
      "
    >
      <div
        className={`
          w-12
          h-12
          rounded-full
          flex
          items-center
          justify-center
          text-xl
          mb-5
          ${style.iconBg}
          ${style.iconText}
        `}
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
        className="text-sm leading-7 text-[var(--text-muted)]"
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;