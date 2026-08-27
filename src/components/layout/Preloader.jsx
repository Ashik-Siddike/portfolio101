import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Sparkles, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const developerLogs = [
    "❯ git checkout main && git pull origin",
    "❯ loading modules: React.js, TypeScript, Next.js",
    "❯ establishing backend nodes: Firebase, Supabase, Node.js",
    "❯ initializing AI pipelines: Google Gemini API ready",
    "❯ rendering 3D WebGL shaders & Remotion engine",
    "✔ BUILD SUCCESSFUL (100% COMPILED)",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 10) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % developerLogs.length);
    }, 400);

    return () => clearInterval(logTimer);
  }, [developerLogs.length]);

  const handleEnter = () => {
    setIsDone(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-void p-6 sm:p-12 text-slate-100 cyber-grid"
        >
          {/* Top Bar Developer Info */}
          <div className="flex items-center justify-between font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyber-cyan animate-ping" />
              <span className="text-white tracking-widest font-bold">MD. ASHIK SIDDIKE // DEV_ENV</span>
            </div>
            <div className="tracking-widest text-slate-400">STATUS: COMPILING</div>
          </div>

          {/* Center Dynamic Matrix */}
          <div className="flex flex-col items-center justify-center my-auto text-center max-w-2xl mx-auto w-full">
            {/* Massive Numerical Counter */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-display font-black text-7xl sm:text-9xl md:text-[130px] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 leading-none select-none"
            >
              {String(progress).padStart(3, '0')}
              <span className="text-3xl sm:text-5xl font-light text-cyber-cyan">%</span>
            </motion.div>

            {/* Glowing Linear Progress Track */}
            <div className="relative mt-6 w-full max-w-md h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-cyan via-electric-indigo to-neon-purple"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Terminal Log Stream */}
            <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-void-card/90 border border-white/10 font-mono text-xs text-cyber-cyan max-w-lg w-full justify-center">
              <Terminal className="h-3.5 w-3.5 shrink-0 text-cyber-cyan animate-pulse" />
              <span className="truncate">{developerLogs[logIndex]}</span>
            </div>

            {/* Action when ready */}
            {progress === 100 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8"
              >
                <button
                  onClick={handleEnter}
                  className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyber-cyan via-electric-indigo to-neon-purple text-black font-display font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(0,245,212,0.5)] hover:scale-105 transition-all duration-300"
                >
                  <Cpu className="h-4 w-4" />
                  <span>INITIALIZE WORKSPACE</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            )}
          </div>

          {/* Bottom Footer Specs */}
          <div className="flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-slate-500 gap-2 border-t border-white/5 pt-4">
            <div>FULL-STACK DEVELOPER & UI/UX GRAPHIC DESIGNER</div>
            <div>MAGURA, BANGLADESH // AVAILABLE GLOBALLY</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
