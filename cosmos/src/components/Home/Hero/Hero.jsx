import React from "react";
import "./Hero.css";
import logo from "../../../assets/logo.png";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <img className="header-img" src={logo} alt="" />
      <h1 className="header-text">Designs that speaks louder than words</h1>
      <p>We create designs that convey a message and draws attention.</p>
      <Navbar/>
    </div>
  );
};

export default Hero;
