import React from "react";
import rightBall from "../../../../assets/right-ball.png";

const Description = () => {
  return (
    <div style={styles.description}>
      <p style={styles.descriptionTxt}>{`Qartel is the first casino and NFT collection on Qom. Our fast, secure, marketplace houses the syndicate. Collect and trade—Intimidate rivals and inspire loyalty, solidifying your place in the hierarchy of power.`}<br /><br />{`Qartel has an exclusive collection of 2222 NFTs, each representing a unique character. Among these digital assets, hawks symbolize keen strategists, always on the lookout for opportunities. Mules, dependable and sturdy, carry the weight of crucial missions. Bosses, a lot of power, the directors of operations. Sicarios, fierce enforcers, ensuring tasks are executed with precision.`}</p>
  </div>    
  );
};

export default Description;

const styles = {
  description: {
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
    positiion: "relative",
  },
  descriptionTxt: {
    width: "100%",
    color: "white",
    maxWidth: "60%",
    textAlign: "center",
    fontFamily: "Rajdhani",
    fontSize: 16,
  },
};
