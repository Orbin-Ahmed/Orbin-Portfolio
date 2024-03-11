import makeMyMenuImg from "@/assets/Manager  Dashboard (Menu).png";
import newsPortal from "@/assets/newsPortal.png";
import fitnessMania from "@/assets/fitnessMania.png";
import testTube from "@/assets/testTube.png";

export interface Skill {
  name: string;
  level: string;
}

export interface Project {
  id: number;
  title: string;
  projectImg: string;
  demoLink?: string;
  codeLink: string;
  details: string;
}

export const webSkills: Skill[] = [
  { name: "HTML", level: "Expert" },
  { name: "CSS", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "JavaScript", level: "Expert" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Django", level: "Intermediate" },
  { name: "Bootstrap", level: "Expert" },
  { name: "Tailwind", level: "Advanced" },
  { name: "Git", level: "Advanced" },
  { name: "PostgreSQL", level: "Beginner" },
];

export const machineLearningSkills: Skill[] = [
  { name: "CNN", level: "Proficient" },
  { name: "RNN", level: "Intermediate" },
  { name: "GAN", level: "Beginner" },
  {
    name: "TensorFlow",
    level: "Intermediate",
  },
  { name: "Python", level: "Proficient" },
  { name: "Numpy", level: "Intermediate" },
  { name: "scikit-learn", level: "Intermediate" },
  { name: "Keras", level: "Intermediate" },
  { name: "Pandas", level: "Proficient" },
];

export const projectData: Project[] = [
  {
    id: 1,
    title: "Make My Menu",
    projectImg: makeMyMenuImg,
    demoLink: "https://makemymenu.io/",
    codeLink: "https://github.com/Orbin-Ahmed/makemymenu-frontend",
    details:
      "MakeMyMenu.io is a powerful SaaS solution that empowers restaurants to create paperless, interactive menus for their customers",
  },
  {
    id: 2,
    title: "Fitness Mania",
    projectImg: fitnessMania,
    demoLink: "https://fitness-mania-phi.vercel.app/",
    codeLink: "https://github.com/Orbin-Ahmed/Fitness-Mania",
    details:
      "This project is a React.js single-page application (SPA) built with TypeScript to create a user-friendly and interactive website for Fitness Mania.",
  },
  {
    id: 3,
    title: "News Portal",
    projectImg: newsPortal,
    demoLink: "http://thedainik71arbangladesh.com/",
    codeLink: "https://github.com/Orbin-Ahmed/NewsPortal",
    details:
      "This project This project This project This project This project is an online news portal designed to provide users with a detailed and convenient platform to access local and global news.",
  },
  {
    id: 4,
    title: "Test Tube",
    projectImg: testTube,
    codeLink: "https://github.com/Orbin-Ahmed/TestTube",
    details:
      "This project is a React and TypeScript implementation of a YouTube-like website. It focuses on replicating the functionality of the YouTube homepage.",
  },
];
