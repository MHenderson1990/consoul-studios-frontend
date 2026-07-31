import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            Consoul <span className="footer-accent">Studios</span>
          </div>
          <p className="footer-tagline">
            Web and mobile apps built with real craft, care and soul — for
            small businesses, startups, and creatives.
          </p>

          <a href="mailto:info@consoulstudios.com" className="footer-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 6l10 7 10-7" />
            </svg>
            info@consoulstudios.com
          </a>

          <a href="tel:+1XXXXXXXXXX" className="footer-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
            </svg>
            (945) 284-4140
          </a>

          <div className="footer-item">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Dallas, TX
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services">Web Development</Link>
          <Link to="/services">Mobile Development</Link>
          <Link to="/services">Ongoing Support</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com/MHenderson1990" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/morgan-hend" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Consoul Studios. All rights reserved.</span>
        <span>Software with <span className="footer-accent">soul.</span></span>
      </div>
    </footer>
  );
}

export default Footer;