import type { ExperienceCard } from "../types/Experience-card";

const expCards: ExperienceCard[] = [
  {
    companyBrief:
      "GattyInstruments AB is a Swedish R&D company in Uppsala specializing in mobile respiratory analyzers for healthcare professionals and respiratory health users.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      
      "The company required a secure, user-friendly doctor’s dashboard to manage clinical data efficiently",
      "I developed and integrated core features for the doctor's dashboard using React.js, Tailwind CSS, and TypeScript for a modern, responsive UI. ",
      "I built scalable APIs and managed data using Node.js and MySQL. To ensure reliability, I wrote unit tests with Jest, contributing to a production-ready system that supported the product’s timely certification and launch.",
    ],
  },
];

export { expCards };
