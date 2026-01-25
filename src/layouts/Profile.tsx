import Card from "@/components/Card";
import HText from "@/components/HText";
import Diploma from "@/assets/diploma.png";
import Education from "@/assets/university.png";
import Me from "@/assets/me.png";
import { motion } from "framer-motion";

type ProfileProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const Profile = ({ setSelectedPage }: ProfileProps) => {
  return (
    <section id="About" className="bg-white">
      <motion.div
        className="h-full w-4/5 mx-auto flex items-center flex-col"
        onViewportEnter={() => setSelectedPage("about")}
      >
        <HText header="About Me" subHeader="Get To Know More" />
        <div className="flex justify-center items-center gap-8 md:flex-row flex-col">
          <div className="basis-1/3 pb-0">
            <img
              src={Me}
              alt="AI & engineering illustration"
              className="w-96 h-auto"
            />
          </div>

          <div className="basis-2/3">
            <div className="flex justify-center flex-col">
              <div className="flex flex-wrap gap-4 sm:flex-row flex-col">
                <Card
                  icon={Diploma}
                  header="Experience"
                  subHeader="5+ Years"
                  title="Full-Stack Engineer (AI/ML)"
                />
                <Card
                  icon={Education}
                  header="Education"
                  subHeader="M.S. in Biomedical Informatics — Stony Brook University"
                  title="B.Sc. in Computer Science & Engineering — BRAC University"
                />
              </div>

              <div>
                <p className="text-primary-200 text-lg md:text-xl text-justify mt-8">
                  Full-Stack Software Engineer specializing in AI/ML integration
                  and business process automation with 5+ years developing
                  production applications across healthcare, real estate, and
                  enterprise sectors. Completed MSc in Biomedical Informatics at
                  Stony Brook University with hands-on research experience in
                  transformer models (Stable Diffusion, BERT) and computer
                  vision application. Expert in Next JS, React JS, Django,
                  Python, JavaScript/typescript, AWS cloud architecture, agentic
                  AI workflows (N8N/LangChain), RAG, LLMs and modern ML
                  frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
