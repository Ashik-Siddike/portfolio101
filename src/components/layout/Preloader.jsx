import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroFuturistic from '../ui/hero-futuristic';

export default function Preloader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  const handleEnter = () => {
    if (isDone) return;
    setIsDone(true);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  // Automatically trigger enter on mouse wheel scroll, touch swipe, or down key
  useEffect(() => {
    if (isDone) return;

    const handleWheel = (e) => {
      if (e.deltaY > 10) {
        handleEnter();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 20) {
        handleEnter();
      }
    };

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'Space', 'Enter'].includes(e.key)) {
        handleEnter();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDone]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-void overflow-hidden"
        >
          <HeroFuturistic
            title="Md. Ashik Siddike"
            subtitle="Full-Stack Web Developer & UI/UX Designer | Creative Technologist"
            onExplore={handleEnter}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
