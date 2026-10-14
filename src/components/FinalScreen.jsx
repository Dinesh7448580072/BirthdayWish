import { motion } from 'framer-motion';
import useConfetti from '../hooks/useConfetti';

export default function FinalScreen({ content, onReplay }) {
  const { triggerConfetti } = useConfetti();

  const handleReplay = () => {
    triggerConfetti(100);
    if (onReplay) onReplay();
  };

  return (
    <motion.section
      className="section-wrapper flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="region"
      aria-label="Birthday finale"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 107, 138, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(180, 144, 255, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: ['#ff6b8a', '#b490ff', '#f4cc56', '#ffb0c1'][i % 4],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -(typeof window !== 'undefined' ? window.innerHeight : 900)],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />
      ))}

      {/* Main message */}
      <motion.div
        className="relative z-10 text-center max-w-2xl px-4 sm:px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          type: 'spring',
          stiffness: 100,
          damping: 20,
          delay: 0.3,
        }}
      >
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="gradient-text">{content.mainMessage}</span>
        </motion.h1>

        <motion.p
          className="font-sans text-lg sm:text-xl md:text-2xl text-blush-700 mb-10 sm:mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {content.subMessage}
        </motion.p>

        {/* Heart flourish */}
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 text-2xl sm:text-3xl md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          aria-hidden="true"
        >
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              ❤️
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Replay button */}
      <motion.button
        className="romantic-btn text-base sm:text-lg relative z-10"
        onClick={handleReplay}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Replay the birthday experience"
      >
        {content.replayText}
      </motion.button>

      {/* Footer */}
      <motion.p
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-blush-400 font-sans text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        {content.footerText}
      </motion.p>
    </motion.section>
  );
}
