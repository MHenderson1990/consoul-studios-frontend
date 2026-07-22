import './nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        Consoul<span className="nav-logo-accent">Studios</span>
      </div>
      <div className="nav-links">
        <a href="/work">Work</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Nav;