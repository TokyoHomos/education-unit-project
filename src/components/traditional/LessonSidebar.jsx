import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';

export default function LessonSidebar({ activeLesson, onSelect, lessons }) {
  const { lang } = useLang();
  const s = T[lang].sidebar;

  return (
    <aside className="sidebar">
      <div className="sidebar-title">{s.modules}</div>
      {lessons.map(lesson => (
        <div
          key={lesson.id}
          className={`sidebar-item${activeLesson === lesson.id ? ' active' : ''}`}
          onClick={() => onSelect(lesson.id)}
        >
          <span className="si-icon">{lesson.icon}</span>
          {lesson.title}
          <span className="si-num">{String(lesson.id).padStart(2, '0')}</span>
        </div>
      ))}

      <div className="sidebar-title" style={{ marginTop: 24 }}>{s.resources}</div>
      {s.resLinks.map(r => (
        <div key={r} className="sidebar-item">
          <span className="si-icon">📋</span> {r}
        </div>
      ))}
    </aside>
  );
}
