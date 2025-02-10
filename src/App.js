// src/App.js

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import styled from "styled-components";
import { ThemeProvider } from "./context/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const LeftColumn = styled.div`
  width: 350px;
  padding: 20px;
  position: fixed;
  height: 100vh;
  /* Ensure background-color uses theme variable */
  background-color: ${({ theme }) => theme.colors.headerBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightColumn = styled.div`
  margin-left: 350px;
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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider>
      {(themeStyles) => (
        <StyledThemeProvider theme={themeStyles}>
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
        </StyledThemeProvider>
      )}
    </ThemeProvider>
  );
}

export default App;
