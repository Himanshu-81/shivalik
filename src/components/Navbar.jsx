import './Navbar.css';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Top bar */}
      <div className="navbar-topbar">
        <div className="container topbar-inner">
          <span>📞 +91-9876543210 &nbsp;|&nbsp; ✉️ info@shivalikacademy.com</span>
          <span>🕒 Mon–Sat: 8:00 AM – 8:00 PM</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="navbar-main">
        <div className="container nav-inner">
          {/* Logo */}
          <div className="nav-logo">
            <div className="logo-icon">S</div>
            <div className="logo-text">
              <span className="logo-name">Shivalik Academy</span>
              <span className="logo-tagline">Excellence Since 1985</span>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#contact" className="btn btn-gold nav-cta">Enroll Now</a>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
            <span className={menuOpen ? 'bar open' : 'bar'}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-gold" style={{ margin: '12px 20px' }}>Enroll Now</a>
        </div>
      )}
    </nav>
  );
}
