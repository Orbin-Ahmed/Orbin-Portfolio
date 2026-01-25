import HText from "@/components/HText";
import ExperienceCard from "@/components/ExperienceCard";
import { experienceData } from "@/Data/data";
import { motion } from "framer-motion";

type ExperienceProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function Experience({ setSelectedPage }: ExperienceProps) {
  return (
    <section id="Experience" className="bg-gray-50">
      <motion.div
        className="py-12 w-4/5 mx-auto"
        onViewportEnter={() => setSelectedPage("experience")}
      >
        <HText header="Experience" subHeader="Professional Journey" />

        <motion.div
          className="relative mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-200/50 to-transparent" />

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id} {...exp} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;
