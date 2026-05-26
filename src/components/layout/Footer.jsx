import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';
import { FOOTER_LINKS } from '../../data/homeData';

export default function Footer() {
  const { lang } = useLang();
  const f = T[lang].footer;

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span style={{ color:'var(--neon-blue)',filter:'drop-shadow(0 0 8px var(--neon-blue))' }}>⬡</span>
            NeuralCore
          </div>
          <p className="footer-desc">{f.desc}</p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <div className="footer-col-title">{f.sections[section] || section}</div>
            <div className="footer-links">
              {links.map(link => <Link key={link.label} to={link.to}>{link.label}</Link>)}
            </div>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>{f.copy}</span>
        <span style={{ color:'var(--neon-blue)' }}>⬡ NeuralCore EDU</span>
      </div>
    </footer>
  );
}
