import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';

const VALUES  = ['87%','42','18','2340','7'];
const COLORS  = ['var(--neon-blue)','var(--neon-cyan)','var(--neon-purple)','var(--neon-green)','gold'];
const COUNTS  = [87,42,18,2340,7];
const SUFFIXES= ['%','','','',''];

export default function PerformanceStats() {
  const { lang } = useLang();
  const labels = T[lang].assess.statLabels;

  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16,marginBottom:24}}>
      {labels.map((label, i) => (
        <div key={label} className={`perf-stat glass-card fade-in-up delay-${i+1}`}>
          <span className="perf-stat-num" style={{color:COLORS[i]}} data-count={COUNTS[i]} data-suffix={SUFFIXES[i]}>
            {VALUES[i]}
          </span>
          <span className="perf-stat-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
