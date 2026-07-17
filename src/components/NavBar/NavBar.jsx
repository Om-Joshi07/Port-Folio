import { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home-grid'); // default

  const handleClick = (id) => {
    setActiveLink(id);
    setIsMenuOpen(false); // close menu after click (optional)
  };

  useEffect(() => {
    const sectionIds = ['home-grid', 'about-grid', 'skills-grid', 'projects-grid', 'connect-grid'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    // Trigger when 40% of the viewport is intersected by the section
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);


  return (
    <header>
      <div className="container">
        <div className="navbar-grid">
          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a 
                  href="#home-grid" 
                  className={activeLink === '#home-grid' ? 'active-link' : ''} 
                  onClick={() => handleClick('#home-grid')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about-grid" 
                  className={activeLink === '#about-grid' ? 'active-link' : ''} 
                  onClick={() => handleClick('#about-grid')}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills-grid" 
                  className={activeLink === '#skills-grid' ? 'active-link' : ''} 
                  onClick={() => handleClick('#skills-grid')}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects-grid" 
                  className={activeLink === '#projects-grid' ? 'active-link' : ''} 
                  onClick={() => handleClick('#projects-grid')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#connect-grid" 
                  className={activeLink === '#connect-grid' ? 'active-link' : ''} 
                  onClick={() => handleClick('#connect-grid')}
                >
                  Connect
                </a>
              </li>
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
