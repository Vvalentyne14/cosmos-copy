import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueePro.css";

const MarqueePro = () => {
  return (
    <div className="marqueepro">
      <Marquee className="marqueex" direction="left" behavior="scroll" speed={150}>
        <h1>Exploring the design Space.</h1>
      </Marquee>
    </div>
  );
};

export default MarqueePro;
