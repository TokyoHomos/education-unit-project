import { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../../utils/aiResponses';
import { useLang } from '../../context/LanguageContext';
import { CONTENT, T } from '../../data/translations';

export default function ChatInterface() {
  const { lang } = useLang();
  const c  = CONTENT[lang].chat;
  const ai = T[lang].ai;

  const initialMessages = [
    { id:1, isUser:false, time:'Just now', text: c.initMsg1 },
    { id:2, isUser:false, time:'Just now', text: c.initMsg2, variant:'insight' },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput]       = useState('');
  const [typing, setTyping]     = useState(false);
  const endRef = useRef(null);

  // Reset messages when language changes
  useEffect(() => {
    setMessages([
      { id:1, isUser:false, time:'Just now', text: c.initMsg1 },
      { id:2, isUser:false, time:'Just now', text: c.initMsg2, variant:'insight' },
    ]);
  }, [lang]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior:'smooth' }); }, [messages, typing]);

  function addMessage(text, isUser) {
    const time = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
    setMessages(prev => [...prev, { id:Date.now(), isUser, text, time }]);
  }

  function send(msg) {
    const text = (msg || input).trim();
    if (!text) return;
    setInput('');
    addMessage(text, true);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      addMessage(getAIResponse(text, lang), false);
    }, 1200 + Math.random() * 800);
  }

  return (
    <div className="ai-chat-wrap fade-in-up delay-1" style={{position:'relative',marginBottom:24}}>
      <div className="ai-chat-header">
        <div className="ai-avatar">🤖<div className="ai-status-dot" /></div>
        <div className="ai-chat-info">
          <strong>NOVA — {lang === 'ar' ? 'مدرس ذكي' : 'AI Tutor'}</strong>
          <span>● {ai.online}</span>
        </div>
        <div className="ai-chat-actions">
          <div className="ai-btn" title={c.clearTitle} onClick={() => setMessages([])}>🗑</div>
          <div className="ai-btn" title={c.exportTitle}>⬇</div>
          <div className="ai-btn" title="Settings">⚙</div>
        </div>
      </div>

      <div className="ai-chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className={`chat-msg ${msg.isUser?'user':'ai'} fade-in`}>
            <div className="msg-avatar">{msg.isUser?'👤':'🤖'}</div>
            <div>
              <div className="msg-bubble"
                style={msg.variant==='insight'?{background:'rgba(124,58,237,0.08)',borderColor:'rgba(124,58,237,0.2)'}:{}}
                dangerouslySetInnerHTML={{__html:msg.text}} />
              <div className="msg-time">{msg.time}</div>
            </div>
          </div>
        ))}
        {typing && (
          <div className="chat-msg ai">
            <div className="msg-avatar">🤖</div>
            <div className="typing-indicator">
              <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="quick-questions">
        {ai.quick.map(q => (
          <button key={q} className="quick-q" onClick={() => send(q)}>{q}</button>
        ))}
      </div>

      <div className="ai-chat-input">
        <input className="ai-input" type="text" placeholder={ai.placeholder}
          value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key==='Enter' && send()} />
        <button className="ai-send" onClick={() => send()}>➤</button>
      </div>
    </div>
  );
}
