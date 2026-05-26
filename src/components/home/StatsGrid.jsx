import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';
import SectionHeader from '../ui/SectionHeader';

const ICONS   = ['📖','🧊','✦','📈'];
const COLORS  = ['var(--neon-blue)','var(--neon-cyan)','var(--neon-purple)','var(--neon-green)'];
const COUNTS  = [48, 12, 8, 94];
const DELAYS  = ['delay-1','delay-2','delay-3','delay-4'];

export default function StatsGrid() {
  const { lang } = useLang();
  const s = T[lang].stats;

  return (
    <section className="section">
      <div className="container">
        <SectionHeader tag={s.tag} title={`<span class="gradient-text-2">${s.title}</span>`} subtitle={s.subtitle} />
        <div className="stats-grid">
          {s.labels.map((label, i) => (
            <div key={label} className={`glass-card stat-card fade-in-up ${DELAYS[i]}`}>
              <span className="stat-icon" style={{ color: COLORS[i] }}>{ICONS[i]}</span>
              <span className="stat-number" data-count={COUNTS[i]}>0</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
