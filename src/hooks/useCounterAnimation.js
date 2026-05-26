import { useEffect, useRef } from 'react';

export function useCounterAnimation() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    function animateCounter(el, target, suffix = '') {
      const duration = 2000;
      const start = performance.now();
      function update(timestamp) {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * eased);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          const target = parseInt(entry.target.dataset.count);
          const suffix = entry.target.dataset.suffix || '';
          animateCounter(entry.target, target, suffix);
        }
      });
    }, { threshold: 0.5 });

    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(c => observer.observe(c));

    return () => observer.disconnect();
  });
}
