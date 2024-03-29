import { Project } from "@/Data/data";
import Chips from "@/components/Chips";
import HText from "@/components/HText";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import { projectData } from "@/Data/data";
import { motion } from "framer-motion";

type ProfileProps = {
  projectItemData: Project[];
  filterProjectItem: (category: string) => void;
  setProjectItem: React.Dispatch<React.SetStateAction<Project[]>>;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Portfolio = ({
  projectItemData,
  filterProjectItem,
  setProjectItem,
  setSelectedPage,
}: ProfileProps) => {
  const [selectedChip, setSelectedChip] = useState("All");

  const handleChipClick = (chipTitle: string) => {
    setSelectedChip(chipTitle);
    if (chipTitle === "All") setProjectItem(projectData);
    else filterProjectItem(chipTitle);
  };

  return (
    <section id="Projects">
      <motion.div
        className="mt-4 py-4 w-4/5 mx-auto"
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <HText header="Portfolio" subHeader="My Diverse Range of Work" />
        {/* Chips Area */}
        <div className="flex items-center justify-center">
          <Chips
            title="All"
            active={selectedChip === "All"}
            onClick={() => handleChipClick("All")}
          />
          <Chips
            title="Web"
            active={selectedChip === "Web"}
            onClick={() => handleChipClick("Web")}
          />
          <Chips
            title="Machine Learning"
            active={selectedChip === "Machine Learning"}
            onClick={() => handleChipClick("Machine Learning")}
          />
        </div>
        {/* Chips Area end*/}

        {/* Project Card Area */}
        <div className="grid ms:grid-cols-3 xm:grid-cols-2 grid-cols-1 mt-4 gap-4">
          {projectItemData.map((value, index) => (
            <ProjectCard
              key={index}
              id={value.id}
              title={value.title}
              projectImg={value.projectImg}
              demoLink={value.demoLink}
              codeLink={value.codeLink}
              details={value.details}
              category={value.category}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
