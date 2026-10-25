import './StatsBar.css';

const stats = [
  { value: '40+', label: 'Years of Excellence', icon: '🏛️' },
  { value: '1,24,000+', label: 'Students Trained', icon: '🎓' },
  { value: '12,500+', label: 'IIT/NEET Selections', icon: '🏆' },
  { value: '98.4%', label: 'Success Rate', icon: '📈' },
  { value: '1:15', label: 'Faculty-Student Ratio', icon: '👩‍🏫' },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar-inner">
        <div className="stats-heading">
          <h2>The Numbers That Define Our Legacy</h2>
        </div>
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-icon">{s.icon}</span>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
