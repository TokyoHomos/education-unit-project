import { useLang } from '../../context/LanguageContext';
import { T } from '../../data/translations';
import SectionHeader from '../ui/SectionHeader';
import { COMPARISON_ROWS } from '../../data/homeData';

const CHECK = {
  yes:  <span className="check-yes">✓</span>,
  no:   <span className="check-no">—</span>,
  part: <span className="check-part">◑</span>,
};

export default function ComparisonTable() {
  const { lang } = useLang();
  const c = T[lang].compare;

  return (
    <section className="section">
      <div className="container-wide" style={{ padding: '0 24px' }}>
        <SectionHeader tag={c.tag} title={`${c.title.split(' ').slice(0,-1).join(' ')} <span class="gradient-text">${c.title.split(' ').slice(-1)}</span>`} subtitle={c.subtitle} />
        <div className="comparison-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{c.feature}</th>
                <th>📚 {lang === 'ar' ? 'تقليدي' : 'Traditional'}</th>
                <th>💻 {lang === 'ar' ? 'محوسب' : 'Computerized'}</th>
                <th>🤖 {lang === 'ar' ? 'الذكاء الاصطناعي' : 'AI-Based'}</th>
                <th>🧬 {lang === 'ar' ? 'ذكاء + ثلاثي الأبعاد' : 'Gen AI + 3D'}</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.feature}>
                  <td>{c.rows[i]}</td>
                  <td>{CHECK[row.trad]}</td>
                  <td>{CHECK[row.comp]}</td>
                  <td>{CHECK[row.ai]}</td>
                  <td>{CHECK[row.gen]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
