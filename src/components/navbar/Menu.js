import React, { useState } from "react";

const MENU = [
  {
    name: "About",
  },
  {
    name: "Casino",
  },
  {
    name: "Marketplace",
  },
  {
    name: "Soon",
  },
];

const Menue = () => {
  const [selected, setSelected] = useState("Casino");
  return (
    <div style={styles.wrapper}>
      {MENU.map((menu) => (
        <div style={styles.menu}>
          <span
            onClick={() => setSelected(menu.name)}
            style={{
              ...styles.menuTxt,
              fontWeight: selected === menu.name ? 500 : 400,
              color: selected === menu.name ? "#FF00D6" : "#75FFFF",
            }}
          >
            {menu.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Menue;

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "10%",
    paddingTop: 20,
  },
  menu: {
    color: "white",
  },
  menuTxt: {
    fontFamily: "Exo",
    cursor: "pointer",
    fontSize: "2rem",
  },
};
