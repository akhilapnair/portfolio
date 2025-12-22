import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";
import type { ExperienceCard } from "../types/Experience-card";
import SectionTitle from "../components/SectionTitle";

const Experience = () => {

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
        end: "80% center",
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
      id="Experience"
      className="container w-full md:mt-4o mt-20  xl:px-0"
    >
      <SectionTitle title="My Career Overview" />
      <div className="mt-32 relative">
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-10 ">
            {expCards.map((card: ExperienceCard, index: number) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-1/4 company text-left">
                  <GlowCard card={card} index={index}>
                 
                    <h6 className="font-medium text-base text-gray-300">💼&nbsp;{card.title}</h6>
                    <p className="text-sm text-gray-500 mb-4 ">🗓️&nbsp;{card.date}</p>
                    {/* </p> */}
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-10 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo w-22 h-22 p-2 rounded-full bg-black">
                        <img
                          src={card.logoPath}
                          className="rounded-full w-full h-full object-cover"
                          alt="logo"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-xl">{card.title}</h3>
                        <p className="text-[#839CB5] italic my-3">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-sm">
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
