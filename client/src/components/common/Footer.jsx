const Footer = () => {
  return (
    <footer
      className="
      bg-[var(--ink)]
      border-t
      border-[rgba(200,146,42,0.15)]
      px-6
      py-16
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Top */}

        <div
          className="
          grid
          md:grid-cols-4
          gap-12
          "
        >

          {/* Brand */}

          <div>

            <h2
              className="
              text-3xl
              text-[var(--parchment)]
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              مح<span className="text-[var(--gold)]">فل</span>
            </h2>

            <p
              className="
              mt-4
              text-sm
              leading-7
              text-[rgba(250,245,235,0.6)]
              "
            >
              A digital sanctuary for poetry,
              memory, voice, and stories.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h4
              className="
              mb-5
              text-[var(--gold)]
              uppercase
              tracking-wider
              text-sm
              "
            >
              Explore
            </h4>

            <ul className="space-y-3">

              <li>
                <a
                  href="#"
                  className="text-[rgba(250,245,235,0.65)] hover:text-[var(--gold)]"
                >
                  Discover Poems
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[rgba(250,245,235,0.65)] hover:text-[var(--gold)]"
                >
                  Collections
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[rgba(250,245,235,0.65)] hover:text-[var(--gold)]"
                >
                  Featured Poets
                </a>
              </li>

            </ul>

          </div>

          {/* Community */}

          <div>

            <h4
              className="
              mb-5
              text-[var(--gold)]
              uppercase
              tracking-wider
              text-sm
              "
            >
              Community
            </h4>

            <ul className="space-y-3">

              <li>
                <a
                  href="#"
                  className="text-[rgba(250,245,235,0.65)] hover:text-[var(--gold)]"
                >
                  Audio Mehfil
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[rgba(250,245,235,0.65)] hover:text-[var(--gold)]"
                >
                  Story Behind Shayari
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[rgba(250,245,235,0.65)] hover:text-[var(--gold)]"
                >
                  Reading Modes
                </a>
              </li>

            </ul>

          </div>

          {/* Founder */}

          <div>

            <h4
              className="
              mb-5
              text-[var(--gold)]
              uppercase
              tracking-wider
              text-sm
              "
            >
              Founder
            </h4>

            <p
              className="
              italic
              leading-7
              text-[rgba(250,245,235,0.65)]
              "
            >
              Built by Swaraj
              <br />
              for words that deserve
              more than a timeline.
            </p>

          </div>

        </div>

        {/* Divider */}

        <div
          className="
          my-12
          border-t
          border-[rgba(200,146,42,0.15)]
          "
        />

        {/* Bottom */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >

          <p
            className="
            text-sm
            text-[rgba(250,245,235,0.45)]
            "
          >
            © 2026 Mehfil. Every Verse Tells a Story.
          </p>

          <p
            className="
            italic
            text-[rgba(250,245,235,0.35)]
            "
            style={{
              fontFamily: "var(--font-verse)",
            }}
          >
            "Some words stay."
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;