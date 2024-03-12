import HeroSection from "@/layouts/HeroSection";
import Profile from "@/layouts/Profile";
import Expertise from "@/layouts/Expertise";
import Portfolio from "@/layouts/Portfolio";
import { projectData } from "@/Data/data";
import { useState } from "react";

function App() {
  const [projectItem, setProjectItem] = useState(projectData);

  const filterProjectItem = (category: string) => {
    const newProjectItem = projectData.filter(
      (newValue) => newValue.category === category
    );
    setProjectItem(newProjectItem);
  };
  return (
    <>
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
