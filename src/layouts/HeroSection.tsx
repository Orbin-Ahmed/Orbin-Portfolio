import myImage from "@/assets/Acanto_image.png";
import Button from "@/components/Button";
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CV from "@/assets/Orbin Ahmed Acanto(CV).pdf";

type HeroSectionProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

const HeroSection = ({ setSelectedPage }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <motion.div
        className="relative mx-auto flex min-h-[90vh] w-full max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:gap-14"
        onViewportEnter={() => setSelectedPage("")}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full" />
            <img
              src={myImage}
              alt="Orbin Ahmed Acanto"
              className="relative h-56 w-56 rounded-full object-cover shadow-lg md:h-80 md:w-80"
            />
          </div>
        </motion.div>

        <div className="w-full text-center md:text-left">
          <p className="text-primary-200 text-sm md:text-base">Hello, I'm</p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-primary-100 md:text-5xl">
            Orbin Ahmed Acanto
          </h1>

          <p className="mt-3 text-base font-semibold text-primary-200 md:text-lg">
            Full-Stack Developer • AI Engineer • Biomedical Informatics
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-primary-200 md:mx-0 md:text-base md:leading-7">
            I build modern web applications and AI-powered systems with clean
            UI, scalable architecture, and production-ready engineering.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:items-start md:justify-start justify-center">
            <a target="_blank" rel="noreferrer" href={CV}>
              <Button
                text="View CV"
                className="w-full sm:w-auto bg-button-primary hover:bg-button-primary transition-colors rounded-xl"
              />
            </a>

            <a href="#Contact">
              <Button
                text="Contact Me"
                className="w-full sm:w-auto bg-button-secondary hover:bg-button-primary-hover  transition-colors rounded-xl"
              />
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 md:justify-start md:ml-4">
            <Link
              to="https://github.com/Orbin-Ahmed"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-2 shadow-sm transition hover:bg-white/10"
              aria-label="GitHub"
            >
              <img
                src={github}
                alt="GitHub"
                className="h-8 w-8 opacity-90 transition group-hover:opacity-100"
              />
            </Link>

            <Link
              to="https://www.linkedin.com/in/orbin-ahmed-acanto/"
              target="_blank"
              className="group rounded-xl border border-white/10 bg-white/5 p-2 shadow-sm transition hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-8 w-8 opacity-90 transition group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
