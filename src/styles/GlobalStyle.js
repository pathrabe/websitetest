// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  strong {
    text-decoration: underline;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(
      135deg,
      ${theme.colors.lightNavy} 0%,
      ${theme.colors.darkNavy} 33.3%,
      ${theme.colors.lightNavy} 66.6%,
      ${theme.colors.darkNavy} 100%
    );
    color: ${theme.colors.slate};
    font-family: ${theme.fonts.main};
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden;
  }

  a {
    color: ${theme.colors.green};
    text-decoration: none;
    transition: ${theme.transition};

    &:hover,
    &:focus {
      color: ${theme.colors.lightGreen};
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.lightestSlate};
    margin: 0 0 10px 0;
    font-weight: 600;
    line-height: 1.1;
  }

  p {
    margin: 0 0 15px 0;
    max-width: 600px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
    font-family: ${theme.fonts.main};

    &:focus,
    &:active {
      outline: none;
    }
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  section {
    min-height: 300px; /* Adjust as necessary to ensure visibility */
  }
`;

export default GlobalStyle;
