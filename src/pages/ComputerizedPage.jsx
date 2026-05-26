import { useLang } from '../context/LanguageContext';
import { T, CONTENT } from '../data/translations';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/ui/PageHero';
import MotherboardDiagram from '../components/computerized/MotherboardDiagram';
import DragDropActivity from '../components/computerized/DragDropActivity';
import MatchingGame from '../components/computerized/MatchingGame';
import BadgeGrid from '../components/computerized/BadgeGrid';
import Toast from '../components/ui/Toast';

export default function ComputerizedPage() {
  const { lang } = useLang();
  const p  = T[lang].pages.computerized;
  const c  = CONTENT[lang].comp;

  return (
    <PageLayout>
      <PageHero tag={p.tag} title={`💻 <span class='gradient-text'>${p.title}</span>`} subtitle={p.subtitle} />

      <div style={{maxWidth:1400,margin:'0 auto',padding:'0 24px 20px'}}>
        <div className="xp-bar-wrap">
          <div className="xp-row">
            <span className="xp-label">{c.xpTitle}</span>
            <span className="xp-value">{c.xpVal}</span>
          </div>
          <div className="xp-bar"><div className="xp-bar-fill" style={{width:'67%'}} /></div>
        </div>
      </div>

      <div className="comp-layout">
        <main>
          <MotherboardDiagram />

          <div className="video-card fade-in-up delay-2">
            <div className="video-placeholder">
              <div className="video-play">▶</div>
              <div className="video-label">{c.video.label}</div>
              <div style={{fontSize:11,color:'var(--text-muted)',position:'relative',zIndex:1}}>{c.video.duration}</div>
            </div>
            <div className="video-info">
              <span style={{fontSize:22}}>🎬</span>
              <div>
                <div style={{fontSize:14,fontWeight:600,marginBottom:2}}>{c.video.title}</div>
                <div style={{fontSize:12,color:'var(--text-muted)'}}>{c.video.sub}</div>
              </div>
              <div style={{marginLeft:'auto',display:'flex',gap:8}}>
                <button className="btn-ghost" style={{fontSize:12,padding:'7px 14px'}}>{c.video.btnT}</button>
                <button className="btn-primary" style={{fontSize:12,padding:'7px 14px'}}>{c.video.btnW}</button>
              </div>
            </div>
          </div>

          <DragDropActivity />
          <MatchingGame />
          <BadgeGrid />
        </main>

        <aside>
          <div className="glass-card" style={{padding:22,borderRadius:16,marginBottom:16,textAlign:'center'}}>
            <div style={{fontSize:48,marginBottom:8}}>⚡</div>
            <div style={{fontFamily:"'Orbitron',monospace",fontSize:22,fontWeight:800,color:'var(--neon-cyan)'}}>2,340</div>
            <div style={{fontSize:11,color:'var(--text-muted)',fontFamily:"'Orbitron',monospace",letterSpacing:1}}>{c.sidebar.xpLabel}</div>
            <div style={{margin:'14px 0',height:1,background:'var(--glass-border)'}} />
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,textAlign:'center'}}>
              <div>
                <div style={{fontFamily:"'Orbitron',monospace",fontSize:18,fontWeight:700,color:'var(--neon-blue)'}}>4</div>
                <div style={{fontSize:11,color:'var(--text-muted)'}}>{c.sidebar.levelLabel}</div>
              </div>
              <div>
                <div style={{fontFamily:"'Orbitron',monospace",fontSize:18,fontWeight:700,color:'var(--neon-green)'}}>🔥 7</div>
                <div style={{fontSize:11,color:'var(--text-muted)'}}>{c.sidebar.streakLabel}</div>
              </div>
            </div>
          </div>

          <div className="glass-card" style={{padding:20,borderRadius:16,marginBottom:16}}>
            <div className="progress-title">{c.sidebar.logTitle}</div>
            <div style={{display:'flex',flexDirection:'column',gap:10}}>
              {c.activityLog.map(item => (
                <div key={item.title} style={{display:'flex',gap:10,alignItems:'center',fontSize:12,color:'var(--text-secondary)'}}>
                  <span style={{fontSize:16}}>{item.icon}</span>
                  <div>
                    <div style={{fontWeight:500}}>{item.title}</div>
                    <div style={{color:'var(--text-muted)',fontSize:11}}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <Toast />
    </PageLayout>
  );
}
