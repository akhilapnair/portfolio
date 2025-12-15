import { useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const glyphs = [
  ..."アアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲン",
  ..."ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ"
];

const CharType = {
  Glyph: "glyph",
  Value: "value",
};
type CharItem = {
  type: string;
  value: string;
};

function shuffleToTarget(target: string[], output: CharItem[], progress: number) {
  return target.map((char, index) => {
    if (index < progress) {
      return { type: CharType.Value, value: char };
    }

    if (progress % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index]?.value || char };
  });
}

export default function DecoderName({
  text = "Akhila Prabhakarn Nair",
  startDelay = 0,
  className = "",
}) {
const containerRef = useRef<HTMLSpanElement>(null);
const output = useRef<{ type: string; value: string }[]>([]);

  const spring = useSpring(0, { stiffness: 8, damping: 5 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
const container: HTMLSpanElement | null = containerRef.current;
if (!container) return; // exit early or handle null case

container.innerHTML = ' ';
    const characters = text.split("");

    const render = () => {
      const content = output.current
        .map((item) => {
          const className =
            item.type === CharType.Value ? "uppercase tracking-wider font-semibold text-gray-300 " : "text-oceanSky";
          return `<span class="${className}">${item.value}</span>`;
        })
        .join("");

      container.innerHTML = content;
    };

    const unsubscribe = spring.on("change", (v) => {
      output.current = shuffleToTarget(characters, output.current, v);
      render();
    });

    if (reduceMotion) {
      output.current = characters.map((c) => ({ type: CharType.Value, value: c }));
      render();
    } else {
      const timeout = setTimeout(() => {
        spring.set(characters.length);
      }, startDelay);
      return () => {
        unsubscribe();
        clearTimeout(timeout);
      };
    }
  }, [spring, reduceMotion, text, startDelay]);

  return (
    <span
      className={`inline-block font-mono text-xl md:text-3xl ${className}`}
      aria-label={text}
    >
      <span ref={containerRef} aria-hidden="true" />
    </span>
  );
}
