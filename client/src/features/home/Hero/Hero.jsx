import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/animations";
import useTypewriter from "../../../hooks/useTypewriter";
import HeroBackground from "./HeroBackground";
import HeroOrnament from "./HeroOrnament";

const Hero = () => {
const typedText = useTypewriter(
"I didn't write this to be read.\nI wrote it to survive the night.",
40
);

return ( <section
   className="
     relative
     min-h-screen
     pt-24
     bg-[var(--ink)]
     flex
     items-center
     justify-center
     text-center
     px-8
     overflow-hidden
   "
 >
{/* Background Effects */} 
<HeroBackground />
<HeroOrnament />

```
  {/* Hero Content */}
  <motion.div
    className="relative z-10 max-w-4xl"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
  >
    <span className="uppercase tracking-[0.25em] text-[var(--gold)] text-sm">
      ✦ A Literary Gathering ✦
    </span>

    <h1
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-6 text-[var(--parchment)]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      مح<span className="text-[var(--gold)]">فل</span>
      <br />
      Mehfil
    </h1>

    <p
      className="mt-6 text-xl italic text-[rgba(250,245,235,0.6)]"
      style={{ fontFamily: "var(--font-verse)" }}
    >
      Every Verse Tells a Story
    </p>

    <div className="mt-12 border-l-2 border-[var(--gold)] pl-6 text-left max-w-xl mx-auto">
      <p
        className="text-xl italic text-[rgba(250,245,235,0.85)] whitespace-pre-line"
        style={{ fontFamily: "var(--font-verse)" }}
      >
        {typedText}
      </p>
    </div>

<div className="flex flex-wrap gap-4 justify-center mt-12">

  <button
    className="
    bg-[var(--gold)]
    text-[var(--ink)]
    px-8
    py-3
    transition
    duration-300
    hover:scale-105
    hover:opacity-90
    "
  >
    Enter The Mehfil
  </button>

  <button
    className="
    border
    border-[rgba(250,245,235,0.3)]
    text-white
    px-8
    py-3
    transition
    duration-300
    hover:scale-105
    "
  >
    Explore Poetry
  </button>

  <button
    className="
    border
    border-[rgba(250,245,235,0.15)]
    text-gray-300
    px-8
    py-3
    transition
    duration-300
    hover:scale-105
    "
  >
    🎙 Listen to Recitations
  </button>

</div>
  </motion.div>
</section>


);
};

export default Hero;
