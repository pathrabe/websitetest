import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { projects } from "../data/data";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = styled.section`
  max-width: 1100px;
  margin: 100px auto;
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
  background: rgba(17, 34, 64, 0.6);
  border-radius: ${theme.borderRadius};
  padding: 20px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 255, 255, 0.2);
    background: rgba(17, 34, 64, 0.8);
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .project-links {
      a {
        color: ${theme.colors.lightestSlate};
        margin-left: 15px;
        font-size: 20px;
        transition: ${theme.transition};

        &:hover,
        &:focus {
          color: ${theme.colors.green};
        }
      }
    }
  }

  .project-title {
    font-size: 24px;
    margin: 20px 0;
    color: ${theme.colors.lightestSlate};
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
      background-color: rgba(2, 12, 27, 0.7);
      color: ${theme.colors.lightestSlate};
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 14px;
      font-family: ${theme.fonts.mono};
      transition: background-color 0.3s ease, transform 0.3s ease;
      outline: none;
      tabindex: 0;

      &:hover,
      &:focus {
        background-color: ${theme.colors.greenTint};
        transform: translateY(-3px);
    }
  }
`;

const ShowMoreButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color: ${theme.colors.green};
  background-color: transparent;
  border: 1px solid ${theme.colors.green};
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  transition: ${theme.transition};
  display: block;

  &:hover,
  &:focus {
    background-color: ${theme.colors.greenTint};
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [initialProjectsToShow, setInitialProjectsToShow] = useState(4);

  useEffect(() => {
    const updateProjectsToShow = () => {
      if (window.innerWidth < 768) {
        setInitialProjectsToShow(2); // Show 2 projects on mobile
      } else {
        setInitialProjectsToShow(4); // Show 4 projects on desktop
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
        <ShowMoreButton onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </ShowMoreButton>
      )}
    </ProjectsSection>
  );
};

export default Projects;
