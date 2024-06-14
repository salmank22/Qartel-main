import React from "react";
import spinner from "../../../../../assets/spinner.png";
import roulette from "../../../../../assets/rulette.png";
import slots from "../../../../../assets/slots.png";
import qartel2 from "../../../../../assets/qartel2.png";
import playTile from "../../../../../assets/play-tile.png";
import { useMediaQuery } from "react-responsive";

const GAMES = [
  {
    name: "spin and win",
    photo: spinner,
  },
  {
    name: "roulette",
    photo: roulette,
  },
  {
    name: "slots",
    photo: slots,
  },
];

const Games = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 700px)",
  });
  return (
    <div style={styles.wrapper(isMobile)}>
      {GAMES.map((game) => (
        <div style={styles.gameWrapper}>
          <div style={styles.inner}>
            <div style={styles.imgWrapper}>

              <img src={game.photo} alt="" style={styles.img} />
            </div>
            <div style={styles.qartelWrapper}>
              <img src={qartel2} alt="" style={styles.qartel2} />
              <p style={styles.name}>{game.name}</p>
              {/* Play Game Button */}
              <div style={styles.tile} onClick={() => { }}>
                <img src={playTile} style={styles.playTile} alt="" />
              </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Games;

const styles = {
  wrapper: (isMobile) => ({
    display: "flex",
    flexDirection: isMobile ? "column" : "rows",
    justifyContent: "space-around",
    gap: "2%",
    zIndex: 100,
    padding: "100px 50px",
  }),
  inner: {
    background: `linear-gradient(180deg, #320D5E 0%, #0E2957 100%)`,
    height: "100%",
    padding: 20,
    borderRadius: 20,
    boxSizing: "border-box",
  },
  gameWrapper: {
    height: 530,
    padding: 4,
    borderRadius: 20,
    flex: 1 / 3,
    background: `linear-gradient(180deg, #33FCFF 0%, #F411FE 100%)`,
    // marginTop: 10,
  },
  imgWrapper: {
    width: "100%",
    height: "60%",
    background: "#000",
    borderRadius: 15,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  qartelWrapper: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
  },
  qartel2: {
    width: "80%",
    transform: `translateY(-10px)`,
  },
  name: {
    fontFamily: "Rajdhani",
    fontSize: "3rem",
    fontWeight: 600,
    color: "white",
    textAlign: "center",
    margin: 0,
    textTransform: "uppercase",
  },
  tile: {},
  playTile: {
    width: "100%",
  },
  tileTxt: {
    position: "absolute",
    margin: "auto",
    top: "50%",
    left: "50%",
  },
};
