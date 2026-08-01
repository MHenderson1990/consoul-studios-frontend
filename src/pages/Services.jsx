import Nav from '../components/nav';
import { Link } from 'react-router-dom';
import './Services.css';

let services = [
  {
    name: 'Web & Mobile Apps',
    tagline: 'built for every screen',
    desc: 'Fast, modern websites and web apps, plus native-feeling mobile apps for iOS and Android — from a small business homepage to a full custom application, built clean and built to last.',
  },
  {
    name: 'Cross-Platform Software',
    tagline: 'one codebase, every device',
    desc: 'Full software platforms that run across phone, tablet, and computer from a single codebase — built to scale, with the maintenance and updates to keep them running long-term.',
  },
  {
    name: 'Ongoing Support',
    tagline: 'support that doesn\u2019t stop at launch',
    desc: 'Monthly support and iteration after launch — bug fixes, updates, and new features as your business grows and your needs change.',
  },
];

let tools = ['React', 'Vite', 'Node', 'Express', 'MongoDB', 'Capacitor'];

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
          </div>
        ))}
      </section>

      <section className="tools">
        <div className="tools-label">Built with</div>
        <div className="tools-list">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Not sure what you need?</h2>
        <p>Every project starts with a conversation, not a quote.</p>
        <Link to="/contact" className="btn-primary">Start a project →</Link>
      </section>
    </div>
  );
}

export default Services;