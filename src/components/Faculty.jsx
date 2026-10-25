import './Faculty.css';

const faculty = [
  {
    name: 'Dr. Rajeshwar Sharma',
    subject: 'Physics',
    role: 'Founder & Director',
    exp: '35+ Years',
    img: '/teacher_rajeshwar.jpg',
    students: '40,000+',
    tag: '⭐ Founder',
    desc: 'Ex-IIT faculty. Authored 12 books on Physics for competitive exams. Mentored 300+ IIT rankers personally.',
  },
  {
    name: 'Prof. Anand Verma',
    subject: 'Chemistry',
    role: 'HOD – Chemistry',
    exp: '22+ Years',
    img: '/teacher_anand.jpg',
    students: '30,000+',
    tag: 'HOD',
    desc: 'M.Sc. IIT Bombay. Specialises in Organic Chemistry. 3 students in AIR Top-10 NEET consecutively.',
  },
  {
    name: 'Dr. Meera Kapoor',
    subject: 'Mathematics',
    role: 'Senior Faculty',
    exp: '18+ Years',
    img: '/teacher_meera.jpg',
    students: '20,000+',
    tag: 'Senior Faculty',
    desc: 'PhD in Mathematics. Known for simplifying complex calculus and algebra with visual techniques.',
  },
];

function FacultyCard({ member }) {
  return (
    <div className="faculty-card">
      <div className="faculty-img-wrap">
        <img src={member.img} alt={member.name} className="faculty-img" />
        <div className="faculty-subject-badge">{member.subject}</div>
      </div>
      <div className="faculty-info">
        <span className="badge badge-gold faculty-tag">{member.tag}</span>
        <h3 className="faculty-name">{member.name}</h3>
        <p className="faculty-role">{member.role}</p>
        <p className="faculty-desc">{member.desc}</p>
        <div className="faculty-stats">
          <div className="fstat">
            <strong>{member.exp}</strong>
            <span>Experience</span>
          </div>
          <div className="fstat">
            <strong>{member.students}</strong>
            <span>Students</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faculty() {
  return (
    <section className="faculty section-padding" id="faculty">
      <div className="container">
        <div className="faculty-header">
          <span className="badge badge-gold">Our Master Educators</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Learn Directly from Master Teachers &<br />Academic Legends
          </h2>
          <div className="gold-line" />
          <p className="section-subtitle">
            Our faculty are IIT graduates, PhD holders and exam experts who have dedicated their careers
            to crafting the perfect learning experience for competitive exam aspirants.
          </p>
        </div>

        <div className="faculty-grid">
          {faculty.map((m) => (
            <FacultyCard key={m.name} member={m} />
          ))}
        </div>

        <div className="faculty-cta">
          <p>Meet all 50+ expert faculty members in our information sessions</p>
          <a href="#contact" className="btn btn-primary">Book a Free Demo Class</a>
        </div>
      </div>
    </section>
  );
}
