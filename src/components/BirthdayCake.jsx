import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BirthdayCake({ extinguished = false }) {
  const [candles, setCandles] = useState([
    { id: 1, out: false },
    { id: 2, out: false },
    { id: 3, out: false },
  ]);
  const smokesRef = useRef([]);

  useEffect(() => {
    if (extinguished) {
      setCandles((prev) =>
        prev.map((c) => ({ ...c, out: true }))
      );
      smokesRef.current.forEach((smoke) => {
        if (smoke && Math.random() > 0.4) {
          smoke.style.display = 'block';
        }
      });
    }
  }, [extinguished]);

  return (
    <motion.div
      className="cake-container relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Candles and flames */}
      <motion.div
        className="candle-row"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {candles.map((candle, idx) => (
          <motion.div
            key={candle.id}
            className="candle"
            animate={{
              y: extinguished ? 0 : Math.sin(Date.now() / 500 + idx) * 2,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Smoke */}
            {candle.out && (
              <motion.div
                ref={(el) => (smokesRef.current[idx] = el)}
                className="candle-smoke absolute"
                style={{ bottom: '100%', left: '50%', marginLeft: '-1px' }}
                initial={{ opacity: 0.6, y: 0 }}
                animate={{ opacity: 0, y: -30, x: (Math.random() - 0.5) * 10 }}
                transition={{ duration: 1.5 }}
                aria-hidden="true"
              />
            )}

            {/* Candle stick */}
            <div className={`candle-stick candle-stick-${idx + 1}`} />

            {/* Wick */}
            <div className="candle-wick" />

            {/* Flame */}
            {!candle.out && (
              <motion.div
                className="candle-flame"
                animate={{ scaleY: [0.95, 1.05, 0.98], opacity: [0.8, 1, 0.9] }}
                transition={{ duration: 0.3, repeat: Infinity }}
                aria-hidden="true"
              />
            )}
            {candle.out && (
              <motion.div
                className="candle-flame extinguished"
                initial={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                aria-hidden="true"
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Cake layers */}
      <motion.div className="flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <div className="cake-top">
          <div className="cake-frosting" />
        </div>
        <div className="cake-middle">
          <div className="cake-frosting" />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="cake-dot"
              style={{
                left: `${20 + i * 15}%`,
                top: `${25 + Math.random() * 50}%`,
              }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 1 }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="cake-bottom">
          <div className="cake-frosting" />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="cake-dot"
              style={{
                left: `${12 + i * 12}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 1.5 }}
              aria-hidden="true"
            />
          ))}
        </div>
      </motion.div>

      {/* Celebration glow */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,107,138,0.2) 0%, transparent 80%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: extinguished ? [1, 0.8, 0.9] : [1, 1.1, 1],
          opacity: extinguished ? [0.3, 0.8, 0.5] : [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
