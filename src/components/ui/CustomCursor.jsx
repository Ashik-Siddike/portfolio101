import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useVelocity } from 'framer-motion';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState({
    type: 'default', // 'default', 'pointer', 'view', 'drag', 'text'
    text: '',
    visible: false,
  });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Velocity tracking for fluid deformation
  const xVelocity = useVelocity(mouseX);
  const yVelocity = useVelocity(mouseY);

  // Springs for multi-layered liquid trailing effect
  const mainX = useSpring(mouseX, { damping: 24, stiffness: 350, mass: 0.4 });
  const mainY = useSpring(mouseY, { damping: 24, stiffness: 350, mass: 0.4 });

  const trail1X = useSpring(mouseX, { damping: 20, stiffness: 180, mass: 0.6 });
  const trail1Y = useSpring(mouseY, { damping: 20, stiffness: 180, mass: 0.6 });

  const trail2X = useSpring(mouseX, { damping: 18, stiffness: 110, mass: 0.9 });
  const trail2Y = useSpring(mouseY, { damping: 18, stiffness: 110, mass: 0.9 });

  const trail3X = useSpring(mouseX, { damping: 14, stiffness: 70, mass: 1.2 });
  const trail3Y = useSpring(mouseY, { damping: 14, stiffness: 70, mass: 1.2 });

  // Fluid stretch rotation and scale based on movement velocity
  const stretch = useTransform(xVelocity, [-1200, 0, 1200], [1.35, 1, 1.35]);
  const squish = useTransform(yVelocity, [-1200, 0, 1200], [0.75, 1, 0.75]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!cursorState.visible) {
        setCursorState((prev) => ({ ...prev, visible: true }));
      }

      // Check target element data attributes
      const target = e.target.closest('[data-cursor]');
      const clickable = e.target.closest('button, a, input, textarea, [role="button"]');

      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorState({ type, text, visible: true });
      } else if (clickable) {
        setCursorState({ type: 'pointer', text: '', visible: true });
      } else {
        setCursorState({ type: 'default', text: '', visible: true });
      }
    };

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, cursorState.visible]);

  if (!cursorState.visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      
      {/* 3rd Outer Fluid Liquid Halo */}
      <motion.div
        style={{
          x: trail3X,
          y: trail3Y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute h-20 w-20 rounded-full bg-gradient-to-tr from-electric-indigo/20 via-neon-purple/15 to-transparent blur-xl mix-blend-screen"
      />

      {/* 2nd Medium Liquid Glow Orb */}
      <motion.div
        style={{
          x: trail2X,
          y: trail2Y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute h-12 w-12 rounded-full bg-gradient-to-br from-cyber-cyan/30 via-electric-indigo/25 to-transparent blur-md"
      />

      {/* 1st Trailing Viscous Liquid Ring */}
      <motion.div
        style={{
          x: trail1X,
          y: trail1Y,
          translateX: '-50%',
          translateY: '-50%',
          scaleX: stretch,
          scaleY: squish,
        }}
        animate={{
          scale: cursorState.type === 'pointer' ? 1.6 : cursorState.text ? 2.8 : 1,
          borderColor: cursorState.type === 'pointer' ? 'rgba(0, 245, 212, 0.8)' : 'rgba(99, 102, 241, 0.5)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
        className="absolute h-9 w-9 rounded-full border border-cyber-cyan/40 bg-cyber-cyan/10 backdrop-blur-[2px] shadow-[0_0_20px_rgba(0,245,212,0.3)]"
      />

      {/* Main Core Fluid Droplet & Text Orb */}
      <motion.div
        style={{
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
          scaleX: stretch,
          scaleY: squish,
        }}
        animate={{
          scale: cursorState.type === 'pointer' ? 1.4 : cursorState.text ? 3.4 : 1,
          backgroundColor:
            cursorState.type === 'pointer'
              ? 'rgba(0, 245, 212, 0.9)'
              : cursorState.text
              ? 'rgba(99, 102, 241, 0.95)'
              : 'rgba(0, 245, 212, 1)',
          boxShadow:
            cursorState.type === 'pointer'
              ? '0 0 25px rgba(0, 245, 212, 0.8), 0 0 50px rgba(99, 102, 241, 0.5)'
              : '0 0 15px rgba(0, 245, 212, 0.7)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 320 }}
        className={`flex items-center justify-center rounded-full backdrop-blur-sm ${
          cursorState.text
            ? 'h-10 w-10 text-[9px] font-mono font-black tracking-widest text-white uppercase border border-white/30'
            : cursorState.type === 'pointer'
            ? 'h-4 w-4 border border-white'
            : 'h-3 w-3'
        }`}
      >
        {cursorState.text && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="select-none text-center px-1 font-bold"
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>

    </div>
  );
}
