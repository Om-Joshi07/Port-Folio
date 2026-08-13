import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <p className="footer-brand">
            Om<span>.</span>joshi
          </p>
          <p className="footer-copy">
            &copy; {year} Om Joshi. Crafted with care in Kathmandu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;