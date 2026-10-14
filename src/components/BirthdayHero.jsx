import { useState } from 'react';
import { motion } from 'framer-motion';
import BirthdayCake from './BirthdayCake';

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function BirthdayHero({ content, name, onWishMade }) {
  const [wishMade, setWishMade] = useState(false);
  const greeting = content.greeting;
  const subtitle = content.subtitle;

  const handleWish = () => {
    if (wishMade) return;
    setWishMade(true);
    if (onWishMade) onWishMade();
  };

  return (
    <motion.section
      className="section-wrapper flex-col relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="region"
      aria-label="Birthday celebration"
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #ff6b8a, transparent)',
            top: '-10%',
            right: '-10%',
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #b490ff, transparent)',
            bottom: '5%',
            left: '-5%',
          }}
        />
      </div>

      {/* Main greeting */}
      <motion.div
        className="text-center mb-6 sm:mb-8 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, type: 'spring', damping: 12 }}
      >
        <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-7xl mb-2 sm:mb-4">
          <span className="gradient-text">{greeting},</span>
        </h1>
        <motion.h2
          className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-blush-500"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {subtitle}
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-cursive text-blush-600 mt-2 sm:mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {name} 💕
        </motion.p>
      </motion.div>

      {/* Birthday Cake */}
      <motion.div
        className="relative z-10 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <BirthdayCake extinguished={wishMade} />
      </motion.div>

      {/* Wish Button */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {!wishMade ? (
          <motion.button
            className="romantic-btn"
            onClick={handleWish}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 4px 20px rgba(255,107,138,0.4)',
                '0 4px 40px rgba(255,107,138,0.7)',
                '0 4px 20px rgba(255,107,138,0.4)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Make a birthday wish"
          >
            {content.wishButtonText}
          </motion.button>
        ) : (
          <motion.p
            className="text-lg sm:text-xl font-sans text-blush-600 font-medium"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            {content.afterWishMessage}
          </motion.p>
        )}
      </motion.div>

      {/* Scattered stars */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-champagne-400 pointer-events-none select-none"
          style={{
            top: `${10 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
            fontSize: `${8 + Math.random() * 12}px`,
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          aria-hidden="true"
        >
          ✨
        </motion.span>
      ))}
    </motion.section>
  );
}
