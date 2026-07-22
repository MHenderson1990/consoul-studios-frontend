import { useEffect, useRef } from 'react';
import Nav from '../components/nav';
import './Home.css';

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
          <button className="btn-primary">See the work →</button>
          <button className="btn-secondary">Start a project</button>
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
    </div>
  );
}

export default Home;