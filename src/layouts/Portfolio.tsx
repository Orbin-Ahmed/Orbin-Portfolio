import { Project } from "@/Data/data";
import Chips from "@/components/Chips";
import HText from "@/components/HText";
import ProjectCard from "@/components/ProjectCard";
import { useMemo } from "react";
import { motion } from "framer-motion";

type Props = {
  projectItemData: Project[];
  allProjects: Project[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const Portfolio = ({
  projectItemData,
  allProjects,
  selectedCategory,
  onSelectCategory,
  setSelectedPage,
}: Props) => {
  const categories = useMemo(() => {
    const categorySet = new Set<string>();

    allProjects.forEach((project) => {
      const categories = Array.isArray(project.category)
        ? project.category
        : [project.category];

      categories.forEach((cat) => {
        // Store the original category name (not normalized)
        categorySet.add(cat.trim());
      });
    });

    const sortedCategories = Array.from(categorySet).sort();

    return ["All", ...sortedCategories];
  }, [allProjects]);

  return (
    <section id="Projects">
      <motion.div
        className="mt-4 py-4 w-4/5 mx-auto"
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <HText header="Portfolio" subHeader="Selected Work & Experiments" />

        {/* Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
          {categories.map((category) => (
            <Chips
              key={category}
              title={category}
              active={selectedCategory === category}
              onClick={() => {
                onSelectCategory(category);
              }}
            />
          ))}
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projectItemData.length > 0 ? (
            projectItemData.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                projectImg={project.projectImg}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                details={project.details}
                category={project.category}
                stack={project.stack}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-primary-200">
                No projects found for "{selectedCategory}" category.
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
