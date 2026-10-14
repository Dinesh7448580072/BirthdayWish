import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import birthdayContent from './data/birthdayContent';
import FloatingHearts from './components/FloatingHearts';
import IntroScreen from './components/IntroScreen';
import BirthdayHero from './components/BirthdayHero';
import LoveLetter from './components/LoveLetter';
import MemoryGallery from './components/MemoryGallery';
import SurpriseReveal from './components/SurpriseReveal';
import FinalScreen from './components/FinalScreen';
import MusicToggle from './components/MusicToggle';

const SCREENS = {
  INTRO: 'intro',
  BIRTHDAY: 'birthday',
  LETTER: 'letter',
  MEMORIES: 'memories',
  SURPRISE: 'surprise',
  FINALE: 'finale',
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.INTRO);
  const [wishMade, setWishMade] = useState(false);

  const handleIntroComplete = () => {
    setCurrentScreen(SCREENS.BIRTHDAY);
  };

  const handleWishMade = () => {
    setWishMade(true);
    // Auto-advance after delay
    setTimeout(() => {
      setCurrentScreen(SCREENS.LETTER);
    }, 2500);
  };

  const handleSurpriseRevealed = () => {
    // Auto-advance to finale after delay
    setTimeout(() => {
      setCurrentScreen(SCREENS.FINALE);
    }, 3000);
  };

  const handleReplay = () => {
    setWishMade(false);
    setCurrentScreen(SCREENS.INTRO);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blush-50 via-cream-50 to-lavender-100 overflow-x-hidden">
      {/* Floating background elements */}
      <FloatingHearts />

      {/* Music toggle */}
      <MusicToggle
        enabled={birthdayContent.music.enabled}
        musicSrc={birthdayContent.music.src}
      />

      {/* Main content */}
      <AnimatePresence mode="wait">
        {currentScreen === SCREENS.INTRO && (
          <div key={SCREENS.INTRO}>
            <IntroScreen
              content={birthdayContent.intro}
              onComplete={handleIntroComplete}
            />
          </div>
        )}

        {currentScreen === SCREENS.BIRTHDAY && (
          <div key={SCREENS.BIRTHDAY}>
            <BirthdayHero
              content={birthdayContent.birthday}
              name={birthdayContent.name}
              onWishMade={handleWishMade}
            />
          </div>
        )}

        {currentScreen === SCREENS.LETTER && (
          <div key={SCREENS.LETTER}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LoveLetter content={birthdayContent.loveLetter} />
            </motion.div>
            <motion.button
              className="fixed bottom-8 right-8 z-40 romantic-btn text-sm sm:text-base"
              onClick={() => setCurrentScreen(SCREENS.MEMORIES)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Continue to memories"
            >
              Next ➜
            </motion.button>
          </div>
        )}

        {currentScreen === SCREENS.MEMORIES && (
          <div key={SCREENS.MEMORIES}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MemoryGallery photos={birthdayContent.photos} />
            </motion.div>
            <motion.button
              className="fixed bottom-8 right-8 z-40 romantic-btn text-sm sm:text-base"
              onClick={() => setCurrentScreen(SCREENS.SURPRISE)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Continue to surprise"
            >
              Next ➜
            </motion.button>
          </div>
        )}

        {currentScreen === SCREENS.SURPRISE && (
          <div key={SCREENS.SURPRISE}>
            <SurpriseReveal
              content={birthdayContent.surprise}
              onRevealed={handleSurpriseRevealed}
            />
          </div>
        )}

        {currentScreen === SCREENS.FINALE && (
          <div key={SCREENS.FINALE}>
            <FinalScreen
              content={birthdayContent.finale}
              onReplay={handleReplay}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Navigation hints */}
      {(currentScreen === SCREENS.LETTER ||
        currentScreen === SCREENS.MEMORIES) && (
        <motion.div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-blush-400 font-sans text-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          📜 Scroll to explore
        </motion.div>
      )}
    </div>
  );
}
