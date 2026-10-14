import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useConfetti from '../hooks/useConfetti';

export default function SurpriseReveal({ content, onRevealed }) {
  const [isOpened, setIsOpened] = useState(false);
  const { triggerConfetti } = useConfetti();

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    triggerConfetti(80);
    if (onRevealed) onRevealed();
  };

  return (
    <motion.section
      className="section-wrapper flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="region"
      aria-label="Surprise reveal"
    >
      {/* Background radiance */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(180, 144, 255, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        aria-hidden="true"
      />

      {/* Teaser text */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-blush-600 font-sans font-medium mb-8 sm:mb-12 text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {content.teaser}
      </motion.p>

      {/* Gift box */}
      <motion.div
        className="relative mb-8 sm:mb-12"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          type: 'spring',
          stiffness: 150,
          damping: 20,
        }}
        whileHover={{ scale: 1.08 }}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleOpen();
          }
        }}
        aria-label="Open gift box"
        className="cursor-pointer"
      >
        <div className="gift-box">
          {/* Gift box body */}
          <motion.div
            className="gift-body"
            animate={{
              y: isOpened ? -40 : [0, -5, 0],
              rotateZ: isOpened ? 0 : [0, 2, -2, 0],
            }}
            transition={{
              y: isOpened
                ? { duration: 0.6, type: 'spring' }
                : { duration: 3, repeat: Infinity },
              rotateZ: { duration: 4, repeat: Infinity },
            }}
          >
            {/* Ribbons */}
            <div className="gift-ribbon-v" />
            <div className="gift-ribbon-h" />

            {/* Lid */}
            <motion.div
              className={`gift-lid ${isOpened ? 'open' : ''}`}
              animate={{
                rotateX: isOpened ? -30 : 0,
                y: isOpened ? -40 : 0,
                opacity: isOpened ? 0.7 : 1,
              }}
              transition={{ duration: 0.8, type: 'spring' }}
            />

            {/* Bow */}
            <motion.div
              className="gift-bow"
              animate={{
                scale: isOpened ? 0.6 : 1,
                y: isOpened ? -10 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="bow-loop bow-loop-left" />
              <div className="bow-loop bow-loop-right" />
              <div className="bow-center" />
            </motion.div>
          </motion.div>

          {/* Gift inner glow */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255, 200, 210, 0.3), transparent 70%)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-hidden="true"
          />

          {/* Sparkles around gift */}
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-champagne-400 text-lg pointer-events-none select-none"
              style={{
                top: `${-10 + Math.cos((i / 6) * Math.PI * 2) * 40}%`,
                left: `${50 + Math.sin((i / 6) * Math.PI * 2) * 40}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.6, 1.2, 0.6],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5 + (i % 2),
                repeat: Infinity,
                delay: (i / 6) * 0.3,
              }}
              aria-hidden="true"
            >
              ✨
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Button or reveal message */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {!isOpened ? (
          <motion.button
            className="romantic-btn text-base sm:text-lg"
            onClick={handleOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 4px 20px rgba(255,107,138,0.4)',
                '0 8px 40px rgba(255,107,138,0.7)',
                '0 4px 20px rgba(255,107,138,0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {content.buttonText}
          </motion.button>
        ) : (
          <AnimatePresence>
            <motion.div
              key="reveal"
              className="glass-card max-w-xl mx-auto px-6 sm:px-8 py-8 sm:py-10"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.3 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.h3
                className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 gradient-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {content.revealTitle}
              </motion.h3>

              <motion.p
                className="font-sans text-base sm:text-lg text-blush-800 text-center leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {content.revealMessage}
              </motion.p>

              <motion.div
                className="text-4xl text-center mt-6"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                aria-hidden="true"
              >
                💝
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>

      {/* Decorative elements */}
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-blush-300 pointer-events-none select-none"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            fontSize: `${10 + Math.random() * 12}px`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          aria-hidden="true"
        >
          ♥
        </motion.span>
      ))}
    </motion.section>
  );
}
