import { useState } from 'react';
import { showToast } from './Toast';

export default function QuizCard({ badge, counter, question, options, explanation }) {
  const [answered, setAnswered] = useState(null); // index of chosen option

  function handleOption(idx, correct) {
    if (answered !== null) return;
    setAnswered(idx);
    if (correct) {
      showToast('✓ Correct!', 'Great answer! Moving on...', 'correct');
    } else {
      showToast('✗ Incorrect', 'Review the explanation below.', 'wrong');
    }
  }

  return (
    <div className="quiz-card fade-in-up delay-2">
      <div className="quiz-header">
        <span className="quiz-badge">{badge}</span>
        {counter && <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 'auto' }}>{counter}</span>}
      </div>
      <div className="quiz-question">{question}</div>
      <div className="quiz-options">
        {options.map((opt, idx) => {
          let cls = 'quiz-option';
          if (answered !== null) {
            if (opt.correct) cls += ' correct';
            else if (answered === idx && !opt.correct) cls += ' wrong';
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleOption(idx, opt.correct)}
              style={answered !== null ? { pointerEvents: 'none' } : {}}
            >
              <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
              {opt.text}
            </button>
          );
        })}
      </div>
      {answered !== null && explanation && (
        <div className="quiz-explanation show">
          <strong>Explanation:</strong> {explanation}
        </div>
      )}
    </div>
  );
}
