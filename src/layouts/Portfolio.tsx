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
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
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
      categories.forEach((cat) => categorySet.add(cat.trim()));
    });
    return ["All", ...Array.from(categorySet).sort()];
  }, [allProjects]);

  const featuredProjects = projectItemData.filter((p) => p.featured);
  const regularProjects = projectItemData.filter((p) => !p.featured);

  return (
    <section id="Projects" className="bg-white">
      <motion.div
        className="py-8 w-4/5 mx-auto"
        onViewportEnter={() => setSelectedPage("projects")}
      >
        <HText header="Portfolio" subHeader="Featured Work & Research" />

        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 mb-8">
          {categories.map((category) => (
            <Chips
              key={category}
              title={category}
              active={selectedCategory === category}
              onClick={() => onSelectCategory(category)}
            />
          ))}
        </div>

        {projectItemData.length > 0 ? (
          <>
            {featuredProjects.length > 0 && selectedCategory === "All" && (
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-primary-200 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  Featured Projects
                </h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {featuredProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      {...project}
                      featured={true}
                    />
                  ))}
                </motion.div>
              </div>
            )}

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {(selectedCategory === "All"
                ? regularProjects
                : projectItemData
              ).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </motion.div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-primary-200 text-lg">
              No projects found for "{selectedCategory}" category.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Portfolio;
