import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sectors } from '../data/sectors';
import './Navbar.css';

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/#about', isAnchor: true },
  { label: "Secteurs d'activités", path: '/secteurs', hasDropdown: true },
  { label: 'Contact', path: '/contact' },
  { label: 'Télécharger nos flyers', path: '/flyers' },
  { label: 'Demander un devis', path: '/devis', isCta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const handleNavClick = (link) => (e) => {
    if (link.isAnchor && link.path === '/#about') {
      if (location.pathname === '/') {
        e.preventDefault();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <rect width="40" height="40" rx="8" fill="#7c3aed" />
              <text x="20" y="26" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">S</text>
            </svg>
          </div>
          <span className="logo-text">SODEX</span>
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div
                key={link.label}
                className="nav-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link to={link.path} className="nav-link dropdown-trigger">
                  {link.label}
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </Link>
                <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                  {sectors.map((s) => (
                    <Link
                      key={s.id}
                      to={`/secteurs/${s.id}`}
                      className="dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <i className={`${s.icon} dropdown-icon`}></i>
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : link.isCta ? (
              <Link
                key={link.label}
                to={link.path}
                className="nav-link nav-cta"
                onClick={handleNavClick(link)}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className="nav-link"
                onClick={handleNavClick(link)}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}
