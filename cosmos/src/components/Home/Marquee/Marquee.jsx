import React from "react";
import Marquee from "react-fast-marquee";
import "./Marquee.css";
import Airbnb from "../../../assets/airbnb.png";
import CrestaAI from "../../../assets/CrestaAI.png";
import Basecamp from "../../../assets/Basecamp.png";
import quantum from "../../../assets/quantum.png";
import blanq from "../../../assets/blanq.png";
import kmk from "../../../assets/kmk.png";
import oathlifyy from "../../../assets/oathlifyy.png";

const MyMarqueeComponent = () => {
  return (
    <div  className="my-marquee">
      <p className="p-marq">Brands we’ve collaborated with</p>

      {/* react-fast-marquee */}
      <Marquee
        direction="left" 
        behavior="scroll" 
        speed={150}
        className="marquee-style"
      >
        <img src={Airbnb} alt=""  className="brand-image"/>
        <img src={oathlifyy} alt=""  className="brand-image"/>
        <img src={CrestaAI} alt=""  className="brand-image"/>
        <img src={Basecamp} alt="" className="brand-image"/>
        <img src={quantum} alt=""  className="brand-image"/>
        <img src={blanq} alt=""  className="brand-image"/>
        <img src={kmk} alt=""  className="brand-image"/>
      </Marquee>
    </div>
  );
};

export default MyMarqueeComponent;
