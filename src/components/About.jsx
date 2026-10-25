import './About.css';

const features = [
  { icon: '🏛️', title: 'Time-Tested Practices', desc: 'Decades of pedagogical excellence refined through generations of toppers.' },
  { icon: '📚', title: 'Rigorous Study Plans', desc: 'Structured weekly tests, DPPs and revision cycles calibrated to exam patterns.' },
  { icon: '🏆', title: 'Consistent Results', desc: 'Record-breaking selections every year in IIT, AIIMS, NIT and other top institutes.' },
  { icon: '👥', title: 'Proven Methodology', desc: 'Concept-first teaching with regular doubt sessions and personalised mentoring.' },
];

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-header">
          <span className="badge badge-gold">About Shivalik Academy</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            About Shivalik: 40+ Years of<br />Academic Excellence
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            Shivalik Academy has been at the vanguard of competitive exam coaching since 1985.
            Our mission is to nurture intellectual curiosity, instil discipline and equip students with
            the skills, strategies and self-belief to conquer the most challenging exams in India.
            We combine veteran expertise with modern teaching tools to deliver results that speak for themselves.
          </p>
        </div>

        <div className="about-grid">
          {features.map((f) => (
            <div className="about-card" key={f.title}>
              <div className="about-icon">{f.icon}</div>
              <h3 className="about-card-title">{f.title}</h3>
              <p className="about-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Director's quote */}
        <div className="director-quote">
          <div className="quote-img-wrap">
            <img src="/teacher_rajeshwar.jpg" alt="Director" className="quote-img" />
            <div className="quote-badge">🏅 Director</div>
          </div>
          <div className="quote-content">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              Education is not merely about cracking an entrance exam — it is about building a mindset that
              seeks excellence relentlessly. At Shivalik Academy, we do not just teach; we transform.
              Every student who walks through our doors leaves with more than knowledge — they leave
              with confidence, character and clarity of purpose.
            </p>
            <div className="quote-author">
              <strong>Dr. Rajeshwar Sharma</strong>
              <span>Founder & Director, Shivalik Academy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
