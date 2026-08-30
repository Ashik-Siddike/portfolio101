import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@remotion/player';
import { Film, Zap } from 'lucide-react';
import CinematicShowreel from '../../remotion/CinematicShowreel';
import IntervueAIMotion from '../../remotion/IntervueAIMotion';
import AffiliateMotion from '../../remotion/AffiliateMotion';
import BrandMotion from '../../remotion/BrandMotion';
import { KineticTitle, KineticSubtitle } from '../ui/KineticText';

export default function Showreel() {
  const [activeTab, setActiveTab] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  const compositions = [
    {
      id: 'main-reel',
      title: "CINEMATIC HYBRID SHOWREEL",
      component: CinematicShowreel,
      durationInFrames: 450,
      tagline: "Programmatic React-rendered motion graphic showreel powered by Remotion",
      duration: "00:15",
      badge: "REMOTION_60FPS",
      accent: "from-cyber-cyan to-electric-indigo",
      stats: { tech: "Remotion / React / WebGL", type: "Full Showreel" },
      highlights: ["Kinetic Typography", "Full-Stack Code Matrix", "IntervueAI Spotlight", "50+ Brand Identities"]
    },
    {
      id: 'intervue-ad',
      title: "INTERVUEAI PRODUCT AD",
      component: IntervueAIMotion,
      durationInFrames: 180,
      tagline: "Resume intelligence parsing & Gemini voice scoring in motion",
      duration: "00:06",
      badge: "AI_SAAS_MOTION",
      accent: "from-electric-indigo to-neon-purple",
      stats: { tech: "Remotion / Spring Physics", type: "Product Demo" },
      highlights: ["Resume Parser Pipeline", "Gemini AI Evaluation", "Real-Time Scoring Graph"]
    },
    {
      id: 'affiliate-ad',
      title: "AFFILIATE CAMPAIGN AD",
      component: AffiliateMotion,
      durationInFrames: 180,
      tagline: "Autonomous Python blogging & SEO ranking motion showcase",
      duration: "00:06",
      badge: "AUTOMATION_MOTION",
      accent: "from-emerald-400 to-cyan-500",
      stats: { tech: "Remotion / Python Engine", type: "Automation Demo" },
      highlights: ["10,000+ Articles", "SEO 100/100", "Autonomous Pipeline"]
    },
    {
      id: 'brand-ad',
      title: "50+ BRAND IDENTITIES REEL",
      component: BrandMotion,
      durationInFrames: 180,
      tagline: "3+ years of vector logos and Figma design systems",
      duration: "00:06",
      badge: "GRAPHIC_MOTION",
      accent: "from-amber-400 to-pink-500",
      stats: { tech: "Remotion / Vector Motion", type: "Branding Reel" },
      highlights: ["Vector Logos", "Figma Systems", "Adobe Creative Suite"]
    }
  ];

  const currentComp = compositions[activeTab];

  // Pause Remotion rendering loop when scrolled out of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTabChange = (idx) => {
    setActiveTab(idx);
  };

  return (
    <section ref={containerRef} id="showreel" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-void border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-electric-indigo/10 blur-[160px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-7xl relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan tracking-widest uppercase mb-2">
              <Film className="h-3.5 w-3.5" />
              <KineticSubtitle text="// 02. PROGRAMMATIC REMOTION VIDEO & MOTION GRAPHICS" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white">
              <KineticTitle text="MOTION GRAPHICS" /> <br />
              <KineticTitle text="ENGINEERED WITH REACT & REMOTION." delay={0.2} gradient={true} />
            </h2>
          </div>

          {/* Tab Selector (Horizontal scrollable on mobile) */}
          <div className="flex items-center gap-2 p-1.5 glass-panel rounded-2xl sm:rounded-full border border-white/10 overflow-x-auto no-scrollbar max-w-full">
            {compositions.map((comp, idx) => (
              <button
                key={comp.id}
                onClick={() => handleTabChange(idx)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap shrink-0 transition-all duration-300 ${
                  activeTab === idx
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                data-cursor="pointer"
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeReelTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan/30 to-electric-indigo/30 border border-cyber-cyan/50"
                  />
                )}
                <span className="relative z-10">
                  {idx === 0 ? "FULL SHOWREEL" : idx === 1 ? "INTERVUEAI" : idx === 2 ? "AFFILIATE" : "BRANDING"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Remotion Player Container */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.9)] aspect-video w-full group">
          {/* Remotion Live Video Player (Plays only when in view) */}
          {isInViewport && (
            <Player
              key={currentComp.id}
              ref={playerRef}
              component={currentComp.component}
              durationInFrames={currentComp.durationInFrames}
              compositionWidth={1920}
              compositionHeight={1080}
              fps={30}
              style={{
                width: '100%',
                height: '100%',
              }}
              controls
              autoPlay
              loop
              acknowledgeRemotionLicense
            />
          )}

          {/* Fallback Poster when out of view */}
          {!isInViewport && (
            <div className="h-full w-full flex items-center justify-center bg-void-card">
              <div className="font-mono text-xs text-cyber-cyan animate-pulse">
                INITIALIZING REMOTION ENGINE...
              </div>
            </div>
          )}

          {/* CRT Scanline Effect */}
          <div className="crt-overlay pointer-events-none" />

          {/* Top HUD Badge Overlay */}
          <div className="absolute top-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/10 font-mono text-xs text-cyber-cyan">
              <span className="h-2 w-2 rounded-full bg-cyber-cyan animate-ping" />
              <span>LIVE_REMOTION // {currentComp.badge}</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-white/10 font-mono text-xs text-slate-300">
              <Zap className="h-3.5 w-3.5 text-liquid-gold" />
              <span>{currentComp.stats.tech}</span>
            </div>
          </div>
        </div>

        {/* Bottom Details Row */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10">
          <div>
            <h4 className="font-display font-bold text-white text-base">
              {currentComp.title}
            </h4>
            <p className="font-mono text-xs text-slate-400 mt-0.5">
              {currentComp.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentComp.highlights.map((h, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-slate-300"
              >
                ✓ {h}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
