const NotebookVersion = () => {
  return (
    <div
      className="
      relative
      bg-[#f3e9d2]
      border
      border-[#d3bd8a]
      p-12
      overflow-hidden
      "
    >

      {/* Red Margin */}

      <div
        className="
        absolute
        left-12
        top-0
        bottom-0
        w-[1px]
        bg-red-300
        "
      />

      <div
        className="
        ml-10
        text-[#3a2811]
        "
        style={{
          fontFamily: "var(--font-hand)",
        }}
      >
        <p className="text-3xl leading-relaxed">

          <span className="line-through opacity-60">
            Kal raat woh gaaon yaad aaya,
          </span>

          <br />

          Kal raat phir woh sheher yaad aaya,

          <br />

          jise maine

          <span className="line-through opacity-60">
            {" "}
            kabhi nahi apnaya,
          </span>

          <br />

          kabhi apna nahi kaha,

          <br />

          par jiski galiyon mein abhi tak

          <br />

          meri parchhayi chalti hai.

        </p>

        <p
          className="
          mt-6
          text-lg
          opacity-60
          "
        >
          — teesri baar likh raha hoon yeh line
        </p>

      </div>

      <div
        className="
        absolute
        top-12
        right-10
        text-[#8a6a2a]
        text-xl
        rotate-2
        "
        style={{
          fontFamily: "var(--font-hand)",
        }}
      >
        ↙ isse aur behtar
        <br />
        kiya jaa sakta hai?
      </div>

      <p
        className="
        mt-10
        text-sm
        text-[#8a6a2a]
        uppercase
        tracking-widest
        "
      >
        First Draft · 15 Jan 2026 · 2:13 AM
      </p>

    </div>
  );
};

export default NotebookVersion;