// src/components/About.js

import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { personalInfo, skills } from "../data/data";

const AboutSection = styled.section`
  max-width: 1100px; // Increased by 10%
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
    margin-top: 40px;

    .skill-category {
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;
      h3 {
        font-size: 20px;
        color: ${theme.colors.lightestSlate};
        ${"" /* margin-bottom: 10px; */}
        font-weight: bold;
        ${"" /* border-bottom: 2px solid ${theme.colors.slate}; */}

        display: flex;
        flex-direction: row;
        flex: 0.2;
        text-align: center;
        align-items: center;
      }

      .skill-items {
        display: flex;
        flex-direction: row;
        flex: 0.8;
        flex-wrap: wrap;
        gap: 15px;

        span {
          background-color: ${theme.colors.lightNavy};
          color: ${theme.colors.lightestSlate};
          padding: 10px 15px;
          border-radius: ${theme.borderRadius};
          font-size: 14px;
          font-family: ${theme.fonts.mono};
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
          <img src="/profile.jpg" alt="Dibyajyoti Pradhan" />
        </div>
        <div className="text-content">
          <h1>Hi, I'm {personalInfo.name}.</h1>
          <h2>{personalInfo.description}</h2>
          <p dangerouslySetInnerHTML={{ __html: personalInfo.about }} />
        </div>
      </div>
      <div className="skills">
        {skills.map((skillGroup, idx) => (
          <div className="skill-category" key={idx}>
            <h3>{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, skillIdx) => (
                <span key={skillIdx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AboutSection>
  );
};

export default About;
