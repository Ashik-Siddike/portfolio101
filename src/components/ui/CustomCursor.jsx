import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState({
    type: 'default', // 'default', 'pointer', 'view', 'drag'
    text: '',
    visible: false,
  });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-performance hardware-accelerated springs (zero React state re-renders on move)
  const springX = useSpring(mouseX, { damping: 28, stiffness: 450, mass: 0.2 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 450, mass: 0.2 });

  const trailX = useSpring(mouseX, { damping: 22, stiffness: 200, mass: 0.5 });
  const trailY = useSpring(mouseY, { damping: 22, stiffness: 200, mass: 0.5 });

  const haloX = useSpring(mouseX, { damping: 18, stiffness: 100, mass: 0.8 });
  const haloY = useSpring(mouseY, { damping: 18, stiffness: 100, mass: 0.8 });

  const currentTypeRef = useRef('default');
  const currentTextRef = useRef('');

  useEffect(() => {
    let isVisible = false;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        isVisible = true;
        setCursorState((prev) => ({ ...prev, visible: true }));
      }
    };

    // Event delegation on mouseover (only fires when crossing element boundaries, NOT on every move!)
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      const clickable = e.target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');

      let newType = 'default';
      let newText = '';

      if (target) {
        newType = target.getAttribute('data-cursor') || 'pointer';
        newText = target.getAttribute('data-cursor-text') || '';
      } else if (clickable) {
        newType = 'pointer';
      }

      if (newType !== currentTypeRef.current || newText !== currentTextRef.current) {
        currentTypeRef.current = newType;
        currentTextRef.current = newText;
        setCursorState({ type: newType, text: newText, visible: true });
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!cursorState.visible) return null;

  const isPointer = cursorState.type === 'pointer';
  const hasText = Boolean(cursorState.text);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Ambient Glow Halo */}
      <motion.div
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute h-14 w-14 rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-lg will-change-transform"
      />

      {/* Trailing Fluid Ring */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.4 : hasText ? 2.5 : 1,
          borderColor: isPointer ? 'rgba(0, 245, 212, 0.7)' : 'rgba(99, 102, 241, 0.4)',
        }}
        transition={{ duration: 0.2 }}
        className="absolute h-8 w-8 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 will-change-transform"
      />

      {/* Core Tactile Cursor Orb */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.3 : hasText ? 3.2 : 1,
          backgroundColor: isPointer ? '#00f5d4' : hasText ? '#6366f1' : '#00f5d4',
          boxShadow: isPointer ? '0 0 20px rgba(0, 245, 212, 0.8)' : '0 0 10px rgba(0, 245, 212, 0.5)',
        }}
        transition={{ duration: 0.15 }}
        className={`flex items-center justify-center rounded-full will-change-transform ${
          hasText
            ? 'h-9 w-9 text-[8.5px] font-mono font-bold text-white uppercase border border-white/30'
            : isPointer
            ? 'h-3.5 w-3.5'
            : 'h-2.5 w-2.5'
        }`}
      >
        {hasText && (
          <span className="select-none text-center px-1 font-bold">
            {cursorState.text}
          </span>
        )}
      </motion.div>
    </div>
  );
}
