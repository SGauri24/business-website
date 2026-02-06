import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">My Business</h3>

        <p className="footer-text">
          © {new Date().getFullYear()} My Business. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
