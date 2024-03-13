import ExpertiseCard from "@/components/ExpertiseCard";
import HText from "@/components/HText";
import { webSkills, machineLearningSkills } from "@/Data/data";
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
        <div className="flex justify-center items-center gap-8 w-full ms:flex-row flex-col">
          <ExpertiseCard header="Web Development" skills={webSkills} />
          <ExpertiseCard
            header="Machine Learning"
            skills={machineLearningSkills}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Expertise;
