// src/components/About.js
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { personalInfo, skills } from "../data/data";

const AboutSection = styled.section`
  max-width: 1200px; // Increased by 10%
  margin: 150px auto 0;
  padding: 0 20px;

  .content-wrapper {
    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .profile-picture {
      flex: 1;
      img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
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

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 40px;

    span {
      background-color: ${theme.colors.lightNavy};
      color: ${theme.colors.lightestSlate};
      padding: 10px 15px;
      border-radius: ${theme.borderRadius};
      font-size: 14px;
      font-family: ${theme.fonts.mono};
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <div className="content-wrapper">
        <div className="profile-picture">
          <img src="/profile.jpg" alt="Dibyajyoti Pradhan" />
        </div>
        <div className="text-content">
          <h1>Hi, I'm {personalInfo.name}.</h1>
          <h2>{personalInfo.description}</h2>
          <p dangerouslySetInnerHTML={{ __html: personalInfo.about }} />
        </div>
      </div>
      <div className="skills">
        {skills.map((skill, idx) => (
          <span key={idx}>{skill}</span>
        ))}
      </div>
    </AboutSection>
  );
};

export default About;
