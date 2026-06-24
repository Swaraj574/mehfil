import { useEffect, useRef } from "react";

const LiteraryCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
      fixed
      pointer-events-none
      z-[9999]
      "
    >
      <div className="w-4 h-4 rounded-full bg-[var(--gold)] opacity-80" />
    </div>
  );
};

export default LiteraryCursor;