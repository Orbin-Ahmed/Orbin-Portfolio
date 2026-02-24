import makeMyMenuImg from "@/assets/Manager  Dashboard (Menu).png";
import facialExpression from "@/assets/facialExpression.png";
import bengaliChraracter from "@/assets/bengaliChraracter.png";
import staffingPlatformImg from "@/assets/staffingPlatform.png";
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
  codeLink: string;
  demoLink?: string;
  details: string;
  stack: string[];
  featured?: boolean;
  metrics?: Record<string, string>;
}

export type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Proficient" | "Intermediate";
};

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  highlights: string[];
  technologies?: string[];
}

export interface Publication {
  id: number;
  title: string;
  authors?: string;
  venue: string;
  year: number;
  link?: string;
  type?: string;
  status?: string;
  citations?: number;
  abstract?: string;
}

// AI & Machine Learning
export const aiMlSkills: string[] = [
  "PyTorch",
  "TensorFlow",
  "Transformers",
  "BERT",
  "Stable Diffusion",
  "YOLOv8",
  "LangChain",
  "RAG",
  "Graph Neural Networks",
  "Computer Vision",
  "scikit-learn",
];

// Full-Stack Development
export const fullStackSkills: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Django/DRF",
  "FastAPI",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "Tailwind CSS",
  "HTML/CSS",
];

// Cloud & DevOps
export const cloudDevOpsSkills: string[] = [
  "AWS EC2",
  "AWS S3",
  "AWS RDS",
  "AWS ECS",
  "CloudFront",
  "Docker",
  "Terraform",
  "CI/CD",
  "Linux",
  "Git/GitHub",
];

// Automation & Integration
export const automationSkills: string[] = [
  "N8N",
  "Make.com",
  "Agentic AI Workflows",
  "Process Automation",
  "ERP Integration",
  "Celery",
  "Human-in-the-loop",
];

// Data & Analytics
export const dataToolsSkills: string[] = [
  "PostgreSQL",
  "Pandas",
  "NumPy",
  "SQL",
  "Pinecone",
  "Vector Databases",
  "Data Pipelines",
  "ETL",
];

// Biomedical Informatics
export const biomedicalSkills: string[] = [
  "Genomic Analysis",
  "DNABERT",
  "CellViT",
  "HoVer-Net",
  "Pathology Image Analysis",
  "WSI Processing",
  "Clinical Knowledge Systems",
];

