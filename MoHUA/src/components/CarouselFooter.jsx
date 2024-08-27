import React, { useState } from "react";

const CarouselFooter = () => {
  const images = [
    "../assets/cea.png",
    "../assets/digitalindia_0.png",
    "../assets/eesl.png",
    "../assets/minofpower_3.png",
    "../assets/mnre_0.png",
    "../assets/mohua.png",
    "../assets/mygov_7.png",
    "../assets/natportal_0.png",
    "../assets/nhpc_0.png",
    "../assets/ntpc_0.png",
    "../assets/pfcl.png",
    "../assets/powergrid_1.png",
    "../assets/recl.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={styles.carouselFooter}>
      <button style={styles.arrow} onClick={handlePrevClick}>
        &#9664;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Carousel ${currentIndex}`}
        style={styles.carouselImage}
      />
      <button style={styles.arrow} onClick={handleNextClick}>
        &#9654;
      </button>
    </div>
  );
};

const styles = {
  carouselFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: "20px 0",
    borderTop: "1px solid #eaeaea",
    position: "relative",
    bottom: "0",
    width: "100%",
  },
  carouselImage: {
    maxWidth: "100%",
    height: "auto",
    transition: "transform 0.5s ease-in-out",
  },
  arrow: {
    background: "none",
    border: "none",
    fontSize: "2rem",
    cursor: "pointer",
    padding: "10px",
    color: "#007bff",
    outline: "none",
  },
};

export default CarouselFooter;
