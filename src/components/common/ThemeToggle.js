// src/components/common/ThemeToggle.js

import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .toggle-label {
    flex: 1;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.slate};
    border-radius: 34px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0.4s;

    &::before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 3px;
      background-color: ${({ theme }) => theme.colors.background};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  input:checked + .slider::before {
    transform: translateX(24px);
  }
`;

const IconToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 24px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ThemeToggle = ({ variant }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    toggleTheme();
  };

  if (variant === "icon") {
    return (
      <IconToggleButton onClick={handleToggle} aria-label="Toggle theme">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </IconToggleButton>
    );
  } else {
    // default to full toggle with label
    return (
      <ToggleContainer aria-label="Toggle theme">
        <span className="toggle-label">Dark Mode</span>
        <ToggleSwitch>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
            aria-label="Toggle theme"
          />
          <span className="slider"></span>
        </ToggleSwitch>
      </ToggleContainer>
    );
  }
};

export default ThemeToggle;
