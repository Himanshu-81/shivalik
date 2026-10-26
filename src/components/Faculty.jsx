import { useState, useEffect } from 'react';
import './Faculty.css';

const facultyData = [
  {
    id: 'rajeshwar',
    name: 'Dr. Rajeshwar Sharma',
    subject: 'Physics',
    role: 'Founder & Director',
    exp: '35+ Years',
    img: '/teacher_rajeshwar.jpg',
    students: '40,000+',
    pill: 'EX-IIT FACULTY & 35+ YRS EXPERIENCE',
    subtitle: 'Founder & Director • Authored 12 Physics Books • 300+ IIT Rankers',
    degrees: 'M.Sc. Physics (IIT Kharagpur), Ph.D. Theoretical Physics',
    gridClass: 'bento-hero', // 7 columns
    desc: 'Ex-IIT faculty member who has spent 35+ years crafting standard pedagogy for competitive Physics in India. Authored 12 benchmark textbooks and personally trained more than 300 Top-100 IIT JEE rankers.',
    highlights: [
      '300+ IIT JEE Top 100 Rankers mentored personally',
      'Author of 12 acclaimed reference textbooks',
      'Pioneer of visual mechanics problem-solving',
    ],
  },
  {
    id: 'anand',
    name: 'Prof. Anand Verma',
    subject: 'Chemistry',
    role: 'HOD – Chemistry',
    exp: '22+ Years',
    img: '/teacher_anand.jpg',
    students: '30,000+',
    pill: 'IIT BOMBAY ALUM & 22+ YRS MASTERY',
    subtitle: 'HOD Chemistry • 3x AIR Top-10 NEET Mentorship',
    degrees: 'M.Sc. Organic Chemistry (IIT Bombay)',
    gridClass: 'bento-side', // 5 columns
    desc: 'IIT Bombay alumnus celebrated for demystifying complex Organic reaction mechanisms and Physical Chemistry kinetics into easy, intuitive frameworks that guarantee top exam percentile.',
    highlights: [
      'Produced 3 consecutive AIR Top-10 NEET selections',
      'IIT Bombay Gold Medalist & Research Scholar',
      'Specialist in rapid Organic synthesis reasoning',
    ],
  },
  {
    id: 'meera',
    name: 'Dr. Meera Kapoor',
    subject: 'Mathematics',
    role: 'Senior Faculty',
    exp: '18+ Years',
    img: '/teacher_meera.jpg',
    students: '20,000+',
    pill: 'PH.D MATHEMATICS & 18+ YRS EXP',
    subtitle: 'Senior Faculty • Advanced Calculus & Visual Geometry',
    degrees: 'Ph.D. in Applied Mathematics (Delhi University)',
    gridClass: 'bento-third', // 4 columns
    desc: 'Renowned mathematician specializing in multi-variable calculus, coordinate geometry, and algebraic mastery. Transforms intimidating equations into intuitive visual graphs.',
    highlights: [
      'Pioneer in visual calculus pedagogy for JEE Advanced',
      'National Mathematics Olympiad Trainer',
      'Mentored over 85 students with 100 percentile in Math',
    ],
  },
  {
    id: 'vikram',
    name: 'Dr. Vikramaditya Sen',
    subject: 'Biology',
    role: 'HOD – Biology & NEET Specialist',
    exp: '15+ Years',
    img: '/teacher_vikram.jpg',
    students: '25,000+',
    pill: 'AIIMS RESEARCH FELLOW & 15+ YRS',
    subtitle: 'HOD Biology • Renowned NEET Medical Strategist',
    degrees: 'MBBS, MD, Ex-Senior Research Fellow (AIIMS New Delhi)',
    gridClass: 'bento-third', // 4 columns
    desc: 'Combines actual clinical precision with high-yield NEET mnemonics in Botany and Zoology. Guided thousands of medical aspirants to crack 350+ out of 360 in NEET Biology.',
    highlights: [
      'Ex-AIIMS New Delhi Senior Research Fellow',
      'Curator of standard High-Yield NEET Biology question banks',
      'Over 1,200 alumni studying in government medical colleges',
    ],
  },
  {
    id: 'priya',
    name: 'Er. Priya Nambiar',
    subject: 'Physics',
    role: 'Senior Faculty – Mechanics & Olympiads',
    exp: '12+ Years',
    img: '/teacher_priya.jpg',
    students: '15,000+',
    pill: 'OLYMPIAD COACH & 12+ YRS EXP',
    subtitle: 'Associate Professor • Advanced Mechanics & NTSE Specialist',
    degrees: 'B.Tech Mechanical (NIT Trichy), M.Tech (IIT Madras)',
    gridClass: 'bento-third', // 4 columns
    desc: 'Specialist in Olympiad problem solving and foundational bridging from high school to competitive examinations. Known for interactive lab-based problem visualization.',
    highlights: [
      'National Physics Olympiad (INPhO) Trainer',
      'Dual Alumna of NIT Trichy & IIT Madras',
      'Expert in concept-to-application problem bridging',
    ],
  },
];

const categories = ['All Disciplines', 'Physics', 'Chemistry', 'Mathematics', 'Biology'];

export default function Faculty() {
  const [selectedCategory, setSelectedCategory] = useState('All Disciplines');
  const [activeProfessor, setActiveProfessor] = useState(null);

  const filteredFaculty = selectedCategory === 'All Disciplines'
    ? facultyData
    : facultyData.filter((f) => f.subject.toLowerCase() === selectedCategory.toLowerCase());

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProfessor(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="faculty section-padding" id="faculty">
      <div className="container">
        
        {/* Header Section themed with Shivalik brand */}
        <div className="bento-header-wrapper">
          <div className="bento-header-left">
            <span className="badge badge-gold">✦ Our Master Educators</span>
            <h2 className="bento-main-heading">
              Learn Directly from Master Teachers &amp;<br />
              <span className="bento-highlight-text">Academic Legends.</span>
            </h2>
            <div className="gold-line" />
          </div>

          <div className="bento-header-right">
            <p className="bento-header-description">
              Our faculty are IIT graduates, PhD holders, and exam experts who have dedicated their
              careers to crafting the perfect learning experience. Click any professor profile to inspect credentials, pedagogy, and results.
            </p>
            {/* Category Filter Pills */}
            <div className="bento-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`bento-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid-layout">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className={`bento-card ${member.gridClass}`}
              onClick={() => setActiveProfessor(member)}
            >
              {/* Background Cover Image with Hover Zoom */}
              <div className="bento-card-bg-wrap">
                <img
                  src={member.img}
                  alt={member.name}
                  className="bento-card-bg-img"
                  loading="lazy"
                />
                <div className="bento-card-overlay" />
              </div>

              {/* Top Tag / Pill */}
              <div className="bento-top-badge">
                <span>{member.pill}</span>
              </div>

              {/* Bottom Details Bar */}
              <div className="bento-bottom-content">
                <div className="bento-text-meta">
                  <h3 className="bento-prof-name">{member.name}</h3>
                  <p className="bento-prof-subtitle">{member.subtitle}</p>
                </div>

                <button
                  type="button"
                  className="bento-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProfessor(member);
                  }}
                  aria-label={`View profile of ${member.name}`}
                >
                  <span>View Profile</span>
                  <svg
                    className="bento-btn-arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner matching original theme */}
        <div className="faculty-cta">
          <div className="faculty-cta-text">
            <h4>Interact Directly with Master Teachers in Orientation Sessions</h4>
            <p>Meet all 50+ expert faculty members, inspect study material, and plan your roadmaps.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Book a Free Demo Class
          </a>
        </div>

      </div>

      {/* Professor Profile Modal in Theme */}
      {activeProfessor && (
        <div className="bento-modal-backdrop" onClick={() => setActiveProfessor(null)}>
          <div
            className="bento-modal-window"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="bento-modal-close"
              onClick={() => setActiveProfessor(null)}
              aria-label="Close dialog"
            >
              &times;
            </button>

            <div className="bento-modal-body">
              <div className="bento-modal-img-col">
                <img
                  src={activeProfessor.img}
                  alt={activeProfessor.name}
                  className="bento-modal-img"
                />
                <div className="bento-modal-badge">{activeProfessor.subject}</div>
              </div>

              <div className="bento-modal-info-col">
                <div className="bento-modal-pill">{activeProfessor.pill}</div>
                <h3 className="bento-modal-title">{activeProfessor.name}</h3>
                <div className="bento-modal-role">{activeProfessor.role}</div>
                <div className="bento-modal-degrees">{activeProfessor.degrees}</div>

                <div className="bento-modal-stats-row">
                  <div className="bento-mstat">
                    <span className="bento-mstat-val">{activeProfessor.exp}</span>
                    <span className="bento-mstat-lbl">Experience</span>
                  </div>
                  <div className="bento-mstat">
                    <span className="bento-mstat-val">{activeProfessor.students}</span>
                    <span className="bento-mstat-lbl">Trained</span>
                  </div>
                  <div className="bento-mstat">
                    <span className="bento-mstat-val">AIR Top 10</span>
                    <span className="bento-mstat-lbl">Proven Ranks</span>
                  </div>
                </div>

                <p className="bento-modal-desc">{activeProfessor.desc}</p>

                <div className="bento-modal-highlights">
                  <h4>Key Distinctions &amp; Achievements</h4>
                  <ul>
                    {activeProfessor.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="bento-modal-actions">
                  <a
                    href="#contact"
                    className="btn btn-primary"
                    onClick={() => setActiveProfessor(null)}
                  >
                    Request Doubt Session
                  </a>
                  <button
                    className="btn btn-outline"
                    onClick={() => setActiveProfessor(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
