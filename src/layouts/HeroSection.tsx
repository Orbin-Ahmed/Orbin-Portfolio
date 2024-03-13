import myImage from "@/assets/Acanto_image.png";
import Button from "@/components/Button";
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type HeroSectionProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const HeroSection = ({ setSelectedPage }: HeroSectionProps) => {
  return (
    <section>
      {/* Image and Intro section */}
      <motion.div
        className="flex flex-col justify-center items-center h-screen w-full gap-8 md:mt-8 sm:mt-0 sm:flex-row"
        onViewportEnter={() => setSelectedPage("")}
      >
        {/* Image */}
        <div>
          <img src={myImage} className="w-auto h-52 md:h-80" />
        </div>
        {/* Intro Content */}
        <div className="text-center">
          <p className="text-primary-200 text-base md:text-lg mb-4">
            Hello, I'm
          </p>
          <p className="text-primary-100 text-2xl md:text-3xl font-bold mb-4">
            Orbin Ahmed Acanto
          </p>
          <p className="text-primary-200 text-xl font-bold md:text-2xl mb-4">
            Software Engineer
          </p>
          <Button
            text="Download CV"
            className="bg-button-secondary hover:bg-button-primary"
          />
          <Button
            text="Contact Me"
            className="bg-button-primary hover:bg-button-primary-hover border-button-primary"
          />
          <div className="flex justify-center items-center mr-[-1rem]">
            <Link to="https://github.com/Orbin-ahmed" target="_blank">
              <img src={github} alt="GitHub" className="w-10 h-10 m-2 mt-0" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/orbin-ahmed-acanto/"
              target="_blank"
            >
              <img
                src={linkedin}
                alt="Linkedin"
                className="w-10 h-10 m-2 mt-0"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
