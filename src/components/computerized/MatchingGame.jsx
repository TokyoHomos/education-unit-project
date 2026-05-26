import { useState } from 'react';
import { showToast } from '../ui/Toast';
import { useLang } from '../../context/LanguageContext';
import { CONTENT } from '../../data/translations';

const LEFT_ICONS  = ['🧠','💾','🎮','💿','⚡'];
const RIGHT_ICONS = ['🖼️','🔌','⚙️','📂','⚡'];
const ANSWER_MAP  = [0,1,2,3,4]; // right[i].id matches left[i]

export default function MatchingGame() {
  const { lang } = useLang();
  const c = CONTENT[lang].comp.match;

  // Build pairs from translated labels
  const left  = c.left.map((label, i) => ({ id: i, icon: LEFT_ICONS[i],  label }));
  // Shuffle right display order but keep answer IDs
  const rightOrder = [2, 4, 0, 3, 1]; // GPU, PSU, CPU, SSD, RAM display order
  const right = rightOrder.map(i => ({ id: i, icon: RIGHT_ICONS[i], label: c.right[i] }));

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matched, setMatched] = useState(new Set());
  const [wrong, setWrong] = useState(null);

  function selectLeft(id) {
    if (matched.has(id)) return;
    setSelectedLeft(id);
  }

  function selectRight(id) {
    if (!selectedLeft && selectedLeft !== 0) return;
    if (matched.has(id)) return;
    if (selectedLeft === id) {
      setMatched(prev => new Set([...prev, id]));
      showToast(c.correct, c.correctM, 'correct');
    } else {
      setWrong(id);
      setTimeout(() => setWrong(null), 800);
      showToast(c.wrong, c.wrongM, 'wrong');
    }
    setSelectedLeft(null);
  }

  return (
    <div className="interactive-board fade-in-up delay-4">
      <div className="board-title"><span>⚡</span> {c.title}</div>
      <p style={{fontSize:13,color:'var(--text-muted)',marginBottom:4}}>{c.subtitle}</p>
      <div className="match-grid">
        <div className="match-col">
          {left.map(item => (
            <div key={item.id} className={`match-item${selectedLeft===item.id?' selected':''}${matched.has(item.id)?' matched':''}`}
              onClick={() => selectLeft(item.id)}>
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
        </div>
        <div className="match-col">
          {right.map(item => (
            <div key={item.id} className={`match-item${matched.has(item.id)?' matched':''}${wrong===item.id?' selected':''}`}
              onClick={() => selectRight(item.id)}
              style={wrong===item.id?{borderColor:'#ef4444'}:{}}>
              <span>{item.icon}</span> {item.label}
            </div>
          ))}
        </div>
      </div>
      {matched.size === left.length && (
        <div style={{marginTop:14,fontFamily:"'Orbitron',monospace",fontSize:12,color:'var(--neon-green)',letterSpacing:1}}>
          {c.matched}
        </div>
      )}
    </div>
  );
}
