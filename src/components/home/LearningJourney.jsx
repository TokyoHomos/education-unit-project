import { useNavigate } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';

const ROUTES = ['/', '/traditional', '/computerized', '/ai-learning', '/3d-lab', '/assessment'];
const ICONS  = ['🏠','📚','💻','🤖','🧬','🏆'];
const STATUS = ['completed','completed','active','','',''];

export default function LearningJourney() {
  const navigate = useNavigate();
  const { lang } = useLang();
  const j = T[lang].journey;

  return (
    <section className="journey-section">
      <div className="container">
        <div className="section-tag" style={{ marginBottom: 32 }}>
          <span className="dot" /> {j.tag}
        </div>
        <div className="journey-track">
          <div className="journey-line"><div className="journey-line-animated" /></div>
          <div className="journey-steps">
            {j.steps.map((label, i) => (
              <div key={label} className={`journey-step ${STATUS[i]}`} onClick={() => navigate(ROUTES[i])} style={{ cursor: 'pointer' }}>
                <div className="step-node">{ICONS[i]}</div>
                <span className="step-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
