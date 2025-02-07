// src/components/Projects.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../data/data";
import { FaInstagram } from "react-icons/fa";
import Card from "./common/Card";
import Button from "./common/Button";
import { personalInfo } from "../data/data";

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
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const ProjectCard = styled(Card)`
  padding: 20px;

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .project-title-row {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    }
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
    margin-left: 15px;
    margin-bottom: 5px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
  }

  .project-description {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    margin-bottom: 20px;
  }

  .project-tech {
    flex: 1;
      position: relative;
      overflow: visible;
      cursor: pointer;
      outline: none;

      img {
        width: 230px;
        height: 250px;
        object-fit: cover;
        border-radius: 5%;
        margin-left: 5px;
        margin-bottom: 5px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

        &:hover,
        &:focus {
          box-shadow: 0 0 50px 15px ${({ theme }) => theme.colors.profileGlow};
          transform: translateY(-5px);
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
      <h2>Progressive Growth 🗝️</h2>
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
                <div className="project-title-row">
                  <div className="project-links">
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Link"
                      >
                        <FaInstagram />
                      </a>
                    )}
                  </div>
                  <div className="project-title">
                  {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Link"
                      >
                        {title}
                      </a>
                    )}
                    </div>
                </div>
              </div>
              <div className="project-description">{description}</div>
              <div className="project-tech">
                {techStack.map((tech, idx) => (
                    <span key={idx} tabIndex="0">
                      <img
                            tabIndex="0"
                            src={tech}
                            alt={personalInfo.name}
                            // src={`${process.env.PUBLIC_URL}/profile.jpg`}
                          />
                    </span>
                  ))}

                  {/* <img
                            tabIndex="0"
                            src={techStack[id]}
                            alt={personalInfo.name}
                            // src={`${process.env.PUBLIC_URL}/profile.jpg`}
                          /> */}
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
