import makeMyMenuImg from "@/assets/Manager  Dashboard (Menu).png";
import newsPortal from "@/assets/newsPortal.png";
import fitnessMania from "@/assets/fitnessMania.png";
import testTube from "@/assets/testTube.png";
import facialExpression from "@/assets/facialExpression.png";
import bengaliChraracter from "@/assets/bengaliChraracter.png";
import mousePCA from "@/assets/mousePCA.png";
import heartDataFreq from "@/assets/heartDataFreq.jpg";
import carHub from "@/assets/car-hub.png";

export interface Skill {
  name: string;
  level: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
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
  { name: "Express JS", level: "Intermediate" },
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
    category: "Web",
    projectImg: makeMyMenuImg,
    demoLink: "https://makemymenu.io/",
    codeLink: "https://github.com/Orbin-Ahmed/makemymenu-frontend",
    details:
      "MakeMyMenu.io is a powerful SaaS solution that empowers restaurants to create paperless, interactive menus for their customers",
  },
  {
    id: 2,
    title: "Fitness Mania",
    category: "Web",
    projectImg: fitnessMania,
    demoLink: "https://fitness-mania-phi.vercel.app/",
    codeLink: "https://github.com/Orbin-Ahmed/Fitness-Mania",
    details:
      "This project is a React.js single-page application (SPA) built with TypeScript to create a user-friendly and interactive website for Fitness Mania.",
  },
  {
    id: 3,
    title: "Car Hub",
    category: "Web",
    projectImg: carHub,
    demoLink: "https://car-hub-two-roan.vercel.app/",
    codeLink: "https://github.com/Orbin-Ahmed/car-showcase",
    details:
      "Car Hub goes beyond just showcasing car details. It transforms into a comprehensive automotive hub, providing users with car information, comparisons and rent price.",
  },
  {
    id: 4,
    title: "News Portal",
    category: "Web",
    projectImg: newsPortal,
    codeLink: "https://github.com/Orbin-Ahmed/NewsPortal",
    details:
      "This project is an online news portal designed to provide users with a detailed and convenient platform to access local and global news.",
  },
  {
    id: 5,
    title: "Test Tube",
    category: "Web",
    projectImg: testTube,
    codeLink: "https://github.com/Orbin-Ahmed/TestTube",
    details:
      "This project is a React and TypeScript implementation of a YouTube-like website. It focuses on replicating the functionality of the YouTube homepage.",
  },
  {
    id: 6,
    title:
      "Health Risk Detection using Facial Expressions and Posture Analysis",
    category: "Machine Learning",
    projectImg: facialExpression,
    demoLink: "https://ieeexplore.ieee.org/document/9873684",
    codeLink:
      "https://github.com/Orbin-Ahmed/facial_expression_-_posture_detection",
    details:
      "This project develops a machine learning system for identifying critical health situations in real-time by combining facial expression recognition and posture analysis.",
  },
  {
    id: 7,
    title: "Bengali Handwriting Character Classification",
    category: "Machine Learning",
    projectImg: bengaliChraracter,
    codeLink: "https://github.com/Orbin-Ahmed/Bengali_Handwriting_Classifier",
    details:
      "This project tackles the challenge of recognizing handwritten Bengali characters using a Convolutional Neural Network (CNN) model.",
  },
  {
    id: 8,
    title: "In-depth Analysis of RNA Sequences in the context of mouse species",
    category: "Machine Learning",
    projectImg: mousePCA,
    codeLink: "https://github.com/Orbin-Ahmed/RNAseq_analysis",
    details:
      "This project delves into the intricate world of RNA sequencing data analysis, specifically focusing on gene expression patterns in various mouse species.",
  },
  {
    id: 9,
    title: "SVM and Linear Regression Models for Heart Disease Prediction",
    category: "Machine Learning",
    projectImg: heartDataFreq,
    codeLink: "https://github.com/Orbin-Ahmed/Heart_Disease_Prediction",
    details:
      "This project investigates the effectiveness of two machine learning models, Support Vector Machines and Linear Regression, in predicting the risk of heart disease.",
  },
];
