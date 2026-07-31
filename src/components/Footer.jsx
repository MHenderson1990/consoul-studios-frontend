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
            Web and mobile apps built with real craft, care and soul — for small
            businesses, startups, and creatives.
          </p>
          <a href="mailto:info@consoulstudios.com" className="footer-contact">
            info@consoulstudios.com
          </a>
          <div className="footer-location">Dallas, TX</div>
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
          {/* add LinkedIn / Instagram links here when ready */}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Consoul Studios. All rights reserved.</span>
        <span>
          Software with{' '}
          <span className="footer-accent">soul.</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;