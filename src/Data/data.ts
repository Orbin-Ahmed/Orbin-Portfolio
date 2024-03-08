export interface Skill {
  name: string;
  level: string;
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
