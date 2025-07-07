import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const roles = ["Developer", "Designer", "Frontend", "Creator"];

export default function WipeText() {
  const [index, setIndex] = useState(0);
  const wipeRef = useRef(null);


 useEffect(() => {
    gsap.set(wipeRef.current, { xPercent: -100 });
    const tl = gsap.timeline({
      onComplete: () => {
        // Move to next role after a slight pause
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 500);
      },
    });

    // Wipe in
    tl.to(wipeRef.current, {
      xPercent: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Wipe out
    tl.to(wipeRef.current, {
      xPercent: 100,
      duration: 0.5,
      delay: 0.5,
      ease: 'power2.in',
    });
  }, [index]);

  return (
    <>
      <header className="flex flex-col items-start justify-center  ml-[20vw] px-2 sm:px-4 text-left max-w-4xl">
        <h1
          className="text-sm uppercase tracking-wide font-semibold text-gray-300 mb-4 name"
          id="intro-title"
          data-visible="true"
        >
          <span>
            <span
              aria-hidden="true"
              className="flex justify-start text-2xl gap-0.5 text-lightgrey"
            >
              {"Akhila  Prabhakarn  Nair".split("").map((char, idx) => (
                <span key={idx}>{char}</span>
              ))}
            </span>
          </span>
        </h1>
         <h2 className="text-5xl sm:text-8xl font-extrabold leading-tight">
          <div className="flex items-center gap-4 flex-wrap justify-center w-full">
            <span>Frontend</span>
            <span className="h-px bg-gray-600 flex-1 min-w-[200px] hidden sm:block"></span>
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
      {/* <div
        ref={containerRef}
        className="relative inline-block overflow-hidden text-4xl font-bold text-gray-800"
        style={{ width: "12rem", height: "3rem" }}
      >
        <div
          ref={wipeRef}
          className="absolute top-0 left-0 h-full w-full bg-oceanSky"
          style={{ zIndex: 10 }}
        ></div>
        <span ref={textRef} className="relative z-20 px-2">
          {roles[index]}
        </span>
      </div> */}
    </>
  );
}
