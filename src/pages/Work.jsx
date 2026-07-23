import Nav from '../components/nav';
import './Work.css';

let projects = [
  {
    name: 'Jointly',
    tagline: 'the flagship',
    status: 'live',
    statusLabel: 'Live',
    desc: 'A budgeting app built for couples — a shared, transparent view of household finances, grown out of software battle-tested in a real home. Heading to the App Store.',
    stack: ['React', 'Capacitor', 'Node', 'MongoDB'],
    image: 'Jointly screenshot',
  },
  {
    name: 'Posse HQ',
    tagline: 'group event planning',
    status: 'progress',
    statusLabel: 'In development',
    desc: 'A calendar-first planner for friend groups — RSVPs, group chat, and color-coded event categories, built to replace the group-text chaos of planning anything together.',
    stack: ['React', 'Node', 'Express'],
    image: 'Posse HQ screenshot',
  },
  {
    name: 'Motivation App',
    tagline: "for Kelli's business",
    status: 'planning',
    statusLabel: 'In progress',
    desc: 'A custom motivational app built around a client\u2019s business, designed to keep her audience engaged and supported between sessions.',
    stack: ['React', 'Mobile'],
    image: 'Motivation App mockup',
  },
  {
    name: "Kelli's Website",
    tagline: 'business site',
    status: 'planning',
    statusLabel: 'In progress',
    desc: "A clean, client-facing website built to represent Kelli's business online and give her a professional home base to send people to.",
    stack: ['React', 'Vite'],
    image: 'Website mockup',
  },
];

function Work() {
  return (
    <div className="work-page">
      <Nav />

      <section className="page-head">
        <div className="eyebrow">Selected work</div>
        <h1>
          Real work. Real <span className="accent">soul.</span>
        </h1>
        <p>Solutions built to solve real problems for the creative building something of their own.</p>
      </section>

      <section className="grid">
        {projects.map((project) => (
          <div className="card" key={project.name}>
            <div className="card-content">
              <span className={`card-status status-${project.status}`}>{project.statusLabel}</span>
              <h3>{project.name}</h3>
              <div className="tagline">{project.tagline}</div>
              <p className="desc">{project.desc}</p>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="card-image">{project.image}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Work;