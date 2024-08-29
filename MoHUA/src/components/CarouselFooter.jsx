import React from "react";
import "../CarouselFooter.css"
import cea from "../assets/cea.png";
import digitalIndia from "../assets/digitalindia_0.png";
import eesl from "../assets/eesl.png";
import minOfPower from "../assets/minofpower_3.png";
import mnre from "../assets/mnre_0.png";
import mohua from "../assets/mohua.png";
import myGov from "../assets/mygov_7.png";
import natPortal from "../assets/natportal_0.png";
import nhpc from "../assets/nhpc_0.png";
import ntpc from "../assets/ntpc_0.png";
import pfcl from "../assets/pfcl.png";
import powerGrid from "../assets/powergrid_1.png";
import recl from "../assets/recl.png";

const CarouselFooter = () => {
  const images = [
    cea,
    digitalIndia,
    eesl,
    minOfPower,
    mnre,
    mohua,
    myGov,
    natPortal,
    nhpc,
    ntpc,
    pfcl,
    powerGrid,
    recl,
  ];

  return (
    <div style={styles.carouselContainer}>
      <div className="carouselTrack">
        {images.concat(images).map(
          (
            image,
            index // Concatenate the array with itself
          ) => (
            <img
              key={index}
              src={image}
              alt={`Carousel ${index}`}
              style={styles.carouselImage}
            />
          )
        )}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    backgroundColor: "#f8f9fa",
    padding: "10px 0",
    borderTop: "1px solid #eaeaea",
  },
  carouselImage: {
    height: "80px", // Adjust the height as needed
    margin: "0 10px", // Adjust the margin as needed
  },
};

export default CarouselFooter;
