import { useLang } from '../context/LanguageContext';
import { T, CONTENT } from '../data/translations';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/ui/PageHero';
import ChatInterface from '../components/ai/ChatInterface';
import AISummary from '../components/ai/AISummary';
import QuizCard from '../components/ui/QuizCard';
import Toast from '../components/ui/Toast';

export default function AILearningPage() {
  const { lang } = useLang();
  const p  = T[lang].pages.aiLearning;
  const ai = CONTENT[lang].aiPage;

  return (
    <PageLayout>
      <PageHero tag={p.tag} title={`🤖 <span class='gradient-text'>${p.title}</span>`} subtitle={p.subtitle} />

      <div className="ai-layout">
        <main>
          <ChatInterface />
          <AISummary />

          <div className="glass-card" style={{padding:28,borderRadius:20,marginBottom:24}}>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20}}>
              <span style={{fontSize:28}}>🎯</span>
              <div>
                <div style={{fontFamily:"'Orbitron',monospace",fontSize:13,fontWeight:700,color:'var(--neon-purple)'}}>{ai.quizTitle}</div>
                <div style={{fontSize:12,color:'var(--text-muted)',marginTop:2}}>{ai.quizSub}</div>
              </div>
              <div className="adaptive-badge" style={{marginLeft:'auto'}}>{ai.adaptive}</div>
            </div>
            <div className="diff-pills">
              {ai.diffLevels.map((level, i) => (
                <div key={level} className={`diff-pill${i===0?' active':''}`}>{level}</div>
              ))}
            </div>
            <QuizCard badge={ai.quizBadge} question={ai.quizQ} options={ai.quizOpts} explanation={ai.quizExp} />
          </div>
        </main>

        <aside>
          <div className="glass-card" style={{padding:20,borderRadius:16,marginBottom:16}}>
            <div className="progress-title">{ai.mastery}</div>
            <div style={{textAlign:'center',padding:'16px 0'}}>
              <div style={{fontFamily:"'Orbitron',monospace",fontSize:42,fontWeight:800,color:'var(--neon-purple)'}}>73%</div>
              <div style={{fontSize:12,color:'var(--text-muted)',marginTop:4}}>{ai.overall}</div>
            </div>
            <div style={{height:8,background:'rgba(255,255,255,0.04)',borderRadius:4,overflow:'hidden',marginTop:8}}>
              <div style={{height:'100%',width:'73%',background:'linear-gradient(90deg,var(--accent-purple),var(--neon-blue))',borderRadius:4}} />
            </div>
          </div>

          <div className="glass-card" style={{padding:20,borderRadius:16,marginBottom:16}}>
            <div className="progress-title">{ai.path}</div>
            <div className="timeline" style={{marginTop:12}}>
              {ai.pathItems.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-item-text" style={{color: i<3?'var(--text-primary)':'var(--text-muted)',display:'flex',alignItems:'center',gap:6}}>
                    {i<3?'✅':'⭕'} {item.label}
                  </div>
                  <div className="timeline-item-time">{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:'rgba(124,58,237,0.05)',border:'1px solid rgba(124,58,237,0.2)',borderRadius:14,padding:18}}>
            <div style={{fontFamily:"'Orbitron',monospace",fontSize:10,fontWeight:700,letterSpacing:2,color:'var(--neon-purple)',marginBottom:10}}>
              {ai.recommend}
            </div>
            <p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.6}}>{ai.recommendText}</p>
          </div>
        </aside>
      </div>
      <Toast />
    </PageLayout>
  );
}
