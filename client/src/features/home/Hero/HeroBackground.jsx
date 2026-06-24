const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 60% 50% at 20% 50%,
              rgba(200,146,42,0.08) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 50% 60% at 80% 30%,
              rgba(139,46,66,0.07) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 40% 40% at 60% 80%,
              rgba(30,95,110,0.06) 0%,
              transparent 60%
            )
          `,
        }}
      />

    </div>
  );
};

export default HeroBackground;