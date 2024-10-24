// src/components/LandingPage.js
import React from "react";
import "../Css/LandingPage.css";
import dispic from "../assets/dashpic.png";
import logo from "../assets/logo.png";

const LandingPage = () => {
  return (
    <div className="page-wrapper">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="nav-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
        </div>
      </div>

      <div className="hero-section">
        <div className="text-wrapper">
          <h1>
            Great <span>Product</span> is built by great <span>teams</span>
          </h1>
          <p>
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </p>
          <button className="cta-button">Let's get started!</button>
        </div>

        <div className="image-wrapper">
          <img src={dispic} alt="Team working" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
