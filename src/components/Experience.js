import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { experiences } from "../data/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const ExperienceSection = styled.section`
  max-width: 1200px; // Increased width for better content fit
  margin: 150px auto;
  padding: 0 20px; // Ensure consistent padding on left and right

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
    color: ${theme.colors.lightestSlate};
    text-align: center;
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0; // Remove any padding that may impact alignment
`;

const ExperienceItem = styled.div`
  background-color: ${theme.colors.lightNavy};
  border-radius: 10px;
  padding: 30px; // Even padding on all sides
  transition: ${theme.transition};
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px -20px ${theme.colors.darkNavy};
  }

  .left-column {
    font-size: 16px;
    color: ${theme.colors.slate};
    text-transform: uppercase;
    font-weight: bold;
  }

  .right-column {
    .title-company {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      .job-title {
        font-size: 22px;
        color: ${theme.colors.lightestSlate};
        font-weight: bold;
      }

      .company {
        font-size: 18px;
        color: ${theme.colors.green};
        display: flex;
        align-items: center;

        a {
          color: inherit;
          text-decoration: none;

          &:hover,
          &:focus {
            text-decoration: underline;
          }
        }

        .external-link {
          margin-left: 5px;
          font-size: 14px;
          color: ${theme.colors.green};
        }
      }
    }

    .responsibilities {
      color: ${theme.colors.lightSlate};
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;

      p {
        margin-bottom: 10px;
        max-width: 800px;
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;

      span {
        background-color: ${theme.colors.darkNavy};
        color: ${theme.colors.lightestSlate};
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-family: ${theme.fonts.mono};
      }
    }
  }
`;

const Experience = () => (
  <ExperienceSection id="experience">
    <h2>Where I've Worked</h2>
    <ExperienceList>
      {experiences.map(
        ({ id, position, company, url, date, responsibilities, techStack }) => (
          <ExperienceItem key={id}>
            <div className="left-column">{date}</div>
            <div className="right-column">
              <div className="title-company">
                <div className="job-title">{position}</div>
                <div className="company">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {company}
                  </a>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className="responsibilities">
                {responsibilities.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
              <div className="tech-stack">
                {techStack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          </ExperienceItem>
        )
      )}
    </ExperienceList>
  </ExperienceSection>
);

export default Experience;
