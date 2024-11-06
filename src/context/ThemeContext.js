// src/context/ThemeContext.js

import React, { createContext, useState, useEffect } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children(themeStyles)}
    </ThemeContext.Provider>
  );
};
