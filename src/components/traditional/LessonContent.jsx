import LessonDiagram from './LessonDiagram';

export default function LessonContent({ lesson }) {
  const { body } = lesson;

  return (
    <div className="lesson-card fade-in-up">
      <div className="lesson-header">
        <div className="lesson-num">{String(lesson.id).padStart(2, '0')}</div>
        <div className="lesson-meta">
          <div className="lesson-title">{lesson.title}</div>
          <div className="lesson-info">
            <span>⏱ {lesson.duration}</span>
            <span>📖 {lesson.level}</span>
            <span>✦ {lesson.sections} Sections</span>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 12, padding: 20, marginBottom: 24 }}>
        <div style={{ fontFamily: "'Orbitron',monospace", fontSize: 10, fontWeight: 700, letterSpacing: 2, color: 'var(--neon-blue)', textTransform: 'uppercase', marginBottom: 14 }}>
          🎯 Learning Objectives
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {lesson.objectives.map(obj => (
            <div key={obj} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--neon-green)' }}>✓</span> {obj}
            </div>
          ))}
        </div>
      </div>

      <div className="lesson-body">
        <h4>{body.heading}</h4>
        <p>{body.intro}</p>

        <LessonDiagram lessonId={lesson.id} />

        <h4>Core Components</h4>
        <div className="concept-grid">
          {body.concepts.map(c => (
            <div key={c.name} className="concept-item">
              <strong>{c.icon} {c.name}</strong>
              <span>{c.desc}</span>
            </div>
          ))}
        </div>

        <h4>System Architecture</h4>
        <p dangerouslySetInnerHTML={{ __html: body.busText }} />

        {/* Instructor Note */}
        <div style={{ background: 'rgba(255,170,0,0.04)', border: '1px solid rgba(255,170,0,0.2)', borderRadius: 12, padding: 18, margin: '20px 0' }}>
          <div style={{ fontFamily: "'Orbitron',monospace", fontSize: 10, fontWeight: 700, letterSpacing: 2, color: 'var(--neon-amber)', marginBottom: 10 }}>
            ✏️ INSTRUCTOR NOTE
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
            {body.instructorNote}
          </p>
        </div>

        {/* Summary */}
        <div style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.05),rgba(124,58,237,0.05))', border: '1px solid rgba(0,212,255,0.15)', borderRadius: 12, padding: 20, marginTop: 24 }}>
          <div style={{ fontFamily: "'Orbitron',monospace", fontSize: 10, fontWeight: 700, letterSpacing: 2, color: 'var(--neon-cyan)', marginBottom: 12 }}>
            📋 LESSON SUMMARY
          </div>
          <ul style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: 20, listStyle: 'disc' }}>
            {body.summary.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
