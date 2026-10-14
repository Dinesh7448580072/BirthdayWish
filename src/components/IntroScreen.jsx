import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen({ content, onComplete }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onComplete();
    }, 1400);
  };

  return (
    <AnimatePresence>
      <motion.section
        className="section-wrapper flex-col relative"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(255,209,219,0.3) 0%, transparent 60%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8 }}
        role="region"
        aria-label="Welcome screen"
      >
        {/* Sparkle decorations */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-champagne-400"
            style={{
              top: `${15 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              fontSize: `${10 + Math.random() * 14}px`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.3, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            aria-hidden="true"
          >
            ✨
          </motion.div>
        ))}

        {/* Title text */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-blush-600 font-sans font-medium mb-8 sm:mb-12 text-center px-4 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          {content.topText}
        </motion.p>

        {/* Envelope */}
        <motion.div
          className="envelope-wrapper mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
        >
          <div className="envelope">
            <div className="envelope-body" />
            <div className={`envelope-flap ${isOpening ? 'open' : ''}`} />
            <div
              className={`envelope-heart transition-all duration-700 ${
                isOpening ? 'hidden-heart' : ''
              }`}
            >
              💌
            </div>
            <div className={`envelope-letter ${isOpening ? 'rise' : ''}`}>
              <div className="envelope-letter-lines">
                <div className="envelope-letter-line" />
                <div className="envelope-letter-line" />
                <div className="envelope-letter-line" />
              </div>
            </div>
          </div>

          {/* Glow behind envelope */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,107,138,0.15) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            aria-hidden="true"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="romantic-btn text-base sm:text-lg"
          onClick={handleOpen}
          disabled={isOpening}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Open your birthday surprise"
        >
          {isOpening ? '💕 Opening...' : content.buttonText}
        </motion.button>

        {/* Floating micro-hearts near button */}
        <motion.div
          className="absolute pointer-events-none"
          style={{ bottom: '15%' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          aria-hidden="true"
        >
          <span className="text-blush-300 text-xs mx-2">♥</span>
          <span className="text-lavender-300 text-xs mx-3">♥</span>
          <span className="text-blush-200 text-xs mx-2">♥</span>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
