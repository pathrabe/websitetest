// src/components/Achievements.js

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { achievements } from "../data/data";
import Card from "./common/Card";
import Button from "./common/Button";

const AchievementsSection = styled.section`
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

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
`;

const AchievementItem = styled(Card)`
  .achievement-title {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    margin-bottom: 10px;
  }

  .achievement-description {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 1.6;
  }
`;

const TransformCard = styled(Card)`
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


const Achievements = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const achievementsToShow = showMore ? achievements : achievements.slice(0, 2);

  return (
    <AchievementsSection id="achievements">
      <h2>Transformation 🗝️</h2>
      <AchievementsList>
        {achievementsToShow.map(({ id, title, description }) => (
          <AchievementItem key={id} tabIndex="0">
            {/* <div className="slideshow-container">
              <button className="prev" onClick={prevSlide}>❮</button>
              <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
              <button className="next" onClick={nextSlide}>❯</button>
            </div> */}
            <div className="achievement-title">{title}</div>
            <div className="achievement-description">{description}</div>
          </AchievementItem>
        ))}
      </AchievementsList>
      {achievements.length > 2 && (
        <Button onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </AchievementsSection>
  );
};

export default Achievements;
