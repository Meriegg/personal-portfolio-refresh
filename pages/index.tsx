import React from "react";
import SectionManager from "../Components/Sections/SectionManager";
import type { NextPage } from "next";

import HelloSection from "../Components/Sections/Hello";
import AboutSection from "../Components/Sections/About";
import Projects from "../Components/Sections/Projects";
import Contact from "../Components/Sections/Contact";

const Home: NextPage = () => {
  return (
    <>
      <SectionManager />
      <HelloSection />
      <AboutSection />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
