import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/sections/Hero';
import Showreel from './components/sections/Showreel';
import Projects from './components/sections/Projects';
import Lab from './components/sections/Lab';
import Philosophy from './components/sections/Philosophy';
import Metrics from './components/sections/Metrics';
import Contact from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize smooth momentum scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-void text-slate-100 overflow-x-hidden selection:bg-cyber-cyan selection:text-black">
      {/* Film grain noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-noise" />

      {/* Custom Spring Physics Magnetic Cursor */}
      <CustomCursor />

      {/* Developer CLI Bootloader */}
      {loading && (
        <Preloader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Showreel />
        <Projects />
        <Lab />
        <Philosophy />
        <Metrics />
        <Contact />
      </main>
    </div>
  );
}
