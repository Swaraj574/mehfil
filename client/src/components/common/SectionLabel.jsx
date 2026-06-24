const SectionLabel = ({ children }) => {
  return (
    <span
      className="
      block
      text-center
      uppercase
      tracking-[0.2em]
      text-[12px]
      text-[var(--gold)]
      mb-4
      "
    >
      {children}
    </span>
  );
};

export default SectionLabel;