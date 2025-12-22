import type { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  className?: string;
  classNames?: {
    container?: string;
    title?: string;
    icon?: string;
  };
  title: string;
}

const SectionTitle = ({ title, className, classNames }: Props) => {
  return (
    <div
      className={`flex items-center gap-4 mb-10
                ${className},
                ${classNames?.container}
            `}
    >
      
      <h2
        className={`{text-xl uppercase leading-none'
                    ${classNames?.title}
                }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
