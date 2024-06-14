import React from "react";
import leftArrows from "../../../../assets/left-arrows.png";
import rightArrows from "../../../../assets/right-arrows.png";
import { useMediaQuery } from "react-responsive";

const Slider = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div style={styles.slider}>
      <img style={styles.arrows} src={leftArrows} alt="" />
      <span id="brand" style={isDesktopOrLaptop ? styles.brandDesktop : styles.brandMobile}>
        CASINO
        {isDesktopOrLaptop && <> & </>}
        {!isDesktopOrLaptop && <><br />&<br /></>}
        NFTs
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
    textAlign: "center",
  },
  brandDesktop: {
    fontSize: "3rem",
    fontFamily: "Audiowide",
  },
  brandMobile: {
    fontSize: "3rem",
    fontFamily: "Audiowide",
    display: "block",
  },
  arrows: {
    width: "10rem",
  },
};
