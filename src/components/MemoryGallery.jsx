import { useState } from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function MemoryGallery({ photos }) {
  const [loadedImages, setLoadedImages] = useState({});
  const [failedImages, setFailedImages] = useState({});

  const handleImageLoad = (src) => {
    setLoadedImages((prev) => ({ ...prev, [src]: true }));
  };

  const handleImageError = (src) => {
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  const displayPhotos = photos.filter((_, idx) => idx < 6);

  return (
    <motion.section
      className="section-wrapper flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      role="region"
      aria-label="Memory gallery"
    >
      {/* Title */}
      <motion.h2
        className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-10 md:mb-12 gradient-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our Memories 💕
      </motion.h2>

      {/* Gallery grid */}
      <motion.div
        className="w-full max-w-6xl px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {displayPhotos.map((photo, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="h-full"
          >
            <div className="photo-card h-full flex flex-col">
              <div className="photo-placeholder relative overflow-hidden flex-1">
                {/* Loading shimmer */}
                {!loadedImages[photo.src] && !failedImages[photo.src] && (
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                      animation: 'shimmer 2s infinite',
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Image */}
                {!failedImages[photo.src] && (
                  <img
                    src={photo.src}
                    alt={photo.caption || 'Memory photo'}
                    onLoad={() => handleImageLoad(photo.src)}
                    onError={() => handleImageError(photo.src)}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      loadedImages[photo.src] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Placeholder content */}
                {(failedImages[photo.src] || !loadedImages[photo.src]) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-5xl mb-2">📷</span>
                    <p className="text-sm font-sans text-blush-500 font-medium">
                      {failedImages[photo.src] ? 'Photo not found' : 'Add your photo'}
                    </p>
                    <p className="text-xs text-blush-300 mt-1">
                      {photo.src}
                    </p>
                  </div>
                )}
              </div>

              {/* Caption */}
              {photo.caption && (
                <motion.p
                  className="font-sans text-sm sm:text-base text-blush-700 p-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {photo.caption}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Helper text */}
      <motion.div
        className="mt-10 sm:mt-12 md:mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="text-blush-500 font-sans text-sm sm:text-base">
          ✨ Every moment with you is a treasured memory ✨
        </p>
      </motion.div>
    </motion.section>
  );
}
