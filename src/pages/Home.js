// src/pages/Home.js
import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const MainContainer = styled.main`
  /* Main container styles */
  padding: 100px 20px;
`;

const Home = () => (
  <MainContainer>
    <About />
    <Experience />
    <Projects />
    <Contact />
  </MainContainer>
);

export default Home;
