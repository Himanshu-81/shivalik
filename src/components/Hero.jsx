import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/hero_classroom.jpg" alt="Shivalik Academy Classroom" className="hero-img" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-left">
          <span className="badge badge-gold hero-badge">India's Premier Coaching Institute</span>
          <h1 className="hero-title">
            Empowering Minds,<br />
            <span className="hero-title-accent">Shaping Rankers</span><br />
            at Shivalik Academy
          </h1>
          <p className="hero-desc">
            Four decades of shaping toppers for IIT-JEE, NEET & competitive exams.
            Join 1,24,000+ successful alumni who trusted Shivalik's proven pedagogy.
          </p>
          <div className="hero-actions">
            <a href="#programs" className="btn btn-gold">Explore Programs</a>
            <a href="#results" className="btn btn-outline-white">See Our Results</a>
          </div>
          <div className="hero-quick-stats">
            {[
              { val: '40+', label: 'Years Legacy' },
              { val: '12,500+', label: 'IIT/NEET Selections' },
              { val: '98.4%', label: 'Success Rate' },
            ].map(stat => (
              <div key={stat.label} className="hq-stat">
                <span className="hq-val">{stat.val}</span>
                <span className="hq-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <div className="admission-card">
            <div className="card-header">
              <span className="card-tag">🎓 Admissions Open 2025</span>
            </div>
            <h3>Start Your Journey Today</h3>
            <p>Limited seats available for IIT-JEE & NEET batches</p>
            <form className="admission-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Full Name" className="form-input" />
              <input type="tel" placeholder="Phone Number" className="form-input" />
              <select className="form-input">
                <option>Select Program</option>
                <option>IIT-JEE (Main + Advanced)</option>
                <option>NEET (Medical)</option>
                <option>Foundation (Class 9-10)</option>
                <option>Short-term Crash Course</option>
              </select>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Get Free Counselling →
              </button>
            </form>
            <p className="card-note">🔒 No spam. We respect your privacy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
