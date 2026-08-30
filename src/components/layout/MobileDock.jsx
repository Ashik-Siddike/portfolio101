import React from 'react';
import { motion } from 'framer-motion';
import { Layers, FileText, Send, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '../ui/Icons';

export default function MobileDock() {
  const whatsappUrl = "https://wa.me/8801918766033";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden pointer-events-none flex justify-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between gap-1.5 p-2 rounded-full glass-panel bg-void/90 border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.9)] backdrop-blur-xl max-w-sm w-full"
      >
        {/* Projects / Works */}
        <button
          onClick={() => scrollToSection('works')}
          className="flex flex-1 flex-col items-center justify-center py-1.5 px-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all font-mono text-[10px]"
        >
          <Layers className="h-4 w-4 text-cyber-cyan mb-0.5" />
          <span className="font-bold">WORKS</span>
        </button>

        {/* 1-Tap WhatsApp Direct Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 flex-col items-center justify-center py-1.5 px-2 rounded-full text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all font-mono text-[10px]"
        >
          <div className="relative">
            <WhatsAppIcon className="h-4 w-4 text-emerald-400 mb-0.5" />
            <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span className="font-bold text-emerald-400">CHAT</span>
        </a>

        {/* Print / PDF CV */}
        <a
          href="/resume.html"
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 flex-col items-center justify-center py-1.5 px-2 rounded-full text-slate-300 hover:text-cyber-cyan hover:bg-white/10 transition-all font-mono text-[10px]"
        >
          <FileText className="h-4 w-4 text-indigo-400 mb-0.5" />
          <span className="font-bold">RESUME</span>
        </a>

        {/* Hire Me / Contact CTA */}
        <button
          onClick={() => scrollToSection('contact')}
          className="flex flex-1 flex-col items-center justify-center py-1.5 px-2.5 rounded-full bg-gradient-to-r from-cyber-cyan to-electric-indigo text-black font-display font-black text-[10px] shadow-[0_0_15px_rgba(0,245,212,0.4)]"
        >
          <Send className="h-3.5 w-3.5 mb-0.5" />
          <span>HIRE ME</span>
        </button>
      </motion.div>
    </div>
  );
}
