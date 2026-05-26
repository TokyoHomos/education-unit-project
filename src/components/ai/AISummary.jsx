import { useLang } from '../../context/LanguageContext';
import { CONTENT } from '../../data/translations';

const COLORS = ['var(--neon-blue)','var(--neon-purple)','var(--neon-green)'];

export default function AISummary() {
  const { lang } = useLang();
  const s = CONTENT[lang].chat.summary;

  return (
    <div className="ai-summary fade-in-up delay-2">
      <div className="ai-summary-title">{s.title}</div>
      <h3 style={{fontSize:17,fontWeight:700,fontFamily:"'Space Grotesk',sans-serif",marginBottom:12}}>{s.heading}</h3>
      <p style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.7,marginBottom:16}}>{s.body}</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
        {s.chips.map((chip, i) => (
          <div key={chip.label} style={{background:`${COLORS[i]}10`,border:`1px solid ${COLORS[i]}20`,borderRadius:8,padding:12,textAlign:'center'}}>
            <div style={{fontFamily:"'Orbitron',monospace",fontSize:14,fontWeight:800,color:COLORS[i]}}>{chip.value}</div>
            <div style={{fontSize:11,color:'var(--text-muted)',marginTop:2}}>{chip.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
