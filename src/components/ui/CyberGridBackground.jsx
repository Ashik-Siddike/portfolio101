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
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070812] select-none"
      style={{
        '--spotlight-x': '50vw',
        '--spotlight-y': '30vh',
      }}
    >
      {/* 1. Base Cyber Grid Lines (Crisp and clearly visible throughout the page) */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. Secondary Isometric Diagonal Grid for High-Tech Depth */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(circle 1px at 1px 1px, rgba(0, 245, 212, 0.8) 100%, transparent 0)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 3. High-Intensity Cursor Spotlight Torchlight */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(650px circle at var(--spotlight-x) var(--spotlight-y), 
              rgba(0, 245, 212, 0.22) 0%, 
              rgba(99, 102, 241, 0.16) 40%, 
              rgba(217, 70, 239, 0.06) 65%, 
              transparent 75%
            )
          `,
        }}
      />

      {/* 4. Illuminated Glowing Cyber Matrix Grid (Bright Cyan/Indigo lines revealed by Cursor) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 245, 212, 0.85) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.85) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(450px circle at var(--spotlight-x) var(--spotlight-y), black 10%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(450px circle at var(--spotlight-x) var(--spotlight-y), black 10%, transparent 100%)`,
        }}
      />

      {/* 5. Glowing Intersection Crosshair Points (+) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle 2px at 1px 1px, rgba(0, 245, 212, 1) 100%, transparent 0)
          `,
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(400px circle at var(--spotlight-x) var(--spotlight-y), black 20%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(400px circle at var(--spotlight-x) var(--spotlight-y), black 20%, transparent 100%)`,
        }}
      />

      {/* 6. Slow Floating Ambient Aurora Orbs for Rich Colors & Depth */}
      <div 
        className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-cyber-cyan/15 blur-[120px] animate-pulse" 
        style={{ animationDuration: '6s' }} 
      />
      <div 
        className="absolute top-1/3 -right-20 h-[550px] w-[550px] rounded-full bg-electric-indigo/15 blur-[140px] animate-pulse" 
        style={{ animationDuration: '9s', animationDelay: '2s' }} 
      />
      <div 
        className="absolute bottom-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-neon-purple/12 blur-[130px] animate-pulse" 
        style={{ animationDuration: '8s', animationDelay: '4s' }} 
      />
      <div 
        className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full bg-cyber-cyan/12 blur-[120px] animate-pulse" 
        style={{ animationDuration: '7s', animationDelay: '1s' }} 
      />

      {/* 7. Subtle Corner Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,8,18,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
