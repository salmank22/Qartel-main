import React from "react";
import leftArrows from "../../../../assets/left-arrows.png";
import rightArrows from "../../../../assets/right-arrows.png";

const Slider = () => {
  return (
    <div style={styles.slider}>
      <img style={styles.arrows} src={leftArrows} alt="" />
      <span id="brand" style={styles.brand}>
       CASINO<br /> & <br />NFTs
      </span>
      <img style={styles.arrows} src={rightArrows} alt="" />
    </div>
  );
};

export default Slider;

const styles = {
  slider: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: 130,
  },
  txt: {
    background: `linear-gradient(180deg, #6E41F7 0%, #F642D7 100%)`,
    backgroundClip: "text",
  },
  brand: {
    fontSize: "3rem",
    fontFamily: "Audiowide",
  },
  arrows: {
    width: "10rem",
  },
};
