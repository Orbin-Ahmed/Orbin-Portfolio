import Card from "@/components/Card";
import HText from "@/components/HText";
import Diploma from "@/assets/diploma.png";
import Education from "@/assets/university.png";
import Brain from "@/assets/Brain.png";
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
          <div className="basis-1/3 md:py-10 pb-0">
            <img src={Brain} alt="" className="w-96 h-auto" />
          </div>
          {/* content area */}
          <div className="basis-2/3">
            <div className="flex justify-center flex-col">
              <div className="flex flex-wrap gap-4 sm:flex-row flex-col">
                <Card
                  icon={Diploma}
                  header="Experience"
                  subHeader="2+ Years"
                  title="Software Engineer"
                />
                <Card
                  icon={Education}
                  header="Education"
                  subHeader="Computer Science & Engineering"
                  title="B.Sc. in Computer Science & Engineering"
                />
              </div>
              <div>
                <p className="text-primary-200 text-sm md:text-base text-justify mt-8">
                  I am a software engineer with expertise in web development,
                  machine learning, and computer vision. With a Bachelor's
                  degree in Computer Science & Engineering and over 2 years of
                  experience, I specialize in creating efficient web
                  applications using React and Django. I also have skills in AWS
                  server management, ensuring smooth deployment and operation of
                  applications. My passion for learning drives me to
                  continuously expand my knowledge and deliver high-quality
                  solutions to meet and exceed client expectations.
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
