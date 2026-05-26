import { useLang } from '../context/LanguageContext';
import { T, CONTENT } from '../data/translations';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/ui/PageHero';
import Toast from '../components/ui/Toast';

const COMP_ICONS  = ['🧠','🎮','💾','💿','⚡'];
const COMP_COLORS = ['var(--neon-blue)','var(--neon-green)','var(--neon-purple)','var(--neon-amber)','var(--neon-cyan)'];

export default function Generative3DPage() {
  const { lang } = useLang();
  const p  = T[lang].pages.lab3d;
  const lb = CONTENT[lang].lab;

  const steps = lb.assemblySteps.map((label, i) => ({
    label, done: i < 2, active: i === 2,
  }));
  const doneCt = steps.filter(s => s.done).length;

  return (
    <PageLayout>
      <div className="lab-ambient" />
      <PageHero tag={p.tag} title={`🧬 <span class='gradient-text'>${p.title}</span>`} subtitle={p.subtitle} />

      <div className="lab-layout">
        <main>
          <div className="lab-viewport fade-in-up delay-1">
            <div className="lab-header">
              <div style={{width:8,height:8,borderRadius:'50%',background:'var(--neon-green)',boxShadow:'0 0 8px var(--neon-green)',animation:'pulse 2s infinite'}} />
              <span className="lab-title">{lb.viewport}</span>
              <div style={{marginLeft:'auto',display:'flex',gap:12,alignItems:'center'}}>
                <div className="lab-status">
                  <div style={{width:6,height:6,borderRadius:'50%',background:'var(--neon-green)',boxShadow:'0 0 8px var(--neon-green)'}} />
                  {lb.aiOnline}
                </div>
                <button className="btn-ghost" style={{fontSize:11,padding:'6px 14px'}}>{lb.reset}</button>
                <button className="btn-primary" style={{fontSize:11,padding:'6px 14px'}}>{lb.assembly}</button>
              </div>
            </div>

            <div className="lab-scene">
              <div className="corner corner-tl" /><div className="corner corner-tr" />
              <div className="corner corner-bl" /><div className="corner corner-br" />
              <div className="scan-overlay" /><div className="scan-line" />

              <div className="hud-top">
                <div className="hud-panel">
                  <div className="hud-row">{lb.render}    <span className="hud-val">WebGL 2.0</span></div>
                  <div className="hud-row">{lb.polygons}  <span className="hud-val">2.4M</span></div>
                  <div className="hud-row">{lb.components}<span className="hud-val green">5 / 5</span></div>
                </div>
                <div className="hud-panel">
                  <div className="hud-row">{lb.aiStatus}  <span className="hud-val green">● {lb.aiOnline}</span></div>
                  <div className="hud-row">{lb.mode}       <span className="hud-val purple">{lb.modeVal}</span></div>
                </div>
              </div>

              <div className="lab-motherboard">
                <div className="lab-component lab-cpu">
                  <div className="lab-comp-inner">🧠<br/><span>CPU</span></div>
                  <div className="holo-ring" style={{width:80,height:80,top:-10,left:-10}} />
                  <div className="holo-ring" style={{width:100,height:100,top:-20,left:-20,animationDelay:'0.7s'}} />
                </div>
                <div className="lab-component lab-gpu"><div className="lab-comp-inner">🎮<br/><span>GPU</span></div></div>
                <div className="lab-component lab-ram"><div className="lab-comp-inner">💾<br/><span>RAM</span></div></div>
                <div className="lab-component lab-nvme"><div className="lab-comp-inner">💿<br/><span>NVMe</span></div></div>
                <div className="pcb-glow-trace" style={{top:'45%',left:'10%',width:'80%'}} />
                <div className="pcb-glow-trace" style={{top:'60%',left:'5%',width:'60%',animationDelay:'1.5s'}} />
              </div>

              <div className="comp-toolbar">
                {lb.components3d.map((c, i) => (
                  <div key={c.label} className="comp-btn">
                    <span className="comp-btn-icon">{COMP_ICONS[i]}</span>
                    <span style={{color:COMP_COLORS[i]}}>{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:16,marginBottom:24}}>
            {lb.components3d.map((c, i) => (
              <div key={c.label} className="glass-card fade-in-up" style={{padding:20,borderRadius:16,borderColor:`${COMP_COLORS[i]}30`}}>
                <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
                  <span style={{fontSize:28}}>{COMP_ICONS[i]}</span>
                  <div>
                    <div style={{fontFamily:"'Orbitron',monospace",fontSize:12,fontWeight:700,color:COMP_COLORS[i]}}>{c.label}</div>
                    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:4}}>
                      {c.specs.map(s => (
                        <span key={s} style={{fontSize:10,background:`${COMP_COLORS[i]}15`,color:COMP_COLORS[i],border:`1px solid ${COMP_COLORS[i]}30`,borderRadius:4,padding:'2px 6px',fontFamily:"'Orbitron',monospace"}}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>{c.desc}</p>
              </div>
            ))}
          </div>
        </main>

        <aside>
          <div className="ai-voice-box" style={{marginBottom:16}}>
            <div className="ai-voice-header">
              <div className="voice-wave">
                {[8,16,24,16,8].map((h,i)=><div key={i} className="wave-bar" style={{height:h,animationDelay:`${i*0.1}s`}} />)}
              </div>
              <div className="ai-voice-title" style={{marginLeft:8}}>{lb.voiceGuide}</div>
            </div>
            <p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>{lb.voiceText}</p>
          </div>

          <div className="glass-card" style={{padding:20,borderRadius:16,marginBottom:16}}>
            <div className="progress-title">{lb.assemblyTitle}</div>
            <div className="task-steps">
              {steps.map(step => (
                <div key={step.label} className={`task-step${step.done?' done':step.active?' active':''}`}>
                  <div className="step-dot" />{step.label}
                </div>
              ))}
            </div>
            <div style={{marginTop:14,height:6,background:'rgba(255,255,255,0.04)',borderRadius:3,overflow:'hidden'}}>
              <div style={{height:'100%',width:`${(doneCt/steps.length)*100}%`,background:'linear-gradient(90deg,var(--neon-green),var(--neon-blue))',borderRadius:3}} />
            </div>
            <div style={{fontSize:11,color:'var(--text-muted)',marginTop:6,fontFamily:"'Orbitron',monospace"}}>
              {doneCt} / {steps.length}
            </div>
          </div>

          <div style={{background:'linear-gradient(135deg,rgba(0,212,255,0.05),rgba(124,58,237,0.05))',border:'1px solid rgba(0,212,255,0.15)',borderRadius:14,padding:18,textAlign:'center'}}>
            <div style={{fontSize:36,marginBottom:8}}>🏆</div>
            <div style={{fontFamily:"'Orbitron',monospace",fontSize:13,fontWeight:700,color:'var(--neon-blue)'}}>{lb.rewardTitle}</div>
            <div style={{fontSize:12,color:'var(--text-muted)',margin:'8px 0 14px'}}>{lb.rewardSub}</div>
            <button className="btn-primary" style={{width:'100%'}}>{lb.rewardBtn}</button>
          </div>
        </aside>
      </div>
      <Toast />
    </PageLayout>
  );
}
