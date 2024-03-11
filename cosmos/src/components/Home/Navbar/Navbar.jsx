import React from "react";
import "./Navbar.css"
// import { Link } from 'react-router-dom';
// ... rest of the code

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Works</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;