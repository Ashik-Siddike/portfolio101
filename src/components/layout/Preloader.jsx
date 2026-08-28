import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroFuturistic from '../ui/hero-futuristic';

export default function Preloader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  const handleEnter = () => {
    setIsDone(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-void"
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
