import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src="/logo.png" alt="Consoul Studios" className="nav-logo-img" />
      </Link>
      <div className="nav-links">
        <Link to="/work">Work</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;