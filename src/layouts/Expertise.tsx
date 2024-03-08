import ExpertiseCard from "@/components/ExpertiseCard";
import HText from "@/components/HText";
import { webSkills, machineLearningSkills } from "@/Data/data";

type ExpertiseProps = {};

function Expertise({}: ExpertiseProps) {
  return (
    <section>
      <div className="flex items-center flex-col h-full mt-4 w-4/5 mx-auto">
        <HText header="Expertise" subHeader="Ready to Help With" />
        <div className="flex justify-center items-center gap-8 w-full ms:flex-row flex-col">
          <ExpertiseCard header="Web Development" skills={webSkills} />
          <ExpertiseCard
            header="Machine Learning"
            skills={machineLearningSkills}
          />
        </div>
      </div>
    </section>
  );
}

export default Expertise;
