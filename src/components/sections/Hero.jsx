import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Globe, Terminal, Layers, Code, Play, FileText } from 'lucide-react';
import HeroScene from '../3d/HeroScene';
import PortraitCard from '../ui/PortraitCard';
import MagneticButton from '../ui/MagneticButton';
import { KineticTitle, KineticSubtitle } from '../ui/KineticText';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import DotBorderButton from '../ui/dot-border-button';
import LiquidMetalButton from '../ui/liquid-metal-button';

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
      className="relative min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-24 pb-6 overflow-hidden bg-transparent"
    >
      {/* 3D WebGL Three.js Particle and Geometry Canvas */}
      <HeroScene />

      {/* Cyber Glow radial spots */}
      <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-electric-indigo/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 h-96 w-96 rounded-full bg-cyber-cyan/10 blur-[140px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Vision & Identity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            
            {/* Live Availability & Experience Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full glass-panel px-3.5 py-1 text-[11px] font-mono text-slate-300 mb-4 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white font-semibold">SUPPORT ENGINEER @ CITY, UNIVERSITY OF LONDON</span>
              <span className="text-cyber-cyan hidden sm:inline">• REMOTE</span>
            </div>

            {/* Massive Kinetic Headline (100% Crisp & Legible) */}
            <div className="space-y-1">
              <div className="font-mono text-xs tracking-[0.25em] text-cyber-cyan uppercase font-bold">
                <KineticSubtitle text="// MD. ASHIK SIDDIKE — HYBRID CREATIVE ENGINEER" delay={0.1} />
              </div>
              
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] tracking-tight leading-[1.04] text-white">
                <KineticTitle text="BRIDGING FULL-STACK" delay={0.2} /> <br />
                <KineticTitle text="CODE & ELITE" delay={0.35} className="text-slate-300" /> <br />
                <KineticTitle text="DESIGN ARCHITECTURE." delay={0.5} gradient={true} />
              </h1>
            </div>

            {/* Sub-headline / Identity */}
            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300/90 font-light leading-relaxed">
              A powerhouse combination of <span className="text-white font-semibold">Full-Stack Development</span> (React, Next.js, TypeScript, Node.js, AI workflows) backed by <span className="text-cyber-cyan font-semibold">3+ years of professional graphic design</span>. I don't just build functional systems — I make them visually unforgettable.
            </p>

            {/* CTAs & Social Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Dot Border CTA */}
              <DotBorderButton
                onClick={scrollToWorks}
                variant="cyan"
                label="EXPLORE WORKS"
                icon={<ArrowDownRight className="h-4 w-4 text-cyber-cyan" />}
              />

              {/* Liquid Metal Hire Me CTA */}
              <LiquidMetalButton
                label="LET'S TALK"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* GitHub Button */}
              <DotBorderButton
                href="https://github.com/Ashik-Siddike"
                target="_blank"
                rel="noreferrer"
                variant="white"
                label="GITHUB"
                icon={<GithubIcon className="h-3.5 w-3.5 text-slate-300" />}
              />

              {/* LinkedIn Button */}
              <DotBorderButton
                href="https://linkedin.com/in/ashik-siddike"
                target="_blank"
                rel="noreferrer"
                variant="indigo"
                label="LINKEDIN"
                icon={<LinkedinIcon className="h-3.5 w-3.5 text-indigo-400" />}
              />
            </div>

            {/* Real-time stats ticker */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-4 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="font-display text-xl sm:text-2xl font-extrabold text-white">50+</div>
                <div className="text-[11px] font-mono text-slate-400">Design Deliveries</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-extrabold text-cyber-cyan">3+ YRS</div>
                <div className="text-[11px] font-mono text-slate-400">Full-Stack & UI/UX</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-extrabold text-electric-indigo">100%</div>
                <div className="text-[11px] font-mono text-slate-400">Client Dedication</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Holographic Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <PortraitCard />
          </motion.div>

        </div>
      </div>

      {/* Bottom Infinite Marquee Tape */}
      <div className="relative mt-6 w-full overflow-hidden border-y border-white/10 bg-void-card/60 py-2.5 backdrop-blur-md">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-8 text-[11px] font-mono tracking-widest text-slate-400 font-semibold select-none"
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
