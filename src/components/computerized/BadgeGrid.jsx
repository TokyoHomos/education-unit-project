import { useLang } from '../../context/LanguageContext';
import { CONTENT } from '../../data/translations';

const ICONS = ['🔲','🧠','💾','🎮','💿','⚡','🏗️','🥇'];

export default function BadgeGrid() {
  const { lang } = useLang();
  const c = CONTENT[lang].comp.badges;

  return (
    <div className="interactive-board fade-in-up delay-5">
      <div className="board-title"><span>🏆</span> {c.title}</div>
      <div className="badge-grid" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
        {c.items.map((b, i) => (
          <div key={b.label} className={`badge-item ${b.earned?'earned':'locked'}`}>
            <span className="badge-icon">{ICONS[i]}</span>
            <span>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
