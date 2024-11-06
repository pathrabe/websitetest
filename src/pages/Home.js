// src/pages/Home.js

import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ThemeToggle from "../components/common/ThemeToggle";

const MainContainer = styled.main`
  padding: 100px 20px;
  position: relative; /* Added for positioning */
  .theme-toggle-mobile {
    display: none; /* Hide by default */

    @media (max-width: 768px) {
      display: block; /* Show in mobile view */
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
`;

const Home = () => (
  <MainContainer>
    <div className="theme-toggle-mobile">
      <ThemeToggle />
    </div>
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Achievements />
    <Education />
    <Contact />
  </MainContainer>
);

export default Home;
