// src/components/About.js
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { personalInfo } from "../data/data";

const AboutSection = styled.section`
  max-width: 1100px; // Increased by 10%
  margin: 100px auto 0;
  padding: 0 20px;

  .content-wrapper {
    display: flex;
    gap: 50px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .profile-picture {
      flex: 1;
      position: relative;
      overflow: visible; // Allow glow effect to be visible
      cursor: pointer;
      outline: none;

      img {
        width: 350px;
        height: 350px;
        object-fit: cover;
        border-radius: 50%; // Keeps the image a perfect circle
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover,
        &:focus {
          box-shadow: 0 0 30px 10px rgba(100, 255, 218, 0.5);
          transform: translateY(-5px);
        }
      }
    }

    .text-content {
      flex: 2;

      h1 {
        font-size: 48px;
        margin-bottom: 10px;
        color: ${theme.colors.lightestSlate};
      }

      h2 {
        font-size: 32px;
        margin-bottom: 20px;
        color: ${theme.colors.slate};
      }

      p {
        font-size: 18px;
        color: ${theme.colors.slate};
        margin-bottom: 20px;
        a {
          color: ${theme.colors.green};
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <div className="content-wrapper">
        <div className="profile-picture">
          <img
            tabIndex="0"
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt={personalInfo.name}
          />
        </div>
        <div className="text-content" tabIndex="0">
          <h1>Hi 👋, I'm {personalInfo.shortName}.</h1>
          <h2>{personalInfo.description}</h2>
          {personalInfo.about.map((paragraph, idx) => (
            <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
