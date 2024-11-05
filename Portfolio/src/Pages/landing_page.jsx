// src/components/LandingPage.js
import React from "react";
import "../Css/LandingPage.css";
import dispic from "../assets/dashpic.png";
import logo from "../assets/logo.png";
import fill137 from "../assets/Fill 137.png";
import fill235 from "../assets/Fill 235.png";
import semi from "../assets/semi.png";
import fill133 from "../assets/Fill 133.png";


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

      {/* Background Floating Images */}
      <img src={fill137} alt="Decorative shape" className="bg-fill-137" />
      <img src={fill235} alt="Decorative shape" className="bg-fill-235" />
      <img src={semi} alt="Decorative shape" className="bg-semi" />
      <img src={fill133} alt="Decorative shape" className="bg-fill-133" />

      <div className="hero-section">
        <div className="text-wrapper">
          <h1>
            Great <span>Product</span> is built <br />
            <span className="typing-animation">by great teams</span>
          </h1>
          <p>
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </p>
          <p>Showcase Your Work with ServMind’s Creative Solutions</p>
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
