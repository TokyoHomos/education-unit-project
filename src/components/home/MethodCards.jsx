import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';
import SectionHeader from '../ui/SectionHeader';

const ROUTES  = ['/traditional','/computerized','/ai-learning','/3d-lab'];
const ICONS   = ['📚','💻','🤖','🧬'];
const COLORS  = ['#60a5fa','var(--neon-cyan)','var(--neon-purple)','var(--neon-green)'];
const CLASSES = ['mc-traditional','mc-computerized','mc-ai','mc-generative'];

export default function MethodCards() {
  const { lang } = useLang();
  const m = T[lang].methods;

  return (
    <section className="section">
      <div className="container">
        <SectionHeader tag={m.tag} title={`${m.title.split(' ').slice(0,-1).join(' ')} <span class="gradient-text">${m.title.split(' ').slice(-1)}</span>`} subtitle={m.subtitle} />
        <div className="method-cards">
          {m.cards.map((card, i) => (
            <Link key={card.title} to={ROUTES[i]} className={`method-card ${CLASSES[i]} glow-border-anim fade-in-up delay-${i+1}`}>
              <span className="method-card-icon" style={{ color: COLORS[i] }}>{ICONS[i]}</span>
              <div className="method-card-title" style={{ color: COLORS[i] }}>{card.title}</div>
              <p className="method-card-desc">{card.desc}</p>
              <span className="method-card-link" style={{ color: COLORS[i] }}>{card.cta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
