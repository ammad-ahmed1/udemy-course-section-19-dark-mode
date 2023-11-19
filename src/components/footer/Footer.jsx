import React from "react";
import "./Footer.css";
const Footer = ({ myTheme }) => {
  return (
    <footer className="footer" data-theme={myTheme}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="your-logo.png" alt="Your Company Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          <p>
            <a href="/privacy-policy">Privacy Policy</a> |{" "}
            <a href="/terms-of-service">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
