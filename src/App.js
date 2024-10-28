// src/App.js;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import styled from "styled-components";
import theme from "./styles/theme";

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;

const LeftColumn = styled.div`
  width: 350px;
  padding: 20px;
  position: fixed;
  height: 100vh;
  background-color: ${theme.colors.darkNavy};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none; /* Hide the sidebar on mobile */
  }
`;

const RightColumn = styled.div`
  margin-left: 300px;
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 10px;
  }
`;

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        {!isMobile && (
          <LeftColumn>
            <Header />
            <Footer />
          </LeftColumn>
        )}
        <RightColumn>
          <Home />
        </RightColumn>
      </AppContainer>
    </Router>
  );
}

export default App;
