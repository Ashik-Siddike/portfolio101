import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Send, Layers, Film, Cpu, Award, Trophy, MessageSquare, FileText } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { GithubIcon, WhatsAppIcon } from '../ui/Icons';
import LiquidMetalButton from '../ui/liquid-metal-button';
import DotBorderButton from '../ui/dot-border-button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'WORKS', href: '#works', icon: Layers },
    { label: 'SHOWREEL', href: '#showreel', icon: Film },
    { label: 'AI LAB', href: '#lab', icon: Cpu },
    { label: 'EXPERTISE', href: '#philosophy', icon: Award },
    { label: 'EXPERIENCE', href: '#metrics', icon: Trophy },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'works', 'showreel', 'lab', 'philosophy', 'metrics', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-3 sm:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-8 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-500 max-w-5xl w-full ${
          scrolled
            ? 'glass-panel bg-void/85 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-white/10'
            : 'bg-void/40 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="group flex items-center gap-2 font-display text-sm sm:text-base font-extrabold tracking-wider text-white"
          data-cursor="view"
          data-cursor-text="HOME"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-cyber-cyan to-electric-indigo text-black text-xs font-black shadow-[0_0_15px_rgba(0,245,212,0.6)]">
            A
          </span>
          <span className="group-hover:text-cyber-cyan transition-colors duration-300">
            ASHIK<span className="text-cyber-cyan font-light">.DEV</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                data-cursor="view"
                className={`relative px-3.5 py-1.5 rounded-full font-mono text-[11px] font-medium tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white/10 border border-cyber-cyan/30"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub Direct Link */}
          <DotBorderButton
            href="https://github.com/Ashik-Siddike"
            target="_blank"
            rel="noreferrer"
            variant="white"
            label="GITHUB"
            className="hidden sm:inline-flex !p-1"
            icon={<GithubIcon className="h-3 w-3 text-cyber-cyan" />}
          />

          {/* Liquid Metal Hire Me CTA */}
          <div className="hidden sm:block">
            <LiquidMetalButton
              label="HIRE ME"
              onClick={() => scrollToSection(null, '#contact')}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden pointer-events-auto"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="pointer-events-auto fixed top-16 left-3 right-3 z-50 rounded-3xl glass-panel p-5 border border-white/15 md:hidden flex flex-col gap-3 bg-void-card/95 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-1">
                <div className="font-mono text-xs text-cyber-cyan font-bold">
                  // NAVIGATION MENU
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>AVAILABLE GLOBALLY</span>
                </div>
              </div>

              {/* Nav Items List */}
              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center gap-3 p-3 rounded-2xl font-mono text-xs transition-colors ${
                        isActive
                          ? 'bg-cyber-cyan/15 text-cyber-cyan font-bold border border-cyber-cyan/30'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 text-white font-mono text-xs font-bold"
                >
                  <FileText className="h-3.5 w-3.5 text-cyber-cyan" />
                  <span>VIEW RESUME</span>
                </a>

                <a
                  href="https://wa.me/8801918766033"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>WHATSAPP</span>
                </a>
              </div>

              {/* Direct Hire CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full text-center rounded-2xl bg-gradient-to-r from-cyber-cyan to-electric-indigo py-3.5 font-display font-black text-black text-xs tracking-wider shadow-[0_0_20px_rgba(0,245,212,0.3)]"
              >
                LET'S TALK — HIRE ASHIK
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
