import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { CONTENT } from '../../data/translations';

const HS_CONFIGS = [
  { id:'cpu',  cls:'hs-cpu',  color:'var(--neon-blue)',   vertical:false },
  { id:'ram1', cls:'hs-ram1', color:'var(--neon-purple)', vertical:true  },
  { id:'ram2', cls:'hs-ram2', color:'var(--neon-purple)', vertical:true  },
  { id:'gpu',  cls:'hs-gpu',  color:'var(--neon-green)',  vertical:false },
  { id:'ssd',  cls:'hs-ssd',  color:'var(--neon-amber)',  vertical:false },
];

export default function MotherboardDiagram() {
  const [selected, setSelected] = useState(null);
  const { lang } = useLang();
  const hotspots = CONTENT[lang].comp.hotspots;
  const items = HS_CONFIGS.map((cfg, i) => ({ ...cfg, ...hotspots[i] }));

  function handleClick(item) {
    setSelected(prev => prev?.id === item.id ? null : item);
  }

  return (
    <div className="interactive-board fade-in-up delay-1">
      <div className="board-title">
        <span>◉</span>{lang === 'ar' ? 'لوحة أم تفاعلية — انقر المكونات للاستكشاف' : 'Interactive Motherboard — Click Components to Explore'}
      </div>

      <div className="board-diagram" id="board">

        {/* ── PCB decorative traces ── */}
        <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}} preserveAspectRatio="none">
          {/* Horizontal traces */}
          <line x1="0"   y1="195" x2="100%" y2="195" stroke="rgba(0,212,255,0.07)" strokeWidth="1"/>
          <line x1="0"   y1="245" x2="100%" y2="245" stroke="rgba(0,212,255,0.05)" strokeWidth="1"/>
          <line x1="0"   y1="135" x2="100%" y2="135" stroke="rgba(192,132,252,0.06)" strokeWidth="1"/>
          {/* Vertical traces */}
          <line x1="200" y1="0"   x2="200"  y2="100%" stroke="rgba(0,212,255,0.06)" strokeWidth="1"/>
          <line x1="320" y1="0"   x2="320"  y2="100%" stroke="rgba(0,212,255,0.04)" strokeWidth="1"/>
          <line x1="440" y1="0"   x2="440"  y2="100%" stroke="rgba(192,132,252,0.05)" strokeWidth="1"/>
          {/* Diagonal connector CPU→RAM */}
          <line x1="175" y1="135" x2="210" y2="80"  stroke="rgba(0,212,255,0.12)" strokeWidth="1" strokeDasharray="4,4"/>
          {/* CPU→GPU vertical */}
          <line x1="115" y1="195" x2="115" y2="230" stroke="rgba(0,255,136,0.12)" strokeWidth="1.5" strokeDasharray="4,3"/>
          {/* SSD trace */}
          <line x1="115" y1="265" x2="115" y2="290" stroke="rgba(255,170,0,0.12)" strokeWidth="1" strokeDasharray="3,3"/>

          {/* Via dots */}
          {[[180,60],[320,140],[440,80],[280,260],[500,180],[380,310]].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r="3" fill="none" stroke="rgba(0,212,255,0.2)" strokeWidth="1"/>
          ))}
          {[[180,60],[320,140],[440,80],[280,260],[500,180],[380,310]].map(([cx,cy],i)=>(
            <circle key={`f${i}`} cx={cx} cy={cy} r="1.5" fill="rgba(0,212,255,0.25)"/>
          ))}
        </svg>

        {/* ── Decorative chips ── */}
        <div style={{position:'absolute',top:30,right:60,width:60,height:40,background:'rgba(0,212,255,0.04)',border:'1px solid rgba(0,212,255,0.15)',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',zIndex:2}}>
          <span style={{fontFamily:"'Orbitron',monospace",fontSize:7,color:'rgba(0,212,255,0.4)',letterSpacing:1}}>BIOS</span>
        </div>
        <div style={{position:'absolute',top:30,right:140,width:50,height:35,background:'rgba(192,132,252,0.04)',border:'1px solid rgba(192,132,252,0.12)',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',zIndex:2}}>
          <span style={{fontFamily:"'Orbitron',monospace",fontSize:7,color:'rgba(192,132,252,0.4)',letterSpacing:1}}>PCH</span>
        </div>
        <div style={{position:'absolute',bottom:30,right:40,width:80,height:25,background:'rgba(0,255,136,0.03)',border:'1px solid rgba(0,255,136,0.1)',borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center',zIndex:2}}>
          <span style={{fontFamily:"'Orbitron',monospace",fontSize:7,color:'rgba(0,255,136,0.35)',letterSpacing:1}}>24-PIN ATX</span>
        </div>
        <div style={{position:'absolute',bottom:30,right:140,width:55,height:25,background:'rgba(255,170,0,0.03)',border:'1px solid rgba(255,170,0,0.1)',borderRadius:4,display:'flex',alignItems:'center',justifyContent:'center',zIndex:2}}>
          <span style={{fontFamily:"'Orbitron',monospace",fontSize:7,color:'rgba(255,170,0,0.35)',letterSpacing:1}}>USB 3.2</span>
        </div>

        {/* ── CPU socket area ── */}
        <div style={{position:'absolute',top:55,left:30,width:160,height:160,border:'1px dashed rgba(0,212,255,0.1)',borderRadius:8,zIndex:1}}/>

        {/* ── Actual clickable hotspots ── */}
        {items.map(item => (
          <div key={item.id}
            className={`hotspot ${item.cls}${selected?.id===item.id?' active':''}`}
            onClick={() => handleClick(item)}
            style={{zIndex:3}}
          >
            <span className="hs-label" style={item.vertical?{writingMode:'vertical-rl',textOrientation:'mixed'}:{}}>
              {item.label}
            </span>
            <div className="hotspot-ring" style={{color:item.color}}/>
          </div>
        ))}

        {/* ── Board label ── */}
        <div style={{position:'absolute',bottom:10,left:16,fontFamily:"'Orbitron',monospace",fontSize:8,color:'rgba(0,212,255,0.2)',letterSpacing:2,zIndex:2}}>
          Z790 ATX REV 2.0
        </div>
        <div style={{position:'absolute',top:10,right:10,fontFamily:"'Orbitron',monospace",fontSize:7,color:'rgba(255,255,255,0.1)',letterSpacing:1,zIndex:2}}>
          {lang==='ar'?'انقر أي مكون':'CLICK ANY COMPONENT'}
        </div>
      </div>

      {/* ── Info panel ── */}
      {selected ? (
        <div style={{marginTop:16,padding:'16px 20px',background:`${selected.color}08`,border:`1px solid ${selected.color}25`,borderRadius:12,display:'flex',alignItems:'flex-start',gap:14,transition:'all 0.3s'}}>
          <span style={{fontSize:30,lineHeight:1}}>{selected.info.icon}</span>
          <div>
            <strong style={{fontFamily:"'Orbitron',monospace",fontSize:12,color:selected.color,display:'block',marginBottom:6}}>
              {selected.info.name}
            </strong>
            <p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>
              {selected.info.content}
            </p>
          </div>
        </div>
      ) : (
        <div style={{marginTop:14,padding:'12px 16px',background:'rgba(255,255,255,0.02)',border:'1px dashed rgba(255,255,255,0.06)',borderRadius:10,textAlign:'center',color:'var(--text-muted)',fontSize:12,fontFamily:"'Orbitron',monospace",letterSpacing:1}}>
          {lang==='ar'?' ← انقر مكوناً على اللوحة لمعرفة تفاصيله':'← CLICK A COMPONENT ON THE BOARD TO SEE DETAILS'}
        </div>
      )}
    </div>
  );
}
