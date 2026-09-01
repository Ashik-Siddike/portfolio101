import React, { useEffect, useRef } from 'react';

export default function CyberGridBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;

    // Smooth lerp update for cursor spotlight
    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      // Smooth interpolation for fluid cinematic movement
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      el.style.setProperty('--spotlight-x', `${currentX}px`);
      el.style.setProperty('--spotlight-y', `${currentY}px`);

      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-void select-none"
      style={{
        '--spotlight-x': '50vw',
        '--spotlight-y': '30vh',
      }}
    >
      {/* 1. Base Subtle Cyber Grid (Always visible with soft contrast) */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Interactive Spotlight Gradient Halo (Follows Cursor) */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `
            radial-gradient(700px circle at var(--spotlight-x) var(--spotlight-y), 
              rgba(0, 245, 212, 0.14) 0%, 
              rgba(99, 102, 241, 0.10) 35%, 
              rgba(217, 70, 239, 0.04) 60%, 
              transparent 75%
            )
          `,
        }}
      />

      {/* 3. Illuminated Glowing Cyber Matrix Grid (Revealed by Cursor Spotlight) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 245, 212, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: `radial-gradient(420px circle at var(--spotlight-x) var(--spotlight-y), black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(420px circle at var(--spotlight-x) var(--spotlight-y), black 0%, transparent 100%)`,
        }}
      />

      {/* 4. Glowing Intersection Crosshair Dots (Matrix Tech Points) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle 1.5px at 1px 1px, rgba(0, 245, 212, 0.9) 100%, transparent 0)`,
          backgroundSize: '48px 48px',
          maskImage: `radial-gradient(350px circle at var(--spotlight-x) var(--spotlight-y), black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(350px circle at var(--spotlight-x) var(--spotlight-y), black 0%, transparent 100%)`,
        }}
      />

      {/* 5. Ambient Atmospheric Depth Glow (Subtle Breathing Orbs for Mobile & Idle) */}
      <div className="absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-cyber-cyan/10 blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 -right-32 h-[600px] w-[600px] rounded-full bg-electric-indigo/10 blur-[160px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-neon-purple/8 blur-[150px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />

      {/* 6. Cinematic Vignette (Darkens edges to focus attention on central content) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,6,12,0.7)_100%)] pointer-events-none" />
    </div>
  );
}
