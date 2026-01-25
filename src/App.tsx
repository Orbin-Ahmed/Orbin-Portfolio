import HeroSection from "@/layouts/HeroSection";
import Profile from "@/layouts/Profile";
import Expertise from "@/layouts/Expertise";
import Portfolio from "@/layouts/Portfolio";
import { projectData, Project } from "@/Data/data";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/layouts/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/layouts/footer";
import Experience from "./layouts/Experience";
import Publications from "./layouts/Publications";

const categoriesMatch = (cat1: string, cat2: string): boolean => {
  return cat1.trim() === cat2.trim();
};

function App() {
  const allProjectsRef = useRef<Project[]>(projectData);

  const { scrollYProgress } = useScroll();
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [renderKey, setRenderKey] = useState<number>(0);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setRenderKey((prev) => prev + 1);
  };

  useEffect(() => {
    const handleScroll = () => setIsTopOfPage(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return allProjectsRef.current;
    }

    const filtered = allProjectsRef.current.filter((project) => {
      const categories = Array.isArray(project.category)
        ? project.category
        : [project.category];

      const hasMatch = categories.some((cat) => {
        const match = categoriesMatch(cat, selectedCategory);
        return match;
      });
      return hasMatch;
    });
    return filtered;
  }, [selectedCategory]);

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
      <Experience setSelectedPage={setSelectedPage} />
      <Expertise setSelectedPage={setSelectedPage} />
      <Publications setSelectedPage={setSelectedPage} />
      <Portfolio
        key={renderKey}
        projectItemData={filteredProjects}
        setSelectedPage={setSelectedPage}
        onSelectCategory={handleCategoryChange}
        allProjects={allProjectsRef.current}
        selectedCategory={selectedCategory}
      />

      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </>
  );
}

export default App;
