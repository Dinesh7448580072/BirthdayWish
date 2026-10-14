import { useMemo } from 'react';
import { motion } from 'framer-motion';

const PARTICLES = [
  { emoji: '💗', type: 'heart' },
  { emoji: '💕', type: 'heart' },
  { emoji: '💖', type: 'heart' },
  { emoji: '❤', type: 'heart' },
  { emoji: '✨', type: 'sparkle' },
  { emoji: '⭐', type: 'sparkle' },
  { emoji: '🌸', type: 'petal' },
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingHearts() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const particles = useMemo(() => {
    if (prefersReducedMotion) return [];
    return Array.from({ length: 18 }, (_, i) => {
      const particle = PARTICLES[Math.floor(Math.random() * PARTICLES.length)];
      return {
        id: i,
        ...particle,
        left: randomBetween(2, 98),
        size: randomBetween(12, 26),
        duration: randomBetween(12, 25),
        delay: randomBetween(0, 10),
        startY: randomBetween(60, 110),
        opacity: particle.type === 'sparkle' ? randomBetween(0.3, 0.6) : randomBetween(0.15, 0.4),
        drift: randomBetween(-40, 40),
      };
    });
  }, [prefersReducedMotion]);

  if (prefersReducedMotion || particles.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none"
          style={{
            left: `${p.left}%`,
            top: `${p.startY}%`,
            fontSize: `${p.size}px`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -(typeof window !== 'undefined' ? window.innerHeight : 900) * 1.2],
            x: [0, p.drift, -p.drift * 0.5, p.drift * 0.3],
            opacity: [0, p.opacity, p.opacity, 0],
            rotate: p.type === 'petal' ? [0, 180, 360] : [0, 15, -15, 0],
            scale: p.type === 'sparkle' ? [0.6, 1.2, 0.6] : [1, 1, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}
