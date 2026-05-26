import { useLang } from '../../context/LanguageContext';
import { T, LEARN_CARDS_AR } from '../../data/translations';
import { LEARN_CARDS } from '../../data/homeData';
import SectionHeader from '../ui/SectionHeader';

function LearnCard({ icon, title, desc, tag, iconStyle, tagStyle, delay }) {
  return (
    <div className={`learn-card glow-border-anim fade-in-up ${delay}`}>
      <div className="learn-card-icon" style={iconStyle}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="learn-card-tag" style={tagStyle}>{tag}</span>
    </div>
  );
}

export default function LearnGrid() {
  const { lang } = useLang();
  const l = T[lang].learn;
  const cards = lang === 'ar' ? LEARN_CARDS_AR : LEARN_CARDS;

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          tag={l.tag}
          title={`${l.title.split(' ').slice(0,-1).join(' ')} <span class="gradient-text">${l.title.split(' ').slice(-1)}</span>`}
          subtitle={l.subtitle}
        />
        <div className="learn-grid">
          {cards.map(card => <LearnCard key={card.title} {...card} />)}
        </div>
      </div>
    </section>
  );
}
