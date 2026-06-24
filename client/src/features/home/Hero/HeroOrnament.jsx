const HeroOrnament = () => {
  return (
    <div
      className="
      absolute
      top-[10%]
      right-[8%]
      opacity-10
      hidden
      lg:block
      "
    >
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
      >
        <circle cx="90" cy="90" r="80" stroke="#c8922a" />
        <circle cx="90" cy="90" r="60" stroke="#c8922a" />
        <circle cx="90" cy="90" r="40" stroke="#c8922a" />
      </svg>
    </div>
  );
};

export default HeroOrnament;