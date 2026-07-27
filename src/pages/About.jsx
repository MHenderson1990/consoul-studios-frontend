import Nav from '../components/nav';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Nav />

      <section className="page-head">
        <div className="eyebrow">About</div>
        <h1>
          The story behind the <span className="accent">soul.</span>
        </h1>
      </section>

      <section className="about-content">
        <div className="about-photo-slot">
          <span>Photo</span>
        </div>

        <div className="about-text">
          <p>
            I've spent over a decade behind the mixing board and the camera — as an audio engineer, music producer, and video editor — before I ever wrote a line of production code. That background shapes how I build software: on deadline, through revisions, focused on shipping something that actually feels right to the people using it, not just something that technically works.
          </p>
          <p>
            The name says the rest. Consoul is a console — the mixing board, the developer's terminal — with soul built in. That's the standard I hold every build to.
          </p>
          <p>
            Right now, Consoul Studios is entirely focused on software: web and mobile apps for small businesses, startups, and fellow creatives. My production background is where this all started, and it'll find its way into the studio eventually — but for now, this is where the focus is.
          </p>
          <p className="closing">
            If you're building something and want it to feel considered, not just functional, let's talk.
          </p>
        </div>
      </section>

      <section className="cta">
        <button className="btn-primary">Get in touch →</button>
      </section>
    </div>
  );
}

export default About;