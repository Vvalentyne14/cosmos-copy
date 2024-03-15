import React from "react";
import "./section.css"
import Outlay from "../Outlay/Outlay";

const section = () => {
  return (
    <div className="NewSection">
      <h1>
        We are always exploring creative ways to bring your ideas to life.{" "}
      </h1>
      <p>At Cosmos Design Space we carry out research to map out a design solution that specifically solves a problem. </p>
      <Outlay/>
    </div>
  );
};

export default section;
