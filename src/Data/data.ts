import makeMyMenuImg from "@/assets/Manager  Dashboard (Menu).png";
import fitnessMania from "@/assets/fitnessMania.png";
import facialExpression from "@/assets/facialExpression.png";
import bengaliChraracter from "@/assets/bengaliChraracter.png";
import mousePCA from "@/assets/mousePCA.png";
import carHub from "@/assets/car-hub.png";
import dreamEstate from "@/assets/dream-estate.png";
import clinicalRAGImg from "@/assets/clinicalRag.png";
import n8nAutomationImg from "@/assets/automation.png";
import floorPlannerImg from "@/assets/floorPlanner.png";
import drugInteractionImg from "@/assets/drug.png";
import dnabertImg from "@/assets/dnabert.png";
import pathologyPipelineImg from "@/assets/pathology.png";
import findMyWorksImg from "@/assets/findworks.png";

export interface Project {
  id: number;
  title: string;
  category: string | string[];
  projectImg: string;
  demoLink?: string;
  codeLink: string;
  details: string;
  stack?: string[];
}

export type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Proficient" | "Intermediate";
};

// Full-stack / Web
export const fullStackSkills: Skill[] = [
  { name: "JavaScript", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "Django & DRF", level: "Advanced" },
  { name: "FastAPI", level: "Advanced" },
  { name: "Node.js", level: "Proficient" },
  { name: "REST APIs", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Git/GitHub", level: "Advanced" },
];

// AI/ML & LLMs
export const aiLlmsSkills: Skill[] = [
  { name: "Python", level: "Expert" },
  { name: "PyTorch", level: "Advanced" },
  { name: "TensorFlow", level: "Advanced" },
  { name: "Transformers", level: "Advanced" },
  { name: "scikit-learn", level: "Advanced" },
  { name: "RAG (Retrieval-Augmented Gen.)", level: "Advanced" },
  { name: "LangChain", level: "Advanced" },
  { name: "Computer Vision", level: "Advanced" },
  { name: "BERT/DNA-BERT", level: "Proficient" },
  { name: "Stable Diffusion", level: "Proficient" },
];

// Cloud & DevOps
export const cloudDevOpsSkills: Skill[] = [
  { name: "AWS EC2", level: "Advanced" },
  { name: "AWS S3", level: "Advanced" },
  { name: "AWS RDS", level: "Advanced" },
  { name: "Docker", level: "Advanced" },
  { name: "Terraform", level: "Proficient" },
  { name: "CI/CD (GitHub Actions)", level: "Proficient" },
  { name: "Linux", level: "Proficient" },
  { name: "CloudFront", level: "Proficient" },
  { name: "ECS", level: "Proficient" },
  { name: "N8N Automation", level: "Advanced" },
];

// Data & Databases
export const dataDbSkills: Skill[] = [
  { name: "PostgreSQL", level: "Advanced" },
  { name: "SQL", level: "Advanced" },
  { name: "Pandas", level: "Advanced" },
  { name: "NumPy", level: "Advanced" },
  { name: "Vector Databases", level: "Proficient" },
  { name: "Data Pipelines", level: "Advanced" },
  { name: "Pinecone", level: "Proficient" },
  { name: "Data Modeling", level: "Proficient" },
  { name: "Genomic Data Analysis", level: "Proficient" },
  { name: "ETL Processes", level: "Proficient" },
];

export const projectData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Clinical Knowledge Retrieval System",
    category: "AI/ML",
    projectImg: clinicalRAGImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    details:
      "RAG solution enabling clinicians to query 200+ page BMT guidelines with secure document ingestion and instant AI responses.",
    stack: ["Python", "LangChain", "AWS", "Terraform", "Docker", "ECS"],
  },
  {
    id: 2,
    title: "Enterprise Process Automation Platform",
    category: "Automation",
    projectImg: n8nAutomationImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    details:
      "End-to-end agentic AI automation streamlining HR, Sales, and Design workflows with 95% reduction in manual processing.",
    stack: ["N8N", "Python", "Django", "REST APIs", "PostgreSQL"],
  },
  {
    id: 3,
    title: "3D Floor Planner with AI Design",
    category: "AI/ML",
    projectImg: floorPlannerImg,
    demoLink: "https://dashboard.idealhomeuae.com/auth/login",
    codeLink: "https://github.com/Orbin-Ahmed",
    details:
      "Production AI platform with 93% floor plan detection accuracy, serving 30+ clients with 4K rendering and WebGPU visualization.",
    stack: [
      "Next.js",
      "Django",
      "Python",
      "Stable Diffusion",
      "YOLOv8",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    title: "Drug Interaction Prediction Platform",
    category: "AI/ML",
    projectImg: drugInteractionImg,
    codeLink: "https://github.com/Orbin-Ahmed/EmergnnWebUI",
    details:
      "Graph Neural Network model predicting drug-drug interactions using DrugBank datasets for healthcare professionals.",
    stack: ["Python", "Graph Neural Networks", "Django", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Enhanced DNABERT for Promoter Prediction",
    category: "Research",
    projectImg: dnabertImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    details:
      "Multimodal embeddings enhancement delivering 16% F1-score improvement on genomic promoter prediction benchmarks.",
    stack: ["Python", "PyTorch", "Transformers", "BERT", "Genomics"],
  },
  {
    id: 6,
    title: "Breast Cancer WSI Tumor Prediction Pipeline",
    category: "Research",
    projectImg: pathologyPipelineImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    details:
      "Pathology pipeline with standardized preprocessing, HoVer-Net integration, and batched inference for cross-scanner stability.",
    stack: ["Python", "Computer Vision", "HoVer-Net", "PyTorch"],
  },
  {
    id: 7,
    title: "Make My Menu",
    category: "Web",
    projectImg: makeMyMenuImg,
    codeLink: "https://github.com/Orbin-Ahmed/makemymenu-frontend",
    details:
      "SaaS platform serving 100+ restaurants with 1,000+ daily users for paperless, interactive menus with QR and analytics.",
    stack: ["React", "Django", "PostgreSQL", "AWS"],
  },
  {
    id: 8,
    title: "FindMyWorks Job Platform",
    category: "Web",
    projectImg: findMyWorksImg,
    codeLink: "https://github.com/Orbin-Ahmed/findmyworks-frontend",
    details:
      "Job recruitment platform supporting 200+ job seekers with integrated tools and scalable architecture.",
    stack: ["React", "Django", "REST APIs", "PostgreSQL", "AWS"],
  },
  {
    id: 9,
    title: "Genomic Data Analysis Pipeline",
    category: "Research",
    projectImg: dnabertImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    details:
      "Scalable data pipelines for species classification, pattern detection, and regulatory mechanism identification.",
    stack: ["Python", "Pandas", "NumPy", "Bioinformatics", "AWS"],
  },
  {
    id: 10,
    title: "Health Risk Detection System",
    category: "AI/ML",
    projectImg: facialExpression,
    demoLink: "https://ieeexplore.ieee.org/document/9873684",
    codeLink:
      "https://github.com/Orbin-Ahmed/facial_expression_-_posture_detection",
    details:
      "Published ML system combining facial expression and posture analysis for real-time health risk detection and alerts.",
    stack: ["Python", "OpenCV", "TensorFlow", "CNN"],
  },
  {
    id: 11,
    title: "Bengali Handwriting Character Classification",
    category: "AI/ML",
    projectImg: bengaliChraracter,
    codeLink: "https://github.com/Orbin-Ahmed/Bengali_Handwriting_Classifier",
    details:
      "CNN-based recognition system for handwritten Bengali characters with custom dataset curation and preprocessing.",
    stack: ["Python", "TensorFlow", "Keras", "CNN"],
  },
  {
    id: 12,
    title: "Car Hub",
    category: "Web",
    projectImg: carHub,
    demoLink: "https://car-hub-two-roan.vercel.app/",
    codeLink: "https://github.com/Orbin-Ahmed/car-showcase",
    details:
      "Modern car exploration platform with spec comparison, rental price estimation, and responsive design.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 13,
    title: "Dream Estate",
    category: "Web",
    projectImg: dreamEstate,
    demoLink: "https://dream-estate-six.vercel.app/",
    codeLink: "https://github.com/Orbin-Ahmed/Real-Estate-Frontend",
    details:
      "Property search platform with advanced filters, responsive cards, and seamless browsing for rentals and sales.",
    stack: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 14,
    title: "Fitness Mania",
    category: "Web",
    projectImg: fitnessMania,
    demoLink: "https://fitness-mania-phi.vercel.app/",
    codeLink: "https://github.com/Orbin-Ahmed/Fitness-Mania",
    details:
      "Interactive fitness SPA for class browsing and workout exploration with fully responsive TypeScript architecture.",
    stack: ["React", "TypeScript", "Tailwind", "Vercel"],
  },
  {
    id: 15,
    title: "RNAseq Analysis Pipeline",
    category: "Research",
    projectImg: mousePCA,
    codeLink: "https://github.com/Orbin-Ahmed/RNAseq_analysis",
    details:
      "Comprehensive RNA sequencing data analysis with PCA visualization, differential expression, and statistical modeling.",
    stack: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
];
