import { useState, useEffect, useRef } from 'react';
import './NavBar.css';

const NAV_LINKS = [
  { id: '#home-grid', label: 'Home' },
  { id: '#about-grid', label: 'About' },
  { id: '#skills-grid', label: 'Skills' },
  { id: '#projects-grid', label: 'Projects' },
  { id: '#connect-grid', label: 'Connect' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home-grid');
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const activeRef = useRef('#home-grid');
  const lastProgressRef = useRef(0);

  const handleClick = (id) => {
    setActiveLink(id);
    activeRef.current = id;
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.id.slice(1));
    let raf = 0;

    const update = () => {
      raf = 0;
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);

      // Reading line sits just below the viewport middle.
      const at = scrollY + window.innerHeight * 0.45;

      // Pick the last section whose top has crossed the reading line.
      let currentId = ids[0];
      let top = 0;
      let height = 0;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const absTop = el.getBoundingClientRect().top + scrollY;
        if (absTop <= at) {
          currentId = id;
          top = absTop;
          height = el.getBoundingClientRect().height;
        }
      });

      const next = `#${currentId}`;
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActiveLink(next);
      }

      // Progress through the active section -> underline fill (0..1).
      const p = height > 0 ? Math.max(0, Math.min(1, (at - top) / height)) : 0;
      if (Math.abs(p - lastProgressRef.current) > 0.002) {
        lastProgressRef.current = p;
        setProgress(p);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a
          href="#home-grid"
          className="navbar-logo"
          onClick={() => handleClick('#home-grid')}
          aria-label="Om Joshi — home"
        >
          Om<span>.</span>joshi
        </a>

        <nav
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          style={{ '--prog': progress }}
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id}
                  className={activeLink === link.id ? 'active-link' : ''}
                  onClick={() => handleClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="ham-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`ham-bar ${isMenuOpen ? "clicked" : ""}`}></span>
          <span className={`ham-bar ${isMenuOpen ? "clicked" : ""}`}></span>
          <span className={`ham-bar ${isMenuOpen ? "clicked" : ""}`}></span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;