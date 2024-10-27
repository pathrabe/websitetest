// src/components/Header.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { navLinks, personalInfo } from "../data/data";

const HeaderContainer = styled.header`
  width: 100%;

  .logo {
    font-size: 24px;
    color: ${theme.colors.green};
    font-weight: bold;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .nav-links {
    margin-top: 50px;
    width: 100%;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 20px 0;

        a {
          color: ${theme.colors.lightestSlate};
          font-size: 16px;
          text-decoration: none;
          padding: 5px;
          transition: ${theme.transition};
          cursor: pointer;

          &.active {
            color: ${theme.colors.green};
            font-weight: bold;
          }

          &:hover {
            color: ${theme.colors.green};
            text-decoration: underline;
          }
        }
      }
    }

    .resume-button {
      display: block;
      margin-top: 40px;
      color: ${theme.colors.green};
      border: 1px solid ${theme.colors.green};
      border-radius: ${theme.borderRadius};
      padding: 0.75rem 1rem;
      font-size: 13px;
      font-family: ${theme.fonts.mono};
      text-decoration: none;
      cursor: pointer;
      transition: ${theme.transition};

      &:hover,
      &:focus {
        background-color: ${theme.colors.greenTint};
      }
    }
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  console.log("activeSection", activeSection);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px -100px 0px", // This will add some margin to trigger earlier
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
    console.log(sections);
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
                      element.getBoundingClientRect().top + window.scrollY - 50; // Adjust as needed
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
          Download Résumé
        </a>
      </div>
    </HeaderContainer>
  );
};

export default Header;
