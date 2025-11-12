import type { ExperienceCard } from "../types/Experience-card";

const expCards: ExperienceCard[] = [
  {
    companyBrief: "GattyInstruments AB ",
    imgPath: "/images/exp2.png",
    logoPath: "/images/gattyI_logo.jpg",
    title: "Full Stack Developer",
    date: "December 2023 - May 2024",
    responsibilities: [
      " Contributed to the development of a doctor’s dashboard for a medical respiratory analyzer device.",
      "Built key UI features using React.js, TypeScript, and Tailwind CSS, ensuring usability and performance.",
      "Developed scalable REST APIs with Node.js & MySQL for secure clinical data management.",
    ],
  },
  {
    companyBrief: "IBS Software Services Pvt Ltd ",
    imgPath: "/images/.jpg",
    logoPath: "/images/IBS_Logo.jpg",
    title: "Lead Solution Engineer",
    date: "December 2021 - August 2024",
    responsibilities: [
      "Led development of large-scale enterprise web applications for aviation and logistics clients.",
      "Architected and maintained a micro-frontend monorepo using Nx for scalable development.",
      "Built applications using Angular 13+, TypeScript, HTML5, Angular Material, and reusable shared libraries.",
      "Implemented NGXS state management, improving maintainability and performance.",
      "Collaborated with cross-functional teams and stakeholders to ensure delivery aligned with business goals.",
    ],
  },
  {
    companyBrief: "Kameda Infologics Pvt Ltd ",
    imgPath: "/images/exp2.png",
    logoPath: "/images/kamedainfologics_logo.jpg",
    title: "Senior Software Engineer",
    date: "February  2021 - December 2021",
    responsibilities: [
      "Led a UI team to enhance and modernize the YASASII healthcare application modules.",
      "Migrated the system from Angular 9 to Angular 11, improving performance and maintainability.",
      "Implemented reusable UI components within a monorepo architecture.",
      "Conducted code reviews and mentored junior developers to improve code quality and efficiency.",
      "Built responsive UIs with Angular, Bootstrap, CSS3, JavaScript, and Sass.",
    ],
  },
  {
    companyBrief: "Ust Global Pvt Ltd ",
    imgPath: "/images/exp2.png",
    logoPath: "/images/UST_Logo.png",
    title: "Software Engineer",
    date: "October  2018 - December 2021",
    responsibilities: [
      " Worked on modernization of legacy enterprise applications for a banking client.",
      "Migrated a large application from Angular 6 to Angular 11, improving performance and maintainability.",
      "Developed UI features using Angular, Bootstrap, CSS3, and JavaScript.",
      "Built and integrated REST APIs and delivered an MVP using D3.js for data visualizations.",
      "The MVP launch successfully led to additional project funding and extended engagement.",
    ],
  },
  {
    companyBrief: "Neoito Technologies Pvt Ltd ",
    imgPath: "/images/exp2.png",
    logoPath: "/images/neoito-logo.png",
    title: "Software Developer",
    date: "June 2017 - June 2018",
    responsibilities: [
      " Contributed to Databot.io, a Business Intelligence platform enabling data-driven decision making.",
      "Developed UI components using Angular 5 and Material Design principles.",
      "Supported re-engineering of PropertyOK using Redux architecture to improve performance.",
      "Collaborated in a fast-paced startup environment, helping deliver high-quality product iterations.",
    ],
  },
];

export const MY_STACK = [
  {
    name: "Javascript",
    icon: "/logo/js.png",
  },
  {
    name: "Typescript",
    icon: "/logo/ts.png",
  },
  {
    name: "React",
    icon: "/logo/react.png",
  },
  {
    name: "Angular",
    icon: "/logo/angular.png",
  },
  {
    name: "Redux",
    icon: "/logo/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/logo/tailwind.png",
  },
  {
    name: "GSAP",
    icon: "/logo/gsap.png",
  },

  {
    name: "SASS",
    icon: "/logo/sass.png",
  },
  {
    name: "Bootstrap",
    icon: "/logo/bootstrap.svg",
  },
  {
    name: "Node.js",
    icon: "/logo/node.png",
  },
  {
    name: "MySQL",
    icon: "/logo/mysql.svg",
  },
  {
    name: "Git",
    icon: "/logo/git.png",
  },
];

export const socialImgs = [
  {
    name: "Git",
    imgPath: "/images/github.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
];

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];
export const GENERAL_INFO = {
  name: "Akhila Prabhakaran Nair",
  email: "nairakhila204@gmail.com",
  profile_pic: "/images/profile_pic.png",
};
export { expCards };
