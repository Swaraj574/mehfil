const gradients = {
  b1: "from-[#5a2030] to-[#3a1320]",
  b2: "from-[#1e4a55] to-[#102e35]",
  b3: "from-[#6b4a1a] to-[#422c0d]",
  b4: "from-[#3a2a1a] to-[#221708]",
  b5: "from-[#4a1a2a] to-[#2a0e17]",
};

const Book = ({ title, variant }) => {
  return (
    <div
      className={`
      aspect-[2/3]
      rounded-r-md
      rounded-l-sm
      bg-gradient-to-br
      ${gradients[variant]}
      flex
      items-end
      p-4
      cursor-pointer
      transition
      duration-300
      hover:-translate-y-2
      shadow-[inset_-2px_0_0_rgba(0,0,0,0.2)]
      `}
    >
      <span
        className="
        text-[var(--parchment)]
        italic
        font-semibold
        leading-snug
        "
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default Book;