import './Testimonials.css';

let reviews = [
  {
    quote: 'Working with Mo at Consoul Studios to build my website, The Sanctuary, has been an absolute dream. From start to finish, he brought incredible speed, clear communication, and non-stop updates to ensure every single detail and desire was fully realized beyond my expectations. You can truly tell he is deeply passionate about the work and literally puts his soul into everything he creates.',
    name: 'Kelli Colbert / Founder',
    role: 'The Sanctuary',
  },
  
  {
    quote: "Teaming up with Mo and Consoul Studios has been a great experience. He took my initial idea and transformed it into functional software while keeping me involved throughout the development process. Mo is creative, dependable, and genuinely committed to understanding the needs of the business. I've been impressed by his ability to solve problems and turn a vision into a professional product.",
    name: 'Will Patterson / Founder & CEO',
    role: 'Club Verify',
  },

  {
    quote: 'Consoul Studios has helped make my dream come true, turning my passion for encouraging mental wellness and self-care into an app that can motivate society on a grand scale. Mo produced exactly what I asked for, bringing an unmatched level of passion and dedication to every detail of the process. I give Consoul Studios 10 out of 10 and highly recommend them to any founder looking to bring their vision to life!',
    name: 'Coco Love / Founder',
    role: 'Love G.E.M.S.',
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