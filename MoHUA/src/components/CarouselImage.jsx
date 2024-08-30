import React, { useState, useEffect } from "react";

// Import local images
import image1 from "../assets/carousel_images/1Backdrop.jpg";
import image2 from "../assets/carousel_images/2juGajmc1gOVBUtt5.jpeg";
import image3 from "../assets/carousel_images/3Poster-23-4-hindi.jpg";
import image4 from "../assets/carousel_images/4Poster-23-2-eglish.jpg";
import image5 from "../assets/carousel_images/5Banner-Dashboard-for-Cities.jpeg";
import image6 from "../assets/carousel_images/6landing_page.jpg";
import image7 from "../assets/carousel_images/7PMAY-U-Banner.jpg";
import image8 from "../assets/carousel_images/8Swachh_vaarta_Eng_Landing_pge_banner.jpeg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const CarouselImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-navigation using useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div style={styles.carouselContainer}>
      <button
        style={{ ...styles.arrow, ...styles.prevArrow }}
        onClick={handlePrevClick}
      >
        &#9664;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Carousel ${currentIndex}`}
        style={styles.carouselImage}
      />
      <button
        style={{ ...styles.arrow, ...styles.nextArrow }}
        onClick={handleNextClick}
      >
        &#9654;
      </button>
    </div>
  );
};

const styles = {
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%", // Full width
    height: "500px", // Increased height to better fit images
    overflow: "hidden",
    margin: "auto",
    backgroundColor: "#f0f0f0",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain", // Ensures the entire image fits within the container without being cut off
  },
  arrow: {
    background: "none",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
    padding: "10px",
    color: "#007bff",
    outline: "none",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
  },
  prevArrow: {
    left: "0", // Position arrow at the left edge
  },
  nextArrow: {
    right: "0", // Position arrow at the right edge
  },
};

export default CarouselImage;
