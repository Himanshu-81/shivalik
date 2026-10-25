import './Footer.css';

const quickLinks = ['Home', 'About Us', 'Programs', 'Faculty', 'Results', 'Blog', 'Contact'];
const programs = ['IIT-JEE (Main + Advanced)', 'NEET Medical', 'Foundation Class 9-10', 'Crash Course', 'NTSE & Olympiads'];
const centres = ['Dehradun Main (HQ)', 'Haridwar Branch', 'Rishikesh Branch', 'Roorkee Branch', 'Saharanpur Branch'];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* CTA strip */}
      <div className="footer-cta-strip">
        <div className="container footer-cta-inner">
          <div>
            <h3>Begin Your Scholarly Journey With Shivalik Academy</h3>
            <p>Join over 1,15,000 students. Seats for Session 2025 are filling fast.</p>
          </div>
          <div className="footer-cta-actions">
            <a href="tel:+919876543210" className="btn btn-gold">📞 Call Now</a>
            <a href="#" className="btn btn-outline-white2">Learn More</a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">S</div>
              <div className="logo-text">
                <span className="logo-name">Shivalik Academy</span>
                <span className="logo-tagline">Excellence Since 1985</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              India's most trusted coaching institution for IIT-JEE, NEET and foundation programs. 
              Empowering young minds for four decades.
            </p>
            <div className="footer-socials">
              {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
                <a key={i} href="#" className="social-btn">{icon}</a>
              ))}
            </div>
            <div className="footer-contact-info">
              <p>📞 +91-9876543210</p>
              <p>✉️ info@shivalikacademy.com</p>
              <p>📍 15, Gandhi Road, Dehradun, Uttarakhand</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Academic Courses</h4>
            <ul className="footer-links">
              {programs.map((p) => <li key={p}><a href="#">{p}</a></li>)}
            </ul>
          </div>

          {/* Centres */}
          <div className="footer-col">
            <h4 className="footer-col-title">Regional Centres</h4>
            <ul className="footer-links">
              {centres.map((c) => <li key={c}><a href="#">{c}</a></li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 Shivalik Academy. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
