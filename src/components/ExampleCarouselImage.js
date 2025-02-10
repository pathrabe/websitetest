import React from "react";

const ExampleCarouselImage = ({ text }) => {
  // Map text values to image file paths
  const images = {
    "First slide": `${process.env.PUBLIC_URL}/profile1.jpeg`,
    "Second slide": `${process.env.PUBLIC_URL}/profile2.jpeg`,
    "Third slide": `${process.env.PUBLIC_URL}/profile3.jpeg`,
  };

  return (
    <img
      className="d-block"
      src={images[text]}
      alt={text}
      style={{
        width: "350px", // Adjust width
        height: "400px", // Maintain aspect ratio
        margin: "0 auto", // Center the image
        display: "block", // Proper alignment
        borderRadius: "10px", // Optional styling
      }}
      onError={(e) => console.error("Image failed to load:", e.target.src)}
    />
  );
};

export default ExampleCarouselImage;
