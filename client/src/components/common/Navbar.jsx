import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
const [open, setOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 backdrop-blur-md border-b border-[#c8922a33] bg-[rgba(250,245,235,0.92)]"> <div className="max-w-7xl mx-auto">

    <div className="flex justify-between items-center">

      <div
        className="text-2xl md:text-3xl font-bold"
        style={{ fontFamily: "var(--font-display)" }}
      >
        مح<span className="text-[var(--gold)]">فل</span> Mehfil
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center">
        <li>
          <a href="#" className="hover:text-[var(--gold)] transition">
            Home
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[var(--gold)] transition">
            Discover
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[var(--gold)] transition">
            Poets
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[var(--gold)] transition">
            Community
          </a>
        </li>

        <li>
          <button className="bg-[var(--ink)] text-[var(--gold-light)] px-5 py-2 rounded-sm hover:bg-[var(--gold)] hover:text-[var(--ink)] transition">
            Enter Mehfil
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[var(--ink)]"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

    </div>

    {/* Mobile Menu */}
    {open && (
      <div
        className="
        md:hidden
        mt-4
        border-t
        border-[rgba(200,146,42,0.2)]
        pt-4
        "
      >
        <ul className="flex flex-col gap-4 pb-4">

          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Discover</a>
          </li>

          <li>
            <a href="#">Poets</a>
          </li>

          <li>
            <a href="#">Community</a>
          </li>

          <li>
            <button className="w-full bg-[var(--ink)] text-[var(--gold-light)] px-5 py-2 rounded-sm">
              Enter Mehfil
            </button>
          </li>

        </ul>
      </div>
    )}

  </div>
</nav>


);
};

export default Navbar;
