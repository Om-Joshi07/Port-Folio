

import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="navbar-grid">
          <nav className={isMenuOpen ? "menu-mobile" : "menu-web"}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Services</a></li>
              <li><a href="#projects">Portfolio</a></li>
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
