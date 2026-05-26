import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';
import { HERO_COMPONENTS } from '../../data/homeData';

function FloatComponent({ cls, icon, name, spec }) {
  return (
    <div className={`float-component ${cls}`}>
      <span className="float-icon">{icon}</span>
      <div className="float-label">
        <span className="float-name">{name}</span>
        <span className="float-spec">{spec}</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { lang } = useLang();
  const h = T[lang].hero;

  const HERO_STATS = [
    { count: 48,  suffix: '',  label: h.statLessons },
    { count: 12,  suffix: '',  label: h.statModels },
    { count: 8,   suffix: '',  label: h.statAI },
    { count: 94,  suffix: '%', label: h.statPass },
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge fade-in-up delay-1">
          <span className="hero-badge-dot" />
          {h.badge}
        </div>

        <h1 className="hero-title fade-in-up delay-2">
          <span className="gradient-text">{h.titleLine1}</span><br />
          {h.titleLine2}<br />{h.titleLine3}
        </h1>

        <p className="hero-subtitle fade-in-up delay-3">{h.subtitle}</p>

        <div className="hero-buttons fade-in-up delay-4">
          <Link to="/traditional" className="btn-hero btn-hero-primary"><span>▶</span> {h.btnStart}</Link>
          <Link to="/3d-lab"      className="btn-hero btn-hero-secondary"><span>◈</span> {h.btnLab}</Link>
          <Link to="/ai-learning" className="btn-hero btn-hero-outline"><span>✦</span> {h.btnAI}</Link>
        </div>

        <div className="hero-stats fade-in-up delay-5">
          {HERO_STATS.map(s => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-number" data-count={s.count} data-suffix={s.suffix}>
                {s.count}{s.suffix}
              </span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual fade-in delay-2">
        <div className="orb orb-1" /><div className="orb orb-2" />
        <div className="motherboard-container">
          {HERO_COMPONENTS.map(c => <FloatComponent key={c.name} {...c} />)}
          <div className="motherboard-board">
            <div className="pcb-trace pcb-trace-h trace-h1" /><div className="pcb-trace pcb-trace-h trace-h2" /><div className="pcb-trace pcb-trace-h trace-h3" />
            <div className="pcb-trace pcb-trace-v trace-v1" /><div className="pcb-trace pcb-trace-v trace-v2" /><div className="pcb-trace pcb-trace-v trace-v3" />
            <div className="scan-line" />
            <div className="mb-component mb-cpu"><span style={{ position:'relative',zIndex:5,fontFamily:"'Orbitron',monospace",fontSize:9,fontWeight:700,letterSpacing:1 }}>CPU</span></div>
            {['D1','D2','D3','D4'].map((label,i) => <div key={label} className={`mb-component mb-ram mb-ram-${i+1}`}><span className="mb-label">{label}</span></div>)}
            <div className="mb-component mb-pcie"><span style={{position:'relative',zIndex:1}}>PCIe x16 — GPU</span></div>
            <div className="mb-component mb-nvme"><span style={{position:'relative',zIndex:1}}>M.2 NVMe</span></div>
            <div className="mb-component mb-psu-connector" style={{position:'absolute'}}>
              {Array.from({length:12}).map((_,i) => <div key={i} className="psu-pin" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
