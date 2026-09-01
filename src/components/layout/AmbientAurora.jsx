import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function AmbientAurora() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 40, stiffness: 60 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 60 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const x = (e.clientX / innerWidth - 0.5) * 60;
      const y = (e.clientY / innerHeight - 0.5) * 60;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-void">
      
      {/* Deep Space Base Ambient Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))] opacity-40" />

      {/* Interactive Aurora Orbs Container with Smooth Mouse Drift */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Orb 1: Cyber Cyan Breathing Nebula (Top-Left to Center) */}
        <motion.div
          animate={{
            x: ['-10%', '15%', '-5%', '-10%'],
            y: ['-15%', '10%', '25%', '-15%'],
            scale: [1, 1.25, 0.95, 1],
            opacity: [0.35, 0.55, 0.4, 0.35],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-tr from-cyber-cyan/30 via-emerald-400/20 to-transparent blur-[120px] sm:blur-[160px] transform-gpu"
        />

        {/* Orb 2: Electric Indigo & Royal Violet (Center-Right to Top) */}
        <motion.div
          animate={{
            x: ['10%', '-15%', '8%', '10%'],
            y: ['5%', '30%', '-10%', '5%'],
            scale: [1.1, 0.9, 1.2, 1.1],
            opacity: [0.3, 0.5, 0.35, 0.3],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[15%] -right-[10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-bl from-electric-indigo/35 via-neon-purple/25 to-transparent blur-[130px] sm:blur-[170px] transform-gpu"
        />

        {/* Orb 3: Deep Magenta / Neon Pink Glow (Bottom-Left to Center) */}
        <motion.div
          animate={{
            x: ['-5%', '20%', '-15%', '-5%'],
            y: ['40%', '15%', '50%', '40%'],
            scale: [0.9, 1.15, 1, 0.9],
            opacity: [0.25, 0.45, 0.3, 0.25],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[5%] left-[5%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-neon-purple/30 via-pink-500/20 to-transparent blur-[120px] sm:blur-[160px] transform-gpu"
        />

        {/* Orb 4: Subtle Liquid Gold Warmth (Bottom-Right / Floating Core) */}
        <motion.div
          animate={{
            x: ['15%', '-10%', '20%', '15%'],
            y: ['50%', '35%', '60%', '50%'],
            scale: [1, 1.3, 0.85, 1],
            opacity: [0.15, 0.35, 0.2, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[10%] right-[5%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tl from-liquid-gold/25 via-amber-500/15 to-transparent blur-[110px] sm:blur-[150px] transform-gpu"
        />

        {/* Central Dynamic Pulsing Core */}
        <motion.div
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] max-w-[1000px] max-h-[600px] rounded-[100%] bg-gradient-to-r from-cyber-cyan/15 via-electric-indigo/20 to-neon-purple/15 blur-[140px] transform-gpu"
        />
      </motion.div>

      {/* Subtle Micro Cyber Grid Overlay (Adds High-Tech Depth) */}
      <div className="absolute inset-0 cyber-grid opacity-[0.25] mix-blend-overlay pointer-events-none" />

      {/* Top & Bottom Vignette Shadow to Keep Content Perfectly Contrast-Rich */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-transparent to-void/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,6,12,0.85)_100%)] pointer-events-none" />
    </div>
  );
}
