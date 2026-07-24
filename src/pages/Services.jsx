import Nav from '../components/nav';
import './Services.css';

let services = [
  {
    name: 'Web',
    tagline: 'sites built to convert',
    desc: 'Fast, modern websites and web apps — from a small business homepage to a full custom web application, built clean and built to last.',
    stack: ['React', 'Vite', 'Node', 'Express', 'MongoDB'],
  },
  {
    name: 'Mobile',
    tagline: 'one codebase, every platform',
    desc: 'Cross-platform mobile apps for iOS and Android from a single codebase — built efficiently without sacrificing a native feel.',
    stack: ['React', 'Capacitor'],
  },
  {
    name: 'Ongoing',
    tagline: 'support that doesn\u2019t stop at launch',
    desc: 'Monthly support and iteration after launch — bug fixes, updates, and new features as your business grows and your needs change.',
    stack: ['Maintenance', 'Retainer'],
  },
];

function Services() {
  return (
    <div className="services-page">
      <Nav />

      <section className="page-head">
        <div className="eyebrow">What we do</div>
        <h1>
          Built with <span className="accent">soul.</span>
        </h1>
        <p>Three ways to work together — pick what fits, or simply start with a conversation.</p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.name}>
            <h3>{service.name}</h3>
            <div className="tagline">{service.tagline}</div>
            <p className="desc">{service.desc}</p>
            <div className="stack">
              {service.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="cta">
        <h2>Not sure what you need?</h2>
        <p>Every project starts with a conversation, not a quote.</p>
        <button className="btn-primary">Start a project →</button>
      </section>
    </div>
  );
}

export default Services;