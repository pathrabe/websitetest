// src/components/Projects.js
import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { projects } from "../data/data";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const ProjectsSection = styled.section`
  max-width: 1200px;
  margin: 150px auto;
  padding: 0 20px;

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
    color: ${theme.colors.lightestSlate};
    text-align: center;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 50px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
  }
`;

const ProjectCard = styled.div`
  background-color: ${theme.colors.lightNavy};
  border-radius: ${theme.borderRadius};
  padding: 20px;
  transition: ${theme.transition};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px ${theme.colors.black};

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.colors.green};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .star-rating {
      display: flex;
      align-items: center;
      color: ${theme.colors.green};
      font-size: 14px;

      svg {
        margin-right: 5px;
      }
    }

    .project-links {
      a {
        color: ${theme.colors.lightestSlate};
        margin-left: 15px;
        font-size: 20px;
        transition: ${theme.transition};

        &:hover {
          color: ${theme.colors.green};
        }
      }
    }
  }

  .project-title {
    font-size: 24px;
    margin: 20px 0;
    color: ${theme.colors.lightestSlate};

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: ${theme.colors.green};
      }
    }
  }

  .project-description {
    color: ${theme.colors.slate};
    font-size: 16px;
    margin-bottom: 20px;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    span {
      background-color: ${theme.colors.navy};
      color: ${theme.colors.lightestSlate};
      padding: 5px 10px;
      border-radius: ${theme.borderRadius};
      font-size: 14px;
      font-family: ${theme.fonts.mono};
    }
  }
`;

const Projects = () => (
  <ProjectsSection id="projects">
    <h2>Projects</h2>
    <ProjectsGrid>
      {projects.map(
        ({ id, title, description, techStack, url, external, stars }) => (
          <ProjectCard key={id}>
            <div className="project-top">
              <div className="star-rating">
                <FaStar /> {stars}
              </div>
              <div className="project-links">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Link"
                  >
                    <FaGithub />
                  </a>
                )}
                {external && (
                  <a
                    href={external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External Link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <div className="project-title">
              <a href={external} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </div>
            <div className="project-description">{description}</div>
            <div className="project-tech">
              {techStack.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
          </ProjectCard>
        )
      )}
    </ProjectsGrid>
  </ProjectsSection>
);
export default Projects;
