import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import DecoderName from "./Decoder-text";

const roles = ["Developer", "Designer", "Creator"];

export default function WipeText() {
  const [index, setIndex] = useState(0);
  const wipeRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    gsap.set(nameRef.current, { opacity: 0 });

    gsap.set(wipeRef.current, { xPercent: -100 });
    const tl = gsap.timeline({
      onComplete: () => {
        // Move to next role after a slight pause
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
      },
    });

    // Wipe in
    tl.to(wipeRef.current, {
      xPercent: 0,
      duration: 1.0,
      ease: "power2.out",
    });

    // Wipe out
    tl.to(wipeRef.current, {
      xPercent: 100,
      duration: 0.5,
      delay: 1.0,
      ease: "power2.in",
    });
  }, [index]);

  return (
    <>
      <header className="flex flex-col items-start justify-center  ml-[20vw] px-2 sm:px-4 text-left max-w-4xl">
        <DecoderName text="Akhila Prabhakarn Nair" className="text-gray-300" />

        <h2 className="text-5xl sm:text-8xl font-extrabold leading-tight">
          <div className="flex items-center gap-4  justify-center w-full">
            <span>Frontend</span>
            <span className="h-px min-w-[300px] bg-oceanSky flex-1 "></span>
          </div>
          <div className="relative w-fit overflow-hidden mt-3">
            <span
              ref={wipeRef}
              className="absolute inset-0 bg-oceanSky z-10"
            ></span>
            <div className="flex items-center gap-3 sm:gap-4 justify-center relative px-4 py-1 text-5xl sm:text-6xl font-bold">
              <span className="text-gray-500">+</span>
              <span className="text-white">{roles[index]}</span>
            </div>
          </div>
        </h2>
      </header>
    </>
  );
}
