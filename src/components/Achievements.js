// src/components/Achievements.js

import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { achievements } from "../data/data";

const AchievementsSection = styled.section`
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

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
`;

const AchievementItem = styled.div`
  background: rgba(17, 34, 64, 0.6); // Semi-transparent dark navy
  border-radius: 15px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;

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
    background: rgba(17, 34, 64, 0.8); // Slightly more opaque on hover

    &::before {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  .achievement-title {
    font-size: 22px;
    color: ${theme.colors.lightestSlate};
    font-weight: bold;
    margin-bottom: 10px;
  }

  .achievement-description {
    color: ${theme.colors.lightSlate};
    font-size: 16px;
    line-height: 1.6;
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

const Achievements = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const achievementsToShow = showMore ? achievements : achievements.slice(0, 2);

  return (
    <AchievementsSection id="achievements">
      <h2>Achievements</h2>
      <AchievementsList>
        {achievementsToShow.map(({ id, title, description }) => (
          <AchievementItem
            key={id}
            tabIndex="0"
            style={{ transition: "all 0.6s ease" }}
          >
            <div className="achievement-title">{title}</div>
            <div className="achievement-description">{description}</div>
          </AchievementItem>
        ))}
      </AchievementsList>
      {achievements.length > 2 && (
        <ShowMoreButton
          onClick={handleShowMore}
          style={{ transition: "all 0.6s ease" }}
        >
          {showMore ? "Show Less" : "Show More"}
        </ShowMoreButton>
      )}
    </AchievementsSection>
  );
};

export default Achievements;
