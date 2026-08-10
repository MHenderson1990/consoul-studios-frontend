import Nav from '../components/nav';
import './Work.css';


let projects = [
  {
  name: 'Club Verify',
  tagline: 'the flagship',
  status: 'progress',
  statusLabel: 'MVP Development',
  desc: 'A custom safety and verification SaaS platform built for the nightlife industry. Designed to help venues streamline guest verification, manage internal safety information, and give staff the tools they need to make faster, more informed decisions.',
  stack: ['React', 'Node', 'MongoDB'],
  image: '/club-verify.png',
},

{
    name: "The Sanctuary",
    tagline: 'Business site',
    status: 'live',
    statusLabel: 'Live',
    desc: "A clean, client-facing website built to represent a client's business online and give her a professional home base.",
    stack: ['React', 'Vite'],
    image: '/cocolove.jpg',
  },

  
  {
    name: 'Love G.E.M.S',
    tagline: "Daily motivational app",
    status: 'progress',
    statusLabel: 'Internal Testing',
    desc: 'A custom daily motivational and journaling app built around a client\u2019s business, designed to keep her audience engaged and supported between sessions.',
    stack: ['React', 'Mobile'],
    image: '/love-gems.PNG',
  },

  {
    name: 'Posse HQ',
    tagline: 'Group event planning',
    status: 'progress',
    statusLabel: 'Internal Testing',
    desc: 'A calendar-first planner for friend groups — RSVPs, group chat, and color-coded event categories, built to replace the group-text chaos of planning anything together.',
    stack: ['React', 'Node', 'Express'],
    image: '/posse.PNG',
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
            <div className="card-image">
              {project.image.startsWith('/') ? (
                <img src={project.image} alt={project.name} className="card-image-img" />
              ) : (
                project.image
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Work;