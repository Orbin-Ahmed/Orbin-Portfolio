import ExpertiseCard from "@/components/ExpertiseCard";
import HText from "@/components/HText";
import {
  fullStackSkills,
  aiMlSkills,
  cloudDevOpsSkills,
  dataToolsSkills,
  automationSkills,
  biomedicalSkills,
} from "@/Data/data";
import { motion } from "framer-motion";

type ExpertiseProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

function Expertise({ setSelectedPage }: ExpertiseProps) {
  return (
    <section id="Expertise" className="bg-white">
      <motion.div
        className="flex items-center flex-col py-12 w-4/5 mx-auto"
        onViewportEnter={() => setSelectedPage("experience")}
      >
        <HText header="Expertise" subHeader="Technical Stack & Capabilities" />

        {/* Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ExpertiseCard
              header="AI & Machine Learning"
              icon="🧠"
              skills={aiMlSkills}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <ExpertiseCard
              header="Full-Stack Development"
              icon="💻"
              skills={fullStackSkills}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ExpertiseCard
              header="Cloud & DevOps"
              icon="☁️"
              skills={cloudDevOpsSkills}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <ExpertiseCard
              header="Automation & Integration"
              icon="⚡"
              skills={automationSkills}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ExpertiseCard
              header="Data & Analytics"
              icon="📊"
              skills={dataToolsSkills}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <ExpertiseCard
              header="Biomedical Informatics"
              icon="🔬"
              skills={biomedicalSkills}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Expertise;
