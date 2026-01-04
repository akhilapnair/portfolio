import { useRef } from "react";
import type { ReactNode } from "react";
import type { ExperienceCard } from "../types/Experience-card";

interface GlowCardProps {
  card: ExperienceCard;
  index: number;
  children?: ReactNode;
}
const GlowCard = ({ card, index, children }: GlowCardProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      className="card card-border timeline-card rounded-xl p-5 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="mb-5">
        <h3 className="text-white-50 text-xl">{card.companyBrief}</h3>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
