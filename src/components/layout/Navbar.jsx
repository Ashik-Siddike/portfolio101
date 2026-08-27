import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Send, Terminal, Star } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { GithubIcon } from '../ui/Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'SHOWREEL', href: '#showreel' },
    { label: 'WORKS', href: '#works' },
    { label: 'LAB (3D)', href: '#lab' },
    { label: 'EXPERTISE', href: '#philosophy' },
    { label: 'EXPERIENCE', href: '#metrics' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section tracker
      const sections = ['hero', 'showreel', 'works', 'lab', 'philosophy', 'metrics', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 transition-all duration-500 ${
          scrolled
            ? 'glass-panel bg-void/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-white/10'
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

        {/* Right Actions: GitHub Repo / Status + Contact CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub Direct Link Button */}
          <a
            href="https://github.com/Ashik-Siddike"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 border border-white/10 bg-white/5 text-xs font-mono text-slate-300 hover:border-cyber-cyan/40 hover:text-white transition-all duration-300"
            title="View Ashik's GitHub Repositories"
          >
            <GithubIcon className="h-3.5 w-3.5 text-cyber-cyan" />
            <span className="hidden sm:inline text-[10px] font-bold">GITHUB</span>
          </a>

          {/* Magnetic CTA */}
          <MagneticButton
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyber-cyan to-electric-indigo px-4 py-1.5 text-xs font-display font-bold text-black shadow-[0_0_20px_rgba(0,245,212,0.35)] hover:scale-105"
            cursorText="LET'S GO"
          >
            <span>HIRE ME</span>
            <Send className="h-3 w-3" />
          </MagneticButton>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto fixed top-20 left-4 right-4 z-40 rounded-2xl glass-panel p-6 border border-white/10 md:hidden flex flex-col gap-4 bg-void/95"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="font-display text-lg font-bold text-slate-200 hover:text-cyber-cyan transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="mt-2 text-center rounded-full bg-gradient-to-r from-cyber-cyan to-electric-indigo py-3 font-display font-bold text-black text-sm"
            >
              HIRE ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
