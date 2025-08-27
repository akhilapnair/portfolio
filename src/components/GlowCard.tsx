import { useRef } from "react";
import type { ReactNode } from "react";
import type { ExperienceCard } from "../types/Experience-card";

interface GlowCardProps {
  card: ExperienceCard; 
  index: number;
  children?: ReactNode; 
}
const GlowCard = ({ card, index, children }: GlowCardProps) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleMouseMove = (index: any) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.companyBrief}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
