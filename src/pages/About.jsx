import Nav from '../components/nav';
import './About.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <Nav />

      <section className="page-head">
        <div className="eyebrow">Meet Mo Henderson</div>
        <h1>
          The story behind the <span className="accent">soul.</span>
        </h1>
      </section>

      <section className="about-content">
        <div className="about-photo-slot">
          <img src="/mo.jpg" alt="Mo Henderson" className="about-photo-img" />
        </div>

        <div className="about-text">
          <p>
            Hi, I'm Mo - the founder, designer, and developer behind Consoul Studios.
            Before I wrote code, I spent years as a creative professional — a
            music producer, audio engineer, and video editor who sweated every detail. 
            That's where the name comes from: <em> console</em> + <em>soul</em>.
          </p>
          <p>
            I got into software development to build the tools I wished existed, and found that
            the instincts behind a good record are the same ones behind good
            software — knowing when something's off, and caring enough to fix it.
          </p>
          <p>
            Today I build full-stack JavaScript applications end to end: React on
            the front, Node and Express on the back, MongoDB for data, and
            Capacitor to reach mobile. Every product in my portfolio was designed
            and coded by me, start to finish.
          </p>
          <p>
            Consoul Studios is for the people I know best: small businesses,
            startups, and creatives who need real software but don't have agency
            budgets. I bring agency-level craft and a creative's eye to every
            project I take on. If you're building something and want it to feel considered, 
            not just functional, let's talk.
          </p>
        </div>
      </section>

      <section className="cta">
        <Link to="/contact" className="btn-primary">Get in touch →</Link>
      </section>
      <Footer />
    </div>
  );
}

export default About;