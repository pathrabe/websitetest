// src/components/Projects.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../data/data";
import { FaGithub } from "react-icons/fa";
import Card from "./common/Card";
import Button from "./common/Button";

const ProjectsSection = styled.section`
  max-width: 1100px;
  margin: 100px auto;
  padding: 0 20px;

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.text};
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

const ProjectCard = styled(Card)`
  padding: 20px;

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .project-links {
      a {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 20px;
        transition: ${({ theme }) => theme.transition};

        &:hover,
        &:focus {
          color: ${({ theme }) => theme.colors.text};
          box-shadow: 0 15px 40px ${({ theme }) => theme.colors.greenTint};
        }
      }
    }
  }

  .project-title {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
  }

  .project-description {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    margin-bottom: 20px;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    span {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.text};
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.mono};
      transition: background-color 0.3s ease, transform 0.3s ease;
      outline: none;
      tabindex: 0;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.greenTint};
        transform: translateY(-3px);
      }
    }
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [initialProjectsToShow, setInitialProjectsToShow] = useState(4);

  useEffect(() => {
    const updateProjectsToShow = () => {
      if (window.innerWidth < 768) {
        setInitialProjectsToShow(2);
      } else {
        setInitialProjectsToShow(4);
      }
    };

    updateProjectsToShow();
    window.addEventListener("resize", updateProjectsToShow);
    return () => window.removeEventListener("resize", updateProjectsToShow);
  }, []);

  const projectsToShow = showMore
    ? projects
    : projects.slice(0, initialProjectsToShow);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <ProjectsSection id="projects">
      <h2>Personal Projects</h2>
      <ProjectsGrid>
        {projectsToShow.map(
          ({ id, title, description, techStack, url, external }) => (
            <ProjectCard
              key={id}
              tabIndex="0"
              onClick={() => {
                window.open(external || url, "_blank", "noopener,noreferrer");
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  window.open(external || url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div className="project-top">
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
                </div>
              </div>
              <div className="project-title">{title}</div>
              <div className="project-description">{description}</div>
              <div className="project-tech">
                {techStack.map((tech, idx) => (
                  <span key={idx} tabIndex="0">
                    {tech}
                  </span>
                ))}
              </div>
            </ProjectCard>
          )
        )}
      </ProjectsGrid>
      {projects.length > initialProjectsToShow && (
        <Button onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </ProjectsSection>
  );
};

export default Projects;
