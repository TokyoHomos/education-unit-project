import { useState } from 'react';
import { showToast } from '../ui/Toast';
import { useLang } from '../../context/LanguageContext';
import { CONTENT } from '../../data/translations';

const IDS = ['GPU','CPU','RAM','SSD'];
const ICONS = ['🎮','🧠','💾','💿'];

export default function DragDropActivity() {
  const { lang } = useLang();
  const c = CONTENT[lang].comp.drag;
  const [filled, setFilled] = useState({});
  const [dragging, setDragging] = useState(null);

  const components = IDS.map((id, i) => ({ id, icon: ICONS[i], label: c.components[i] }));
  const slots      = IDS.map((id, i) => ({ id, label: c.slots[i] }));

  function handleDrop(slotId) {
    if (!dragging) return;
    if (dragging === slotId) {
      setFilled(prev => {
        const next = { ...prev, [slotId]: dragging };
        if (Object.keys(next).length === slots.length)
          setTimeout(() => showToast(c.allDone, '', 'correct'), 400);
        return next;
      });
      showToast(c.correct, c.correctMsg, 'correct');
    } else {
      showToast(c.wrong, c.wrongMsg, 'wrong');
    }
    setDragging(null);
  }

  return (
    <div className="interactive-board fade-in-up delay-3">
      <div className="board-title"><span>⟳</span> {c.title}</div>
      <p style={{ fontSize:13, color:'var(--text-muted)', marginBottom:20 }}>{c.subtitle}</p>
      <div className="drag-drop-area">
        <div>
          <div className="drag-pool-title">{c.poolTitle}</div>
          <div className="drag-pool">
            {components.map(comp => {
              const placed = Object.values(filled).includes(comp.id);
              return (
                <div key={comp.id} className={`drag-item${dragging===comp.id?' dragging':''}`}
                  style={placed?{opacity:0.3,pointerEvents:'none'}:{}}
                  draggable onDragStart={() => setDragging(comp.id)} onDragEnd={() => setDragging(null)}>
                  {comp.icon} <span>{comp.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="drag-pool-title">{c.slotTitle}</div>
          <div className="drop-zones">
            {slots.map(slot => (
              <div key={slot.id} className={`drop-zone${filled[slot.id]?' drop-correct':''}`}
                onDragOver={e => e.preventDefault()} onDrop={() => handleDrop(slot.id)}>
                {filled[slot.id] ? components.find(x => x.id===filled[slot.id])?.label : slot.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="btn-primary" style={{marginTop:16,fontSize:12}} onClick={() => setFilled({})}>
        {c.reset}
      </button>
    </div>
  );
}