export const projectData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Clinical Knowledge Retrieval System",
    category: "AI/ML",
    projectImg: clinicalRAGImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    featured: true,
    details:
      "Production RAG system at MSKCC enabling instant querying of 200+ page BMT guidelines. Deployed on AWS ECS with Terraform infrastructure.",
    stack: ["Python", "LangChain", "AWS ECS", "Terraform", "Docker"],
    metrics: {
      impact: "Instant clinical decisions",
      scale: "200+ pages indexed",
    },
  },
  {
    id: 2,
    title: "AI Staffing & Event Management Platform",
    category: "Automation",
    projectImg: staffingPlatformImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    featured: true,
    details:
      "Full-stack SaaS with multi-tenant architecture, JWT authentication, role-based access control, and automated staff-event matching for FIDI Hospitality.",
    stack: ["Django", "DRF", "PostgreSQL", "JWT", "React", "AWS"],
    metrics: { impact: "95% manual reduction", users: "Multi-tenant SaaS" },
  },
  {
    id: 3,
    title: "3D Floor Planner with AI Design",
    category: "AI/ML",
    projectImg: floorPlannerImg,
    demoLink: "https://dashboard.idealhomeuae.com/auth/login",
    codeLink: "https://github.com/Orbin-Ahmed",
    featured: true,
    details:
      "Production AI platform with YOLOv8 floor plan detection (93% accuracy), Stable Diffusion for 360° redesigns, and WebGPU 4K rendering serving 30+ clients.",
    stack: ["Next.js", "Django", "Stable Diffusion", "YOLOv8", "WebGPU"],
    metrics: { accuracy: "93%", clients: "30+", renders: "2,000+" },
  },
  {
    id: 4,
    title: "Enterprise Process Automation Platform",
    category: "Automation",
    projectImg: n8nAutomationImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    featured: true,
    details:
      "End-to-end agentic AI automation with N8N orchestrating HR, Sales, and Design workflows. Features human-in-the-loop approvals and ERP integration.",
    stack: ["N8N", "Python", "Django", "REST APIs", "PostgreSQL"],
    metrics: { reduction: "95% time saved", automation: "Full pipeline" },
  },
  {
    id: 5,
    title: "Enhanced DNABERT for Promoter Prediction",
    category: "Research",
    projectImg: dnabertImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    featured: true,
    details:
      "Published research: Multimodal embeddings (sequence + physicochemical features) achieving 16% F1-score improvement on genomic promoter prediction.",
    stack: ["Python", "PyTorch", "Transformers", "BERT", "Genomics"],
    metrics: {
      improvement: "16% F1-score lift",
      status: "Published MLCB 2025",
    },
  },

  {
    id: 6,
    title: "Breast Cancer WSI Tumor Prediction Pipeline",
    category: "Research",
    projectImg: pathologyPipelineImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    featured: true,
    details:
      "Pathology pipeline integrating HoVer-Net for stain segmentation, standardized preprocessing (Macenko normalization), and batched inference for cross-scanner stability.",
    stack: ["Python", "PyTorch", "HoVer-Net", "Computer Vision"],
  },
  {
    id: 7,
    title: "Drug Interaction Prediction Platform",
    category: "AI/ML",
    projectImg: drugInteractionImg,
    codeLink: "https://github.com/Orbin-Ahmed/EmergnnWebUI",
    details:
      "Graph Neural Network model predicting drug-drug interactions using DrugBank molecular structures with Django web interface for healthcare professionals.",
    stack: ["Python", "GNN", "Django", "PostgreSQL"],
  },
  {
    id: 8,
    title: "Make My Menu",
    category: "Web",
    projectImg: makeMyMenuImg,
    codeLink: "https://github.com/Orbin-Ahmed/makemymenu-frontend",
    details:
      "SaaS platform serving 100+ restaurants with 1,000+ daily users. Features QR codes, paperless menus, and analytics dashboard.",
    stack: ["React", "Django", "PostgreSQL", "AWS"],
  },
  {
    id: 9,
    title: "FindMyWorks Job Platform",
    category: "Web",
    projectImg: findMyWorksImg,
    codeLink: "https://github.com/Orbin-Ahmed/findmyworks-frontend",
    details:
      "Job recruitment platform supporting 200+ job seekers with integrated screening tools, application tracking, and employer dashboard.",
    stack: ["React", "Django", "REST APIs", "PostgreSQL"],
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
      "Published ML system combining facial expression and posture analysis for real-time health risk detection with automated alerts.",
    stack: ["Python", "OpenCV", "TensorFlow", "CNN"],
  },

  {
    id: 11,
    title: "Genomic Data Analysis Pipeline",
    category: "Research",
    projectImg: dnabertImg,
    codeLink: "https://github.com/Orbin-Ahmed",
    details:
      "Scalable pipelines for species classification, motif detection, and regulatory mechanism identification in genomic sequences.",
    stack: ["Python", "Pandas", "Bioinformatics"],
  },
  {
    id: 12,
    title: "Bengali Handwriting Classifier",
    category: "AI/ML",
    projectImg: bengaliChraracter,
    codeLink: "https://github.com/Orbin-Ahmed/Bengali_Handwriting_Classifier",
    details:
      "CNN-based recognition system for handwritten Bengali characters with custom dataset curation and data augmentation.",
    stack: ["Python", "TensorFlow", "CNN"],
  },
];

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Full-Stack AI Engineer",
    company: "FIDI Hospitality",
    location: "Long Island, NY",
    period: "Oct 2025 – Present",
    type: "Full-time",
    highlights: [
      "Revamping company website architecture and UI/UX for improved performance, scalability, and integration with AI-driven automation systems",
      "Designing and deploying agentic chatbots and AI workflow automations to connect website, ERP, and CRM systems for seamless data exchange",
      "Implementing AI-powered floor plan automation with OCR-based parsing and digital interior visualization with intelligent decor placement",
      "Developing AI-powered staffing solution with multi-tenant SaaS architecture, JWT authentication, and role-based access control to reduce manual hiring workloads",
    ],
    technologies: [
      "React",
      "Next.js",
      "Django",
      "N8N",
      "AI Workflows",
      "OCR",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    id: 2,
    role: "Technical Lead - AI Systems",
    company: "Ideal Factory",
    location: "Abu Dhabi, UAE",
    period: "Apr 2024 – Sep 2025",
    type: "Full-time",
    highlights: [
      "Accelerated design delivery by 95%, reducing mockup turnaround from 4 days to 60-120 minutes using AI-powered 3D design system with Blender, Stable Diffusion, and YOLOv8 (93% accuracy)",
      "Scaled production operations generating 2,000+ 4K renders serving 30+ clients across 10-designer team while reducing cloud rendering time by 80%",
      "Automated entire business pipeline using N8N platform, fully automating HR, Sales, and Design processes with human-in-the-loop approval workflows",
      "Delivered full-stack AI platform with Next.js/Django applications, real-time AI model integration, deployed on AWS infrastructure",
    ],
    technologies: [
      "Python",
      "Stable Diffusion",
      "YOLOv8",
      "Next.js",
      "Django",
      "N8N",
      "AWS",
      "Blender",
      "WebGPU",
    ],
  },
  {
    id: 3,
    role: "Summer Intern (AI/ML Team)",
    company: "Memorial Sloan Kettering Cancer Center",
    location: "New York, USA",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    highlights: [
      "Built and launched custom RAG solution enabling clinicians to query 200+ page medical guidelines instantly, significantly reducing research time for patient care decisions",
      "Optimized AI system performance through systematic benchmarking against industry-standard open-source alternatives",
      "Led cross-functional integration initiatives with clinical teams, product managers, and DevOps engineers to streamline AI tool adoption",
      "Containerized application using Docker and deployed on AWS ECS with Terraform for automated infrastructure provisioning",
    ],
    technologies: [
      "Python",
      "LangChain",
      "RAG",
      "Docker",
      "AWS ECS",
      "Terraform",
      "FastAPI",
    ],
  },
  {
    id: 4,
    role: "Senior Research Assistant",
    company: "Stony Brook University",
    location: "New York, USA",
    period: "Nov 2024 – Jun 2025",
    type: "Research",
    highlights: [
      "Enhanced DNABERT with multimodal embeddings (sequence + physicochemical features), delivering 16% lift in F1-score on promoter prediction benchmarks",
      "Designed and deployed scalable data pipelines for genomic analysis workflows including species classification, pattern detection, and regulatory mechanism identification",
      "Integrated stain segmentation into HoVer-Net pathology pipeline to produce cleaner nuclei boundaries and stabilize downstream tumor classification",
      "Built breast-cancer WSI tumor-prediction pipeline with standardized preprocessing (Macenko normalization) and batched inference improving cross-scanner stability",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "BERT",
      "Transformers",
      "HoVer-Net",
      "Computer Vision",
      "Genomics",
    ],
  },
  {
    id: 5,
    role: "Software Engineer I",
    company: "Increments Inc",
    location: "Dhaka, Bangladesh",
    period: "May 2022 – Oct 2023",
    type: "Full-time",
    highlights: [
      "Produced SRS for 5 projects (3 external clients, 2 internal), delivering UML artifacts that clarified scope and reduced development back-and-forth",
      "Built MakeMyMenu.io serving 100+ restaurants with 1,000+ daily users and FindMyWorks supporting 200+ job seekers with integrated recruitment tools",
      "Engineered scalable React.js/Django solutions with reusable components, REST APIs, and AWS deployment (EC2, RDS, S3) ensuring production reliability",
      "Customized ERPNext solutions with comprehensive testing protocols for enterprise business process optimization",
    ],
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "AWS",
      "REST APIs",
      "ERPNext",
    ],
  },
];

