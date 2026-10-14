import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoveLetter({ content }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = content.paragraphs.join('\n\n');

  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(() => {
      if (displayedText.length < fullText.length) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        setCurrentParagraphIndex(fullText.slice(0, displayedText.length).split('\n\n').length - 1);
      } else {
        setIsTyping(false);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [displayedText, fullText, isTyping]);

  return (
    <motion.section
      className="section-wrapper flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="region"
      aria-label="Love letter"
    >
      {/* Decorative top border */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #ff6b8a, #b490ff, transparent)',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        aria-hidden="true"
      />

      {/* Letter container */}
      <motion.div
        className="glass-card w-full max-w-2xl px-6 sm:px-10 py-10 sm:py-14 md:py-16 relative z-10"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Letter title */}
        <motion.h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {content.title}
        </motion.h2>

        {/* Letter opening decoration */}
        <motion.p
          className="text-5xl sm:text-6xl text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
          aria-hidden="true"
        >
          ✨
        </motion.p>

        {/* Letter body with typewriter effect */}
        <motion.div
          className="font-sans text-base sm:text-lg md:text-lg leading-relaxed text-blush-900 space-y-5 sm:space-y-6 mb-8 sm:mb-10 min-h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {displayedText.split('\n\n').map((paragraph, idx) => (
            <motion.p
              key={idx}
              className="text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx <= currentParagraphIndex ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {paragraph}
              {idx === currentParagraphIndex && isTyping && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-blush-600 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  aria-label="Typing cursor"
                />
              )}
            </motion.p>
          ))}
        </motion.div>

        {/* Letter closing */}
        <motion.div
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTyping ? 0 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-cursive text-2xl sm:text-3xl text-blush-600 mb-2">
            {content.closing}
          </p>
          <p className="font-sans text-lg sm:text-xl text-blush-500">
            {content.signature}
          </p>
        </motion.div>

        {/* Letter seal */}
        <motion.div
          className="absolute -top-6 right-8 text-4xl sm:text-5xl"
          animate={{
            rotate: [0, 5, -5, 0],
            y: [0, -3, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        >
          💌
        </motion.div>
      </motion.div>

      {/* Decorative hearts */}
      {[...Array(4)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-blush-300 pointer-events-none select-none"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: i % 2 === 0 ? '5%' : '95%',
            fontSize: `${12 + Math.random() * 10}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            x: i % 2 === 0 ? [0, 15, 0] : [0, -15, 0],
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

      {/* Bottom decoration line */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #b490ff, #ff6b8a, transparent)',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        aria-hidden="true"
      />
    </motion.section>
  );
}
