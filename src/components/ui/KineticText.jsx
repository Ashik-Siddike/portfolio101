import React from 'react';
import { motion } from 'framer-motion';

// Word-by-word staggered kinetic title reveal (100% razor-sharp 2D text, zero blur, perfect alignment)
export function KineticTitle({ text, className = '', delay = 0, gradient = false }) {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`inline ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={`inline-block ${index === words.length - 1 ? '' : 'mr-[0.25em]'} ${
            gradient
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-electric-indigo to-neon-purple'
              : ''
          }`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Letter-by-letter reveal for badges / subtitles (100% sharp)
export function KineticSubtitle({ text, className = '', delay = 0 }) {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`inline ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
