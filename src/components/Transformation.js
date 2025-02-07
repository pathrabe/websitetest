// import { useState, useEffect } from "react";

// export const TransformationList = ({ transformations = [] }) => {
//   // Ensure `transformations` is always an array
//   if (!Array.isArray(transformations)) {
//     console.error("Expected transformations to be an array, but got:", transformations);
//     return null; // Return nothing if invalid data
//   }

//   // Image array for slideshow
//   const images = [
//     `${process.env.PUBLIC_URL}/profile1.jpeg`,
//     `${process.env.PUBLIC_URL}/profile2.jpeg`,
//     `${process.env.PUBLIC_URL}/profile3.jpeg`,
//     `${process.env.PUBLIC_URL}/profile.jpg`,
//   ];

//   // Slideshow state
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Next slide function
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // Previous slide function
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div>
//       {transformations.length > 0 ? (
//         transformations.map(({ id, title, description }) => (
//           <div key={id} className="transformation-item">
//             {/* Slideshow */}
//             <div className="slideshow-container">
//               <button className="prev" onClick={prevSlide}>❮</button>
//               <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
//               <button className="next" onClick={nextSlide}>❯</button>
//             </div>

//             {/* Transformation Details */}
//             <div className="transformation-title">{title}</div>
//             <div className="transformation-description">{description}</div>
//           </div>
//         ))
//       ) : (
//         <p>No transformations available.</p>
//       )}
//     </div>
//   );
// };

// export default TransformationList;