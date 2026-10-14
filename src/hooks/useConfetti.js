import { useCallback, useRef } from 'react';

/**
 * Custom hook to create and trigger confetti effects.
 */
export default function useConfetti() {
  const containerRef = useRef(null);

  const triggerConfetti = useCallback((count = 50) => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current || document.body;
    const colors = [
      '#ff6b8a', '#b490ff', '#f4cc56', '#ffb0c1',
      '#e3d7ff', '#ffd1db', '#ff8da6', '#9c64ff',
    ];
    const shapes = ['circle', 'square', 'heart'];

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 8 + 6;
      const leftPos = Math.random() * 100;
      const delay = Math.random() * 1.5;
      const duration = Math.random() * 2 + 2;

      el.style.left = `${leftPos}%`;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.backgroundColor = color;
      el.style.animationDelay = `${delay}s`;
      el.style.animationDuration = `${duration}s`;

      if (shape === 'circle') {
        el.style.borderRadius = '50%';
      } else if (shape === 'heart') {
        el.style.backgroundColor = 'transparent';
        el.innerHTML = '❤';
        el.style.fontSize = `${size + 4}px`;
        el.style.color = color;
        el.style.width = 'auto';
        el.style.height = 'auto';
      }

      container.appendChild(el);

      setTimeout(() => {
        el.remove();
      }, (delay + duration) * 1000 + 500);
    }
  }, []);

  return { triggerConfetti, containerRef };
}
