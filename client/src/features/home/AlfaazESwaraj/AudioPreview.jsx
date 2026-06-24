const AudioPreview = () => {
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
        Audio Recitation
      </div>

      <div className="flex items-center gap-4">

        <div
          className="
          w-10
          h-10
          rounded-full
          border
          border-[var(--gold)]
          flex
          items-center
          justify-center
          text-[var(--gold)]
          "
        >
          ▶
        </div>

        <div className="flex gap-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-[2px] h-5 bg-[rgba(200,146,42,0.4)]"
            />
          ))}
        </div>

      </div>

      <p
        className="
        mt-4
        text-sm
        text-[rgba(250,245,235,0.45)]
        "
      >
        Recorded in one take · 2:14 min
      </p>
    </div>
  );
};

export default AudioPreview;