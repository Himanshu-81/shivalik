import './Results.css';

const toppers = [
  { name: 'Priya Sharma', rank: 'AIR 23', exam: 'JEE Advanced', year: '2024', score: '99.8%ile', initial: 'P' },
  { name: 'Yash Patel', rank: 'AIR 47', exam: 'JEE Advanced', year: '2024', score: '99.6%ile', initial: 'Y' },
  { name: 'Simran Singh', rank: 'AIR 12', exam: 'NEET', year: '2024', score: '715/720', initial: 'S' },
  { name: 'Aditya Mishra', rank: 'AIR 88', exam: 'JEE Main', year: '2024', score: '99.4%ile', initial: 'A' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'Shivalik Academy transformed my approach to Physics completely. The faculty are exceptionally patient and the study material is the best I have ever seen.',
    program: 'JEE Advanced 2024 – AIR 23',
    rating: 5,
  },
  {
    name: 'Yash Patel',
    text: 'The structured schedule and weekly mock tests at Shivalik kept me on track throughout my two-year journey. Highly recommended!',
    program: 'JEE Advanced 2024 – AIR 47',
    rating: 5,
  },
  {
    name: 'Simran Singh',
    text: 'The Biology faculty at Shivalik are phenomenal. The way they cover NCERT line-by-line while linking to previous year questions is unmatched.',
    program: 'NEET 2024 – AIR 12',
    rating: 5,
  },
];

function TopperCard({ topper }) {
  return (
    <div className="topper-card">
      <div className="topper-avatar">{topper.initial}</div>
      <h4 className="topper-name">{topper.name}</h4>
      <div className="topper-rank">{topper.rank}</div>
      <div className="topper-exam">{topper.exam} {topper.year}</div>
      <div className="topper-score">{topper.score}</div>
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {'★'.repeat(t.rating)}
      </div>
      <p className="testimonial-text">"{t.text}"</p>
      <div className="testimonial-author">
        <div className="t-avatar">{t.name[0]}</div>
        <div>
          <strong>{t.name}</strong>
          <span>{t.program}</span>
        </div>
      </div>
    </div>
  );
}

export default function Results() {
  return (
    <section className="results-section section-padding" id="results">
      <div className="container">
        {/* Hall of Fame Banner */}
        <div className="results-banner">
          <div className="banner-text">
            <span className="badge badge-gold">Hall of Fame</span>
            <h2>Our Results Speak for Our Commitment</h2>
            <p>Thousands of students realise their IIT & Medical dreams every year through Shivalik's proven system</p>
            <a href="#" className="btn btn-gold" style={{ marginTop: 16 }}>Download Complete 2024 Result Booklet (PDF)</a>
          </div>
        </div>

        {/* Toppers */}
        <div className="toppers-grid">
          {toppers.map((t) => <TopperCard key={t.name} topper={t} />)}
        </div>

        {/* Testimonials */}
        <div className="testimonials-header">
          <h2 className="section-title">Trusted by over 1,15,000+ Students & Discerning Parents</h2>
          <div className="gold-line" />
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => <TestimonialCard key={t.name} t={t} />)}
        </div>
      </div>
    </section>
  );
}
