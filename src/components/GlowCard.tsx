import { useRef } from "react";
import type { ReactNode } from "react";
import type { ExperienceCard } from "../types/Experience-card";

interface GlowCardProps {
  card: ExperienceCard; 
  index:  number;
  children?: ReactNode; 
}
const GlowCard = ({ card, index, children }: GlowCardProps) => {
const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: any) => (e:any) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", `${angle + 60}deg`);
  };

  return (
    <div
      ref={(el) => {(cardRefs.current[index] = el)}}
      onMouseMove={handleMouseMove(index)}
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
