import './Testimonials.css';

let reviews = [
  {
    quote: 'Working with Mo at Consoul Studios to build my website, The Sanctuary, has been an absolute dream. From start to finish, he brought incredible speed, clear communication, and non-stop updates to ensure every single detail and desire was fully realized beyond my expectations. You can truly tell he is deeply passioante about the work and literally puts his soul into everything he creates.',
    name: 'The Sanctuary',
    role: 'Business Website',
  },
  {
    quote: 'Placeholder quote — swap in a real testimonial once collected.',
    name: 'Client name',
    role: 'Project / relationship',
  },
  {
    quote: 'Placeholder quote — swap in a real testimonial once collected.',
    name: 'Client name',
    role: 'Project / relationship',
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="eyebrow">What people say</div>
      <div className="testimonials-grid">
        {reviews.map((review, i) => (
          <div className="review-card" key={i}>
            <p className="quote">"{review.quote}"</p>
            <div className="reviewer">
              <div className="reviewer-name">{review.name}</div>
              <div className="reviewer-role">{review.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;