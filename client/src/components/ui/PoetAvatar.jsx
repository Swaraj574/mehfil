const PoetAvatar = ({ letter }) => {
  return (
    <div
      className="
      w-10
      h-10
      rounded-full
      border-2
      border-[var(--gold)]
      flex
      items-center
      justify-center
      bg-[var(--parchment-3)]
      "
      style={{
        fontFamily: "var(--font-display)",
      }}
    >
      {letter}
    </div>
  );
};

export default PoetAvatar;