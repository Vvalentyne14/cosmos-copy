import React from "react";
import "./Navbar.css"
// import { Link } from 'react-router-dom';
// ... rest of the code

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <li><a href="#">Home</a></li>
             <li><a href="#">About Us</a></li>
             <li><a href="#">Service</a></li>
             <li><a href="#">Contact Us</a></li>
             <li><a href="#">Works</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;