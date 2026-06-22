import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { BsInstagram, BsStackOverflow } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/om-joshi07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxLinkedinLogo />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscGithubInverted />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
            <a
              href="https://stackoverflow.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsStackOverflow />
            </a>
          </div>
          <div className="text">
            <p>© 2024 Om Joshi. All rights reserved.</p>
            <p>Designed by Om Joshi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
