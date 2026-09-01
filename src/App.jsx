import React, { useState, useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import MobileDock from './components/layout/MobileDock';
import CustomCursor from './components/ui/CustomCursor';
import CyberGridBackground from './components/ui/CyberGridBackground';
import Hero from './components/sections/Hero';

// Code-split below-the-fold heavy sections for instant initial loading on Vercel
const Showreel = lazy(() => import('./components/sections/Showreel'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Lab = lazy(() => import('./components/sections/Lab'));
const Philosophy = lazy(() => import('./components/sections/Philosophy'));
const Metrics = lazy(() => import('./components/sections/Metrics'));
const Contact = lazy(() => import('./components/sections/Contact'));

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize smooth momentum scroll with Lenis (Optimized performance settings)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-void text-slate-100 overflow-x-hidden selection:bg-cyber-cyan selection:text-black">
      {/* Zero-Rerender Hardware Accelerated Fluid Cursor (Desktop) */}
      <CustomCursor />

      {/* Interactive Cyber Matrix Grid + Cursor Spotlight Background */}
      <CyberGridBackground />

      {/* Developer CLI Bootloader / 3D Intro */}
      {loading && (
        <Preloader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Floating Thumb-Friendly Mobile Quick Action Dock */}
      {!loading && <MobileDock />}

      {/* Main Content Sections */}
      <main className="relative z-10 pb-16 md:pb-0">
        <Hero />
        <Suspense fallback={<div className="py-20 text-center font-mono text-xs text-cyber-cyan">LOADING MODULE...</div>}>
          <Showreel />
          <Projects />
          <Lab />
          <Philosophy />
          <Metrics />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}
