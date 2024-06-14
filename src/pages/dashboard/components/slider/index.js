import React from "react";
import leftArrows from "../../../../assets/left-arrows.png";
import rightArrows from "../../../../assets/right-arrows.png";
import styled from "styled-components";

const Slider = () => {
  return (
    <SliderWrapper>
      <img style={styles.arrows} src={leftArrows} alt="" />
      <Brand id="brand">
        CASINO<span className="hideOnDesktop"> <br /> & <br /> </span>NFTs
      </Brand>
      <img style={styles.arrows} src={rightArrows} alt="" />
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 130px;
`;

const Brand = styled.span`
  font-size: 3rem;
  font-family: Audiowide;

  @media (min-width: 768px) {
    .hideOnDesktop {
      display: none;
    }
  }
`;

const styles = {
  arrows: {
    width: "10rem",
  },
};
