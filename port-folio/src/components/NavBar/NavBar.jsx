

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="navbar-grid">
          <nav className={isMenuOpen ? "menu-mobile" : "menu-web"}>
            <ul>
              <li><a href="#home-grid">Home</a></li>
              <li><a href="#about-grid">About</a></li>
              <li><a href="#skills-grid">Skills</a></li>
              <li><a href="#projects-grid">Projects</a></li>
              <li><a href="#connect-grid">Connect</a></li>


            </ul>
          </nav>

          {/* Hamburger Menu */}
          <div className="ham-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`ham-bar ${isMenuOpen ? "clicked" : ""}`}></div>
            <div className={`ham-bar ${isMenuOpen ? "clicked" : ""}`}></div>
            <div className={`ham-bar ${isMenuOpen ? "clicked" : ""}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
