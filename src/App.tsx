import HeroSection from "@/layouts/HeroSection";
import Profile from "@/layouts/Profile";
import Expertise from "@/layouts/Expertise";
import Portfolio from "@/layouts/Portfolio";
import { projectData } from "@/Data/data";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const [projectItem, setProjectItem] = useState(projectData);
  const { scrollYProgress } = useScroll();
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
      <HeroSection />
      <Profile />
      <Expertise />
      <Portfolio
        projectItemData={projectItem}
        filterProjectItem={filterProjectItem}
        setProjectItem={setProjectItem}
      />
    </>
  );
}

export default App;
