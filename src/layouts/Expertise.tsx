import ExpertiseCard from "@/components/ExpertiseCard";
import HText from "@/components/HText";
import {
  fullStackSkills,
  aiLlmsSkills,
  cloudDevOpsSkills,
  dataDbSkills,
} from "@/Data/data";
import { motion } from "framer-motion";

type ExpertiseProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

function Expertise({ setSelectedPage }: ExpertiseProps) {
  return (
    <section id="Experience">
      <motion.div
        className="flex items-center flex-col py-12 w-4/5 mx-auto"
        onViewportEnter={() => setSelectedPage("experience")}
      >
        <HText header="Expertise" subHeader="Ready to Help With" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full mt-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <ExpertiseCard
              header="Full-Stack"
              subHeader="React • Next.js • Django/FastAPI"
              skills={fullStackSkills}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <ExpertiseCard
              header="AI/ML & LLMs"
              subHeader="PyTorch • Transformers • RAG"
              skills={aiLlmsSkills}
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
              subHeader="AWS • Docker • Terraform • CI/CD"
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
              header="Data & Databases"
              subHeader="PostgreSQL • SQL • Vector DBs"
              skills={dataDbSkills}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Expertise;
