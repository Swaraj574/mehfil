const ReactionPill = ({
  children,
  active = false,
}) => {
  return (
    <button
      className={`
      px-3
      py-1
      rounded-full
      text-xs
      border
      transition
      duration-300

      ${
        active
          ? "bg-[rgba(200,146,42,0.15)] text-[var(--gold)] border-[var(--gold)]"
          : "text-[rgba(250,245,235,0.6)] border-[rgba(200,146,42,0.3)] hover:bg-[rgba(200,146,42,0.15)] hover:text-[var(--gold)]"
      }
      `}
    >
      {children}
    </button>
  );
};

export default ReactionPill;