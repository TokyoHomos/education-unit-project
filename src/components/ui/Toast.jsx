import { useState, useCallback, useRef } from 'react';

let _showToast = null;

export function showToast(title, message, type = 'info') {
  if (_showToast) _showToast(title, message, type);
}

export default function Toast() {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const show = useCallback((title, message, type) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ title, message, type });
    timerRef.current = setTimeout(() => setToast(null), 3200);
  }, []);

  // Register global handler
  _showToast = show;

  if (!toast) return null;

  const color = toast.type === 'correct' ? '#4ade80' : toast.type === 'wrong' ? '#f87171' : '#00d4ff';
  const icon  = toast.type === 'correct' ? '✅' : toast.type === 'wrong' ? '❌' : 'ℹ️';

  return (
    <div
      id="notification-toast"
      style={{
        position: 'fixed', bottom: 32, right: 32,
        background: 'rgba(7,13,31,0.97)',
        border: `1px solid ${color}40`,
        borderRadius: 14, padding: '16px 20px',
        display: 'flex', alignItems: 'center', gap: 14,
        boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
        zIndex: 3000, backdropFilter: 'blur(20px)',
        fontFamily: "'Inter',sans-serif", maxWidth: 320,
        animation: 'toastIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      <span style={{ fontSize: 24 }}>{icon}</span>
      <div>
        <strong style={{ display: 'block', color, fontSize: 13, fontWeight: 700, marginBottom: 3 }}>
          {toast.title}
        </strong>
        <span style={{ fontSize: 13, color: '#94a3b8' }}>{toast.message}</span>
      </div>
    </div>
  );
}
