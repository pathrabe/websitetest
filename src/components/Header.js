// src/components/Header.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { navLinks, personalInfo } from "../data/data";
import ThemeToggle from "./common/ThemeToggle";
import { FaFileDownload } from "react-icons/fa";

const HeaderContainer = styled.header`
  width: 100%;
  /* Removed background-color as it's now set in GlobalStyle.js */

  .logo {
    margin-top: 50px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .nav-links {
    margin-top: 50px;
    width: 70%;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 20px 0;

        a {
          color: ${({ theme }) => theme.colors.text};
          font-size: ${({ theme }) => theme.fontSizes.base};
          text-decoration: none;
          padding: 5px;
          transition: ${({ theme }) => theme.transition};
          cursor: pointer;

          &.active {
            color: ${({ theme }) => theme.colors.primary};
            font-weight: bold;
          }

          &:hover {
            color: ${({ theme }) => theme.colors.primary};
            text-decoration: underline;
          }
        }
      }
    }

    .resume-button {
      display: block;
      margin-top: 40px;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 0.75rem 1.25rem;
      font-size: ${({ theme }) => theme.fontSizes.sm};
      font-family: ${({ theme }) => theme.fonts.mono};
      text-decoration: none;
      cursor: pointer;
      align-items: center;
      transition: ${({ theme }) => theme.transition};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.greenTint};
      }
    }
  }

  .theme-toggle {
    margin-top: 40px;

    @media (max-width: 768px) {
      margin-top: 0px;
      display: none; /* Hide toggle in mobile view */
    }
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <HeaderContainer>
      <div className="logo">
        <a href="/">{personalInfo.name}</a>
      </div>
      <div className="nav-links">
        <ul>
          {navLinks.map(({ id, name, url }) => (
            <li key={id}>
              <a
                href={url}
                className={activeSection === url.substring(1) ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(url.substring(1));
                  if (element) {
                    const offsetPosition =
                      element.getBoundingClientRect().top + window.scrollY - 50;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="resume-button"
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload /> Download Brochure
        </a>
      </div>
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
    </HeaderContainer>
  );
};

export default Header;
