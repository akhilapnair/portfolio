import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";
import type { ExperienceCard } from "../types/Experience-card";
import SectionTitle from "../components/SectionTitle";
import { useRef } from "react";

const Experience = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".company").forEach((card: any) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text: any) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);
  return (
    <section
      id="experience"
      className="container w-full md:mt-4o mt-20  xl:px-0"
    >
      <SectionTitle title="My Career Overview" />
      <div className="mt-32 relative">
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-10 ">
            {expCards.map((card: ExperienceCard, index: number) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6 company">
                  <GlowCard card={card}>
                 
                    <h6 className="font-semibold text-lg">💼&nbsp;{card.title}</h6>
                    <p className="mb-5 text-white-50">🗓️&nbsp;{card.date}</p>
                    {/* </p> */}
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo w-22 h-22 p-2 rounded-full bg-black">
                        <img
                          src={card.logoPath}
                          className="rounded-full w-full h-full object-cover"
                          alt="logo"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-3xl">{card.title}</h3>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Experience;
