import React from "react";
import "../Css/footer.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <div className="logo">
            <img src={logo} alt="logo" className="logo-image" />
          </div>
          <p className="newsletter-text">
            Stay up to date on the latest features and releases by joining our
            newsletter.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
          <p className="consent-text">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>

        <div className="social-section">
          <h3>Follow us</h3>
          <ul className="social-links">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2023 Created by Airdokan & Powered by Webflow. All rights reserved.
        </p>
        <div className="policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
