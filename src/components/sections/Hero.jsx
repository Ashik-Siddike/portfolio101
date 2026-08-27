import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Globe, Terminal, Layers, Code, Play, FileText } from 'lucide-react';
import HeroScene from '../3d/HeroScene';
import PortraitCard from '../ui/PortraitCard';
import MagneticButton from '../ui/MagneticButton';
import { KineticTitle, KineticSubtitle } from '../ui/KineticText';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export default function Hero() {
  const marqueeItems = [
    "FULL-STACK WEB DEVELOPMENT",
    "•",
    "UI/UX & GRAPHIC DESIGN",
    "•",
    "REACT.JS & NEXT.JS (TYPESCRIPT)",
    "•",
    "AI WORKFLOWS & GEMINI INTEGRATION",
    "•",
    "NODE.JS, FIREBASE & SUPABASE",
    "•",
    "FIGMA & ADOBE CREATIVE SUITE",
    "•",
    "3D WEBGL & KINETIC MOTION",
    "•",
  ];

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-void"
    >
      {/* 3D WebGL Three.js Particle and Geometry Canvas */}
      <HeroScene />

      {/* Cyber Glow radial spots */}
      <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-electric-indigo/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 h-96 w-96 rounded-full bg-cyber-cyan/10 blur-[140px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Vision & Identity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            
            {/* Live Availability & Experience Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full glass-panel px-4 py-1.5 text-xs font-mono text-slate-300 mb-6 border border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-white font-semibold">SUPPORT ENGINEER @ CITY, UNIVERSITY OF LONDON</span>
              <span className="text-cyber-cyan hidden sm:inline">• REMOTE</span>
            </div>

            {/* Massive Kinetic Headline (100% Crisp & Legible) */}
            <div className="space-y-2">
              <div className="font-mono text-xs sm:text-sm tracking-[0.3em] text-cyber-cyan uppercase font-bold">
                <KineticSubtitle text="// MD. ASHIK SIDDIKE — HYBRID CREATIVE ENGINEER" delay={0.1} />
              </div>
              
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[74px] tracking-tight leading-[1.04] text-white">
                <KineticTitle text="BRIDGING FULL-STACK" delay={0.2} /> <br />
                <KineticTitle text="CODE & ELITE" delay={0.35} className="text-slate-300" /> <br />
                <KineticTitle text="DESIGN ARCHITECTURE." delay={0.5} gradient={true} />
              </h1>
            </div>

            {/* Sub-headline / Identity */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300/90 font-light leading-relaxed">
              A powerhouse combination of <span className="text-white font-semibold">Full-Stack Development</span> (React, Next.js, TypeScript, Node.js, AI workflows) backed by <span className="text-cyber-cyan font-semibold">3+ years of professional graphic design</span>. I don't just build functional systems — I make them visually unforgettable.
            </p>

            {/* CTAs & Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <MagneticButton
                onClick={scrollToWorks}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyber-cyan to-electric-indigo text-black font-display font-bold text-sm tracking-wider shadow-[0_0_30px_rgba(0,245,212,0.4)] hover:scale-105"
                cursorText="PROJECTS"
              >
                <span>EXPLORE HIGHLIGHTED WORKS</span>
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </MagneticButton>

              {/* GitHub Button */}
              <a
                href="https://github.com/Ashik-Siddike"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full glass-panel text-white font-mono text-xs tracking-wider hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors"
                data-cursor="view"
                data-cursor-text="GITHUB"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GITHUB</span>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com/in/ashik-siddike"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full glass-panel text-white font-mono text-xs tracking-wider hover:border-electric-indigo/40 hover:text-indigo-300 transition-colors"
                data-cursor="view"
                data-cursor-text="LINKEDIN"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LINKEDIN</span>
              </a>
            </div>

            {/* Real-time stats ticker */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-white">50+</div>
                <div className="text-xs font-mono text-slate-400">Design Deliveries</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-cyber-cyan">3+ YRS</div>
                <div className="text-xs font-mono text-slate-400">Full-Stack & UI/UX</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-electric-indigo">100%</div>
                <div className="text-xs font-mono text-slate-400">Client Dedication</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Holographic Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <PortraitCard />
          </motion.div>

        </div>
      </div>

      {/* Bottom Infinite Marquee Tape */}
      <div className="relative mt-12 w-full overflow-hidden border-y border-white/10 bg-void-card/60 py-3 backdrop-blur-md">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-8 text-xs font-mono tracking-widest text-slate-400 font-semibold select-none"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className={item === "•" ? "text-cyber-cyan" : "hover:text-white transition-colors"}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
