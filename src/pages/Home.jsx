import { useEffect, useRef } from 'react';
import Nav from '../components/nav';
import Testimonials from '../components/Testimonials';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  let waveformRef = useRef(null);

  useEffect(() => {
    let wf = waveformRef.current;
    if (!wf || wf.children.length > 0) return;

    for (let i = 0; i < 48; i++) {
      let bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.animationDelay = Math.random() * 2 + 's';
      bar.style.height = 30 + Math.random() * 70 + '%';
      wf.appendChild(bar);
    }
  }, []);

  return (
    <div className="home">
      <Nav />

      <section className="hero">
        <div className="waveform" ref={waveformRef}></div>
        <div className="eyebrow">Web &amp; mobile development</div>
        <h1>
          Software with <span className="hero-accent">soul.</span>
        </h1>
        <p>Web and mobile apps for small businesses, startups, and creatives — built with real craft and care.</p>
        <div className="hero-actions">
          <Link to="/work" className="btn-primary">See the work →</Link>
          <Link to="/contact" className="btn-secondary">Start a project</Link>
        </div>

        <div className="stats">
          <div>
            <div className="stat-num">4+</div>
            <div className="stat-label">Apps shipped</div>
          </div>
          <div>
            <div className="stat-num">2</div>
            <div className="stat-label">Platforms — web & mobile</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">Custom-built</div>
          </div>
        </div>
      </section>
    {/* --- services grid: after hero </section> --- */}
      <section className="services-preview">
        <div className="section-eyebrow">What I build</div>
        <h2 className="section-title">
          From idea to <span className="hero-accent">launch.</span>
        </h2>
        <p className="section-sub">
          Custom web and mobile apps — designed, built, and shipped with real
          craft. No templates, no filler.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3>Web Apps</h3>
            <p>Fast, custom sites and web apps — React front ends with real backends behind them, built to fit your brand.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <path d="M11 18h2" />
              </svg>
            </div>
            <h3>Mobile Apps</h3>
            <p>Native-feeling iOS apps taken from concept to the App Store — clean, responsive, and built to ship.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
            </div>
            <h3>Ongoing Support</h3>
            <p>Retainer-based updates, fixes, and new features so your product keeps growing long after launch day.</p>
          </div>
        </div>
      </section>

      {/* --- CTA band: after <Testimonials /> --- */}
      <section className="cta-band">
        <h2>
          Got a project in mind?<br />
          Let's build something with <span className="hero-accent">soul.</span>
        </h2>
        <p>Tell me what you're working on and I'll get back to you — no pressure, no sales pitch.</p>
        <div className="cta-actions">
          <Link to="/contact" className="btn-primary">Start a project →</Link>
          <a href="mailto:info@consoulstudios.com" className="cta-email">info@consoulstudios.com</a>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
}



export default Home;