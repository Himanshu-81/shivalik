import './Programs.css';

const programs = [
  {
    id: 1,
    category: 'IIT-JEE',
    title: 'JEE Main & Advanced Formula Batch',
    desc: 'Comprehensive 2-year program covering PCM with daily practice, weekly tests, and doubt sessions.',
    fee: '₹72,000',
    duration: '2 Years',
    seats: '60 Seats',
    tag: 'Most Popular',
    tagType: 'gold',
    features: ['Daily Practice Problems', 'Weekly Mock Tests', '24×7 Doubt Support', 'Study Material Included'],
  },
  {
    id: 2,
    category: 'NEET',
    title: 'NEET Medical Champions Batch',
    desc: 'Intensive PCB program with Biology special focus, NCERT mastery and medical college counselling.',
    fee: '₹70,000',
    duration: '2 Years',
    seats: '60 Seats',
    tag: 'Top Results',
    tagType: 'maroon',
    features: ['NCERT Deep Coverage', 'Biology Supremacy Modules', 'Previous Year Analysis', 'All India Rank Tests'],
  },
  {
    id: 3,
    category: 'Foundation',
    title: 'Class 9&10 Foundation & NTSE',
    desc: 'Build a strong conceptual foundation in PCM + Talent Search Exams (NTSE, Olympiads) preparation.',
    fee: '₹45,000',
    duration: '1 Year',
    seats: '80 Seats',
    tag: 'New Batch',
    tagType: 'green',
    features: ['School + Competitive Alignment', 'Olympiad Coaching', 'Personality Development', 'Regular PTMs'],
  },
  {
    id: 4,
    category: 'Crash Course',
    title: 'Repeater – Supreme 30 Intensive',
    desc: 'High-intensity 3-month revision for last-attempt aspirants targeting JEE/NEET with proven strategies.',
    fee: '₹18,000',
    duration: '3 Months',
    seats: '40 Seats',
    tag: 'Limited Seats',
    tagType: 'maroon',
    features: ['Rapid Revision Mode', 'Smart Error Analysis', 'Daily Full-Syllabus Tests', 'Personal Mentor'],
  },
];

function ProgramCard({ program }) {
  const tagClass = program.tagType === 'gold'
    ? 'badge-gold'
    : program.tagType === 'green'
    ? 'badge-green'
    : 'badge-maroon';

  return (
    <div className="program-card">
      <div className="program-header">
        <span className="program-category">{program.category}</span>
        <span className={`badge ${tagClass} program-tag`}>{program.tag}</span>
      </div>
      <h3 className="program-title">{program.title}</h3>
      <p className="program-desc">{program.desc}</p>

      <ul className="program-features">
        {program.features.map((f) => (
          <li key={f}>
            <span className="check">✓</span> {f}
          </li>
        ))}
      </ul>

      <div className="program-meta">
        <div className="meta-item">
          <span className="meta-icon">⏱️</span>
          <span>{program.duration}</span>
        </div>
        <div className="meta-item">
          <span className="meta-icon">💺</span>
          <span>{program.seats}</span>
        </div>
      </div>

      <div className="program-footer">
        <div className="program-fee">
          <span className="fee-label">Starting from</span>
          <span className="fee-amount">{program.fee}</span>
        </div>
        <a href="#contact" className="btn btn-primary program-btn">Apply Now</a>
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <section className="programs section-padding" id="programs">
      <div className="container">
        <div className="programs-header">
          <span className="badge badge-gold">Our Courses</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Comprehensive Programs for JEE, NEET &<br />Foundation Success
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            Whether you are just beginning your journey or gearing up for your final attempt,
            Shivalik Academy has a program tailored perfectly for your goals and pace.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