export const publicationsData: Publication[] = [
  {
    id: 1,
    title:
      "Augmenting DNABERT embeddings with multimodal DNA features for improved regulatory sequence interpretation",
    authors: "Orbin Ahmed Acanto, et al.",
    venue:
      "Proceedings of the 2025 Machine Learning in Computational Biology (MLCB) Conference",
    year: 2025,
    type: "Conference Paper",
    status: "Published",
    link: "https://proceedings.mlr.press/",
    abstract:
      "This work enhances DNABERT with multimodal embeddings combining sequence data and physicochemical features, achieving a 16% improvement in F1-score for promoter prediction benchmarks. The approach demonstrates significant advances in genomic regulatory sequence interpretation through transfer learning and multimodal feature integration.",
  },
  {
    id: 2,
    title:
      "A hybrid approach to determine patient's critical situation using deep learning algorithm",
    authors: "Orbin Ahmed Acanto, et al.",
    venue:
      "2022 2nd International Conference on Computing and Machine Intelligence (ICMI)",
    year: 2022,
    type: "Conference Paper",
    status: "Published",
    link: "https://ieeexplore.ieee.org/document/9873684",
    abstract:
      "Presents a novel hybrid deep learning system combining facial expression analysis and posture detection for real-time health risk assessment. The system achieves high accuracy in detecting critical patient situations through multi-modal data fusion, enabling early intervention and automated alert mechanisms for healthcare providers.",
  },
];
