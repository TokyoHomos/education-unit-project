import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle } = useLang();
  const n = T[lang].nav;

  const NAV_LINKS = [
    { to: '/',                label: n.home },
    { to: '/traditional',     label: n.traditional },
    { to: '/computerized',    label: n.computerized },
    { to: '/ai-learning',     label: n.aiLearning },
    { to: '/3d-lab',          label: n.lab3d },
    { to: '/assessment',      label: n.assessment },
    { to: '/learning-design', label: lang === 'ar' ? 'تخطيتات الدروس' : 'Lessons Plan' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">⬡</span>
          <span className="logo-text">NeuralCore</span>
          <span className="logo-badge">EDU</span>
        </div>

        <div className="nav-links">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-cta">
          {/* Language Toggle */}
          <button className="lang-toggle" onClick={toggle} title="Switch Language">
            <span className={`lang-opt ${lang === 'en' ? 'lang-active' : ''}`}>EN</span>
            <span className="lang-divider" />
            <span className={`lang-opt ${lang === 'ar' ? 'lang-active' : ''}`}>عربي</span>
          </button>
          <button className="btn-ghost">{n.signIn}</button>
          <button className="btn-primary">{n.getStarted}</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(o => !o)}>☰</button>
      </div>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(link => (
          <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setMobileOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <button className="lang-toggle" onClick={toggle} style={{ margin: '8px 0' }}>
          <span className={`lang-opt ${lang === 'en' ? 'lang-active' : ''}`}>EN</span>
          <span className="lang-divider" />
          <span className={`lang-opt ${lang === 'ar' ? 'lang-active' : ''}`}>عربي</span>
        </button>
      </div>
    </nav>
  );
}
