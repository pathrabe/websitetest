// src/App.js
import React from "react";
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
    width: 100%;
    position: static;
    height: auto;
    padding: 10px;
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
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <LeftColumn>
          <Header />
          <Footer />
        </LeftColumn>
        <RightColumn>
          <Home />
        </RightColumn>
      </AppContainer>
    </Router>
  );
}

export default App;
