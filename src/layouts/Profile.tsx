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
    <section id="About">
      <motion.div
        className="h-full w-4/5 mx-auto flex items-center flex-col"
        onViewportEnter={() => setSelectedPage("about")}
      >
        <HText header="About Me" subHeader="Get To Know More" />
        <div className="flex justify-center items-center gap-8 md:flex-row flex-col">
          {/* illustration area */}
          <div className="basis-1/3 pb-0">
            <img
              src={Me}
              alt="AI & engineering illustration"
              className="w-96 h-auto"
            />
          </div>

          {/* content area */}
          <div className="basis-2/3">
            <div className="flex justify-center flex-col">
              <div className="flex flex-wrap gap-4 sm:flex-row flex-col">
                <Card
                  icon={Diploma}
                  header="Experience"
                  subHeader="3+ Years"
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
                <p className="text-primary-200 text-sm md:text-base text-justify mt-8">
                  I’m Orbin Ahmed Acanto, a full-stack software engineer
                  (Python/TypeScript) specializing in AI/ML integration and
                  workflow automation. I build modern web apps with
                  React/Next.js, Django/DRF &amp; FastAPI, and ship to AWS (EC2,
                  S3, RDS, CloudFront, ECS) using Docker, Terraform, PostgreSQL,
                  and CI/CD.
                  <br />
                  <br />
                  Recent work includes a clinical knowledge RAG and benchmarking
                  at Memorial Sloan Kettering, DNABERT and pathology pipelines
                  at Stony Brook University, an AI-powered 3D design system and
                  business automations at Ideal Home UAE, and production
                  React/Django platforms at Increments Inc. I care about clean,
                  maintainable code, measurable impact, and delightful developer
                  experience.
                </p>
              </div>
            </div>
          </div>
          {/* content area end */}
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
