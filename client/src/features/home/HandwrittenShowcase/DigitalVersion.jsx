const DigitalVersion = () => {
  return (
    <div
      className="
      bg-[var(--cream)]
      border
      border-[var(--parchment-3)]
      p-12
      text-center
      "
    >
      <p
        className="
        text-2xl
        italic
        leading-relaxed
        "
        style={{
          fontFamily: "var(--font-display)",
        }}
      >
        "Kal raat phir woh sheher yaad aaya,
        <br />
        jise maine kabhi apna nahi kaha,
        <br />
        par jiski galiyon mein abhi tak
        <br />
        meri parchhayi chalti hai."
      </p>

      <p
        className="
        mt-8
        uppercase
        tracking-widest
        text-sm
        text-[var(--gold)]
        "
      >
        Final Version · Published 18 Jan 2026
      </p>
    </div>
  );
};

export default DigitalVersion;