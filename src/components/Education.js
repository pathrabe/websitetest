// src/components/Education.js

import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { education } from "../data/data";
import { FaMapMarkerAlt } from "react-icons/fa";

const EducationSection = styled.section`
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

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
`;

const EducationItem = styled.div`
  background: rgba(17, 34, 64, 0.6);
  border-radius: 15px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  tabindex: 0;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: radial-gradient(circle, rgba(100, 255, 218, 0.15), transparent);
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
    transform: scale(0.9);
    filter: blur(30px);
  }

  &:hover,
  &:focus {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 255, 255, 0.2);
    background: rgba(17, 34, 64, 0.8);

    &::before {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  .left-column {
    font-size: 16px;
    color: ${theme.colors.slate};
    text-transform: uppercase;
    font-weight: bold;
  }

  .right-column {
    .title-school {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      .degree {
        font-size: 22px;
        color: ${theme.colors.lightestSlate};
        font-weight: bold;
      }

      .school {
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
      }
    }

    .location {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${theme.colors.slate};
      font-size: 16px;
      margin-bottom: 10px;

      svg {
        font-size: 18px;
      }
    }

    .details {
      color: ${theme.colors.lightSlate};
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;

      p {
        margin-bottom: 10px;
        max-width: 800px;
      }
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

const Education = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const educationToShow = showMore ? education : education.slice(0, 1);

  return (
    <EducationSection id="education">
      <h2>Education</h2>
      <EducationList>
        {educationToShow.map(
          ({ id, school, url, degree, duration, location, major, details }) => (
            <EducationItem
              key={id}
              tabIndex="0"
              onClick={() => {
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  window.open(url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div className="left-column">{duration}</div>
              <div className="right-column">
                <div className="title-school">
                  <div className="school">{school}</div>
                  <div className="degree">{degree}</div>
                </div>
                <div className="location">
                  <FaMapMarkerAlt />
                  <span>{location}</span>
                </div>
                <div className="details">
                  <p>{major}</p>
                  {details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            </EducationItem>
          )
        )}
      </EducationList>
      {education.length > 1 && (
        <ShowMoreButton
          onClick={handleShowMore}
          style={{ transition: "all 0.6s ease" }}
        >
          {showMore ? "Show Less" : "Show More"}
        </ShowMoreButton>
      )}
    </EducationSection>
  );
};

export default Education;
