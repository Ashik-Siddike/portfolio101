import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Quote, Award, Sparkles, Building2, CheckCircle, GraduationCap, Briefcase, BookOpen, Clock, FileText, Download, X, ExternalLink, Code2, GitCommit, CheckCircle2, Printer } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { GithubIcon } from '../ui/Icons';
import { KineticTitle, KineticSubtitle } from '../ui/KineticText';

export default function Metrics() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const stats = [
    { value: '50+', label: 'CLIENT DELIVERIES', sub: 'Brand Systems, SaaS & Web Apps' },
    { value: '3+ YRS', label: 'FULL-STACK & UI/UX', sub: 'Bridging high-level code & aesthetics' },
    { value: '100%', label: 'PROJECT SUCCESS RATE', sub: 'Sub-second performance & clean code' },
    { value: '7TH SEM', label: 'CST ENGINEERING', sub: 'Jessore Polytechnic Institute' },
  ];

  const experiences = [
    {
      role: "Support Engineer (Web Development & Research)",
      company: "Dr. Sujit Biswas's Team, City, University of London",
      period: "May 2025 – Present",
      type: "Remote / International",
      color: "from-cyber-cyan to-blue-500",
      points: [
        "Engineered and maintained accessible, high-performance UI components using React.js, Next.js, and Tailwind CSS for international research platforms.",
        "Architected secure backend REST APIs, data validation, and real-time database operations using Node.js, Express.js, and Firebase Firestore.",
        "Collaborated with researchers to translate behavioral datasets and requirements into high-fidelity Figma interactive UI mockups.",
        "Authored system architectures, database schemas, and automated deployment documentation for developer onboarding.",
        "Maintained cross-timezone sprint communication with global engineering teams using Microsoft Teams."
      ]
    },
    {
      role: "Freelance Full-Stack Developer & UI/UX Designer",
      company: "Self-Employed",
      period: "Jan 2023 – Present",
      type: "Remote / Global Clients",
      color: "from-electric-indigo to-neon-purple",
      points: [
        "Successfully delivered 50+ complete web applications, brand identities, and UI/UX design systems for online brands with 100% client satisfaction.",
        "Crafted scalable design systems, vector logos, marketing kits, and prototypes using Figma, Adobe Photoshop, and Illustrator.",
        "Applied core visual hierarchy, color psychology, and responsive design directly to frontend code to boost conversion and user engagement."
      ]
    }
  ];

  const educationAndCertifications = [
    {
      title: "Diploma in Engineering (CST)",
      institution: "Jessore Polytechnic Institute",
      period: "Jan 2023 – Jan 2027",
      detail: "Computer Science & Technology (7th Semester, Core Software Engineering)",
      badge: "Engineering"
    },
    {
      title: "SSC (Vocational) - Computer Trade",
      institution: "Satkhira Govt. Technical School & College",
      period: "Graduated: 2022",
      detail: "GPA: 4.86 / 5.00 — Foundational Computer Trade & Hardware Logic",
      badge: "Academic"
    },
    {
      title: "Full-Stack MERN Development",
      institution: "Programming Hero",
      period: "Complete Bootcamp",
      detail: "Full-Stack Web Development Mastery (React.js, Node.js, Express, MongoDB)",
      badge: "Full-Stack"
    },
    {
      title: "Hafeez of the Holy Quran",
      institution: "Quranic Academy",
      period: "Honorable Milestone",
      detail: "Full Quran memorization & Tajweed — extreme discipline, memory retention & mental focus",
      badge: "Discipline"
    }
  ];

  return (
    <section id="metrics" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-void border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan tracking-widest uppercase mb-2">
              <Trophy className="h-3.5 w-3.5" />
              <KineticSubtitle text="// 06. EXPERIENCE & ACADEMIC CREDENTIALS" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
              <KineticTitle text="PROVEN TRACK RECORD" /> <br />
              <KineticTitle text="& PROFESSIONAL JOURNEY." delay={0.2} className="text-slate-300" />
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowResumeModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan font-mono text-xs font-bold hover:bg-cyber-cyan hover:text-black transition-all shadow-[0_0_20px_rgba(0,245,212,0.2)]"
            >
              <FileText className="h-4 w-4" />
              <span>VIEW FULL RESUME</span>
            </button>

            <a
              href="/resume.html"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs font-bold hover:border-cyber-cyan hover:text-cyber-cyan transition-all"
            >
              <Printer className="h-4 w-4 text-cyber-cyan" />
              <span>PRINT / PDF CV</span>
            </a>
          </div>
        </div>

        {/* Stats Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl glass-panel border border-white/10 glass-card-hover text-left flex flex-col justify-between"
            >
              <div className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-electric-indigo mb-3">
                {stat.value}
              </div>
              <div>
                <h4 className="font-mono text-xs font-bold text-white tracking-wider mb-1">
                  {stat.label}
                </h4>
                <p className="font-mono text-[11px] text-slate-400">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-widest mb-8">
            <Briefcase className="h-4 w-4 text-cyber-cyan" />
            <KineticSubtitle text="PROFESSIONAL WORK EXPERIENCE" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 glass-card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 font-mono text-sm text-cyber-cyan mt-1">
                      <Building2 className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-xs">
                    <span className="text-white font-bold px-3 py-1 rounded-full bg-white/10 border border-white/10">
                      {exp.period}
                    </span>
                    <span className="text-slate-400 mt-1">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-3 font-light text-slate-300 text-sm sm:text-base">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyber-cyan mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Honors */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-widest mb-8">
            <GraduationCap className="h-4 w-4 text-liquid-gold" />
            <KineticSubtitle text="EDUCATION, HONORS & CERTIFICATIONS" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationAndCertifications.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-3xl glass-panel border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 font-mono text-[10px] text-cyber-cyan mb-4 border border-white/10">
                    {edu.badge}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    {edu.title}
                  </h4>
                  <p className="font-mono text-xs text-slate-400 mb-3">{edu.institution}</p>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {edu.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400">
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive High-Impact Full Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl glass-panel p-6 sm:p-10 bg-void border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.95)]"
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 font-mono text-[11px] text-cyber-cyan font-semibold">
                    CURRICULUM VITAE // VERIFIED 2026
                  </span>
                  <h2 className="font-display font-black text-2xl sm:text-4xl text-white mt-1">
                    Md. Ashik Siddike
                  </h2>
                  <p className="font-mono text-xs sm:text-sm text-slate-300">
                    FULL-STACK WEB DEVELOPER & UI/UX DESIGNER | CREATIVE TECHNOLOGIST
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="/resume.html"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-cyan text-black font-display font-bold text-xs hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,245,212,0.4)]"
                  >
                    <Printer className="h-3.5 w-3.5" />
                    <span>PRINT / PDF</span>
                  </a>

                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Contact Header Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs text-slate-300 p-3 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div>✉ <span className="text-white font-semibold">ashiksiddike@gmail.com</span></div>
                <div>☎ <span className="text-white font-semibold">+880 1918 766033</span></div>
                <div>📍 <span className="text-white font-semibold">Magura, Bangladesh</span></div>
                <div>🌐 <a href="https://ashiksiddike.com" target="_blank" rel="noreferrer" className="text-cyber-cyan hover:underline">ashiksiddike.com</a></div>
                <div>🐙 <a href="https://github.com/Ashik-Siddike" target="_blank" rel="noreferrer" className="text-cyber-cyan hover:underline">github.com/Ashik-Siddike</a></div>
                <div>💼 <a href="https://linkedin.com/in/ashik-siddike" target="_blank" rel="noreferrer" className="text-cyber-cyan hover:underline">linkedin.com/in/ashik-siddike</a></div>
              </div>

              {/* Professional Profile */}
              <div className="space-y-6 text-slate-300 text-sm">
                <div>
                  <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase tracking-wider mb-2">
                    // EXECUTIVE SUMMARY
                  </h4>
                  <p className="leading-relaxed font-light text-slate-200">
                    Results-driven <strong>Full-Stack Web Developer & UI/UX Specialist</strong> with 3+ years of commercial experience engineering scalable web applications, AI-driven automation workflows, and high-converting visual branding. Highly proficient in <strong>React.js, Next.js, TypeScript, Node.js, Firebase, Supabase</strong>, and <strong>Google Gemini API</strong> integration. Proven track record of delivering <strong>50+ successful client projects</strong> and building production SaaS systems with sub-second performance, strict security, and modern UI/UX design systems.
                  </p>
                </div>

                {/* Technical Skills Matrix */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-electric-indigo uppercase tracking-wider mb-2">
                    // TECHNICAL SKILLS ARSENAL
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-cyber-cyan font-bold block mb-1">Frontend Architecture</span>
                      React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, GSAP, HTML5, CSS3, shadcn/ui
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-electric-indigo font-bold block mb-1">Backend & Cloud</span>
                      Node.js, Express.js, Firebase (Auth, Firestore, Cloud Functions), Supabase (PostgreSQL, RLS), MongoDB, REST APIs, SQL
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-neon-purple font-bold block mb-1">UI/UX & Design Systems</span>
                      Figma (Design Systems, Auto-Layout), Adobe Photoshop, Adobe Illustrator, Vector Branding, Design Hierarchy
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-liquid-gold font-bold block mb-1">AI & Workflows</span>
                      Google Gemini API, LLM Prompt Engineering, Python Automation, Git, GitHub, Vercel, Chrome DevTools
                    </div>
                  </div>
                </div>

                {/* Highlighted Projects */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase tracking-wider mb-3">
                    // HIGHLIGHTED PRODUCTION PROJECTS
                  </h4>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-sm">IntervueAI — AI-Powered Interactive Mock Interviewer SaaS</span>
                        <span className="font-mono text-[11px] text-cyber-cyan">2025 – 2026</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light mb-2">
                        Next.js • TypeScript • Google Gemini 1.5 Pro • Supabase (Auth/RLS) • Tailwind CSS
                      </p>
                      <ul className="text-xs space-y-1 text-slate-400 font-light list-disc list-inside">
                        <li>Engineered an AI SaaS platform that analyzes uploaded PDF resumes and synthesizes personalized coding and behavioral challenges in &lt; 2s.</li>
                        <li>Implemented real-time scoring evaluations, candidate performance metrics, and secure Supabase Row-Level Security (RLS).</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-sm">Affiliate Campaign Automation Platform</span>
                        <span className="font-mono text-[11px] text-cyber-cyan">2025</span>
                      </div>
                      <p className="text-xs text-slate-300 font-light mb-2">
                        Next.js • TypeScript • Python (Scraping) • Gemini AI • Vercel
                      </p>
                      <ul className="text-xs space-y-1 text-slate-400 font-light list-disc list-inside">
                        <li>Built an autonomous publishing pipeline generating SEO-optimized product reviews using Python and Gemini AI (+240% organic traffic).</li>
                        <li>Engineered affiliate link cloaking, secure redirection, and real-time conversion click tracking analytics.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://github.com/Ashik-Siddike"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-cyber-cyan hover:underline"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>github.com/Ashik-Siddike</span>
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href="/resume.html"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs hover:border-cyber-cyan hover:text-cyber-cyan transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>SAVE PDF</span>
                  </a>

                  <a
                    href="mailto:ashiksiddike@gmail.com"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyber-cyan to-electric-indigo text-black font-display font-bold text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,245,212,0.4)]"
                  >
                    HIRE MD. ASHIK SIDDIKE
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
