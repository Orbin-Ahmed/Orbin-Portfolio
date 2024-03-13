import HeroSection from "@/layouts/HeroSection";
import Profile from "@/layouts/Profile";
import Expertise from "@/layouts/Expertise";
import Portfolio from "@/layouts/Portfolio";
import { projectData } from "@/Data/data";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/layouts/Contact";
import Footer from "./layouts/Footer";
import Navbar from "@/components/Navbar";

function App() {
  const [projectItem, setProjectItem] = useState(projectData);
  const { scrollYProgress } = useScroll();
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const filterProjectItem = (category: string) => {
    const newProjectItem = projectData.filter(
      (newValue) => newValue.category === category
    );
    setProjectItem(newProjectItem);
  };

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <HeroSection setSelectedPage={setSelectedPage} />
      <Profile setSelectedPage={setSelectedPage} />
      <Expertise setSelectedPage={setSelectedPage} />
      <Portfolio
        projectItemData={projectItem}
        filterProjectItem={filterProjectItem}
        setProjectItem={setProjectItem}
        setSelectedPage={setSelectedPage}
      />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </>
  );
}

export default App;
