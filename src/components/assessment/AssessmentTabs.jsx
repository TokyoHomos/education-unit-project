import { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { T, CONTENT } from '../../data/translations';

function AnalyticsPanel({ data }) {
  const scores = [92,78,85,70,88];
  const colors = ['var(--neon-blue)','var(--neon-purple)','var(--neon-cyan)','var(--neon-green)','var(--neon-amber)'];
  return (
    <div>
      <div className="chart-card" style={{marginBottom:20}}>
        <div className="chart-title">{data.analytics.title}</div>
        {data.breakdown.map((label, i) => (
          <div key={label} className="breakdown-row">
            <div className="breakdown-label"><span>{label}</span><span style={{color:colors[i]}}>{scores[i]}%</span></div>
            <div className="breakdown-bar"><div className="breakdown-fill" style={{width:`${scores[i]}%`,background:colors[i]}} /></div>
          </div>
        ))}
      </div>
      <div className="analytics-grid">
        {data.analytics.cards.map(card => (
          <div key={card.label} className="analytics-card">
            <span className="analytics-num" style={{color:card.color}}>{card.value}</span>
            <span className="analytics-lbl">{card.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeaderboardPanel({ data }) {
  return (
    <div className="chart-card">
      <div className="chart-title">{data.analytics.lbTitle}</div>
      {data.leaderboard.map(row => (
        <div key={row.name} className={`lb-row${row.isYou?' you':''}`}>
          <span className="lb-rank">{row.rank}</span>
          <span className="lb-name">{row.name}</span>
          <span className="lb-score" style={{color:row.isYou?'var(--neon-blue)':'var(--text-primary)'}}>{row.score} XP</span>
          {row.badge && <span className="lb-badge">{row.badge}</span>}
        </div>
      ))}
    </div>
  );
}

function AIInsightsPanel({ data }) {
  return (
    <div className="chart-card">
      <div className="chart-title">{data.analytics.aiTitle}</div>
      {data.recs.map(rec => (
        <div key={rec.title} className="ai-rec-card">
          <span className="ai-rec-icon">{rec.icon}</span>
          <div className="ai-rec-body">
            <strong>{rec.title}</strong>
            <span>{rec.desc}</span>
            <span className="ai-rec-badge" style={{background:`${rec.color}15`,color:rec.color,border:`1px solid ${rec.color}40`}}>{rec.badge}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CertificatePanel({ data }) {
  const c = data.cert;
  return (
    <div className="cert-preview">
      <span className="cert-icon">🏆</span>
      <div className="cert-title">{c.title}</div>
      <div className="cert-sub">{c.sub}</div>
      <div className="cert-name">{c.name}</div>
      <p style={{fontSize:13,color:'var(--text-muted)',marginTop:16,position:'relative',zIndex:1}}>{c.note}</p>
      <button className="btn-primary" style={{marginTop:20,position:'relative',zIndex:1}}>{c.btn}</button>
    </div>
  );
}

export default function AssessmentTabs() {
  const [active, setActive] = useState(0);
  const { lang } = useLang();
  const tabs = T[lang].assess.tabs;
  const data = CONTENT[lang].assessContent;

  const panels = [
    <AnalyticsPanel  data={data} />,
    <LeaderboardPanel data={data} />,
    <AIInsightsPanel  data={data} />,
    <CertificatePanel data={data} />,
  ];

  return (
    <>
      <div className="assess-tabs fade-in-up delay-2">
        {tabs.map((tab, i) => (
          <div key={tab} className={`assess-tab${active===i?' active':''}`} onClick={() => setActive(i)}>
            {tab}
          </div>
        ))}
      </div>
      <div className="assess-layout">
        <main>
          <div className="assess-content-panel active">
            {panels[active]}
          </div>
        </main>
      </div>
    </>
  );
}
