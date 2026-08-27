import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Quote, Award, Sparkles, Building2, CheckCircle, GraduationCap, Briefcase, BookOpen, Clock, FileText, Download, X, ExternalLink, Code2, GitCommit, CheckCircle2 } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { GithubIcon } from '../ui/Icons';
import { KineticTitle, KineticSubtitle } from '../ui/KineticText';

export default function Metrics() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const stats = [
    { value: '50+', label: 'CLIENT DESIGN DELIVERIES', sub: 'Logos, Brand Books & Marketing Kits' },
    { value: '3+ YRS', label: 'GRAPHIC DESIGN & CODE', sub: 'Bridging aesthetics & technical logic' },
    { value: '100%', label: 'PROJECT SUCCESS RATE', sub: 'Strict attention to detail and timelines' },
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
        "Developed and maintained responsive, accessible, and intuitive UI components using React.js and Tailwind CSS for educational platforms.",
        "Collaborated on backend API integration, data validation, and database operations using Node.js, Express.js, and Firebase.",
        "Translated business requirements and user behavioral research into technical interface mockups.",
        "Documented system structures, database models, and deployment workflows for developer onboarding.",
        "Maintained smooth cross-time-zone communication with global teams using Microsoft Teams."
      ]
    },
    {
      role: "Freelance Graphic Designer & UI/UX Specialist",
      company: "Self-Employed",
      period: "Jan 2023 – Present",
      type: "Remote / Global Clients",
      color: "from-electric-indigo to-neon-purple",
      points: [
        "Successfully designed and delivered 50+ graphic design projects for online brands.",
        "Created branding packages, vector logos, marketing posters, banners, and social media kits.",
        "Mastered digital layout software: Figma, Adobe Photoshop, and Illustrator.",
        "Leveraged design fundamentals (colors, spacing, visual hierarchies) to code superior web layouts."
      ]
    }
  ];

  const educationAndCertifications = [
    {
      title: "Diploma in Engineering (CST)",
      institution: "Jessore Polytechnic Institute",
      period: "Jan 2023 – Jan 2027",
      detail: "Computer Science & Technology (7th Semester)",
      badge: "Engineering"
    },
    {
      title: "Hafeez of the Holy Quran",
      institution: "Quranic Academy",
      period: "Honorable Milestone",
      detail: "Full Quran memorization & Tajweed — extreme discipline, memory & focus",
      badge: "Discipline"
    },
    {
      title: "MERN Stack Development",
      institution: "Programming Hero",
      period: "Complete Bootcamp",
      detail: "Full-Stack Web Development Mastery (React, Node, Express, MongoDB)",
      badge: "Full-Stack"
    },
    {
      title: "AI Prompt Engineering",
      institution: "Hands-on Certification",
      period: "Applied AI",
      detail: "Hands-on AI workflows, Gemini API integration & LLM prompting",
      badge: "AI Engineering"
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

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowResumeModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan font-mono text-xs font-bold hover:bg-cyber-cyan hover:text-black transition-all shadow-[0_0_20px_rgba(0,245,212,0.2)]"
            >
              <FileText className="h-4 w-4" />
              <span>VIEW FULL RESUME</span>
            </button>
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

        {/* Experience Timeline with Slide-up */}
        <div className="mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-widest mb-8">
            <Briefcase className="h-4 w-4 text-cyber-cyan" />
            <KineticSubtitle text="PROFESSIONAL WORK EXPERIENCE" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Education & Honors with Staggered Grid Reveal */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-widest mb-8">
            <GraduationCap className="h-4 w-4 text-liquid-gold" />
            <KineticSubtitle text="EDUCATION, HONORS & CERTIFICATIONS" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationAndCertifications.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
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

      {/* Resume Modal */}
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
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl glass-panel p-8 sm:p-12 bg-void border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="border-b border-white/10 pb-6 mb-6">
                <div className="font-mono text-xs text-cyber-cyan mb-2">CURRICULUM VITAE // VERIFIED</div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
                  Md. Ashik Siddike
                </h2>
                <p className="font-mono text-sm text-slate-300 mt-1">
                  WEB DEVELOPER & GRAPHIC DESIGNER
                </p>
                <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-slate-400">
                  <span>✉ ashiksiddike@gmail.com</span>
                  <span>☎ +880 1918 766033</span>
                  <span>⚲ Magura, Bangladesh</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-6 text-slate-300 text-sm">
                <div>
                  <h4 className="font-mono text-xs font-bold text-cyber-cyan uppercase tracking-wider mb-2">
                    // PROFESSIONAL PROFILE
                  </h4>
                  <p className="leading-relaxed font-light">
                    Motivated and passionate Full-Stack Web Developer with a strong foundation in frontend and backend technologies. Eager to explore advanced tools and frameworks including AI-integrated workflows. Backed by 3+ years of professional graphic design experience to bridge visual aesthetics and technical programming seamlessly.
                  </p>
                </div>

                {/* Technical Skills Overview */}
                <div>
                  <h4 className="font-mono text-xs font-bold text-electric-indigo uppercase tracking-wider mb-2">
                    // TECHNICAL SKILLS MATRIX
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white font-bold block mb-1">Frontend</span>
                      React.js, Next.js, TypeScript, Tailwind CSS, GSAP, HTML5, CSS3, shadcn/ui
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white font-bold block mb-1">Backend & Cloud</span>
                      Node.js, Express.js, Firebase, Supabase, MongoDB, REST APIs, SQL, Python
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white font-bold block mb-1">Design & UI/UX</span>
                      Figma, Adobe Photoshop, Illustrator, Visual Layout, Branding, Logos
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-white font-bold block mb-1">AI & Workflows</span>
                      Google Gemini API, Prompt Engineering, Git/GitHub, Chrome DevTools
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://github.com/Ashik-Siddike"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-cyber-cyan hover:underline"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>github.com/Ashik-Siddike</span>
                </a>

                <a
                  href="mailto:ashiksiddike@gmail.com"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyber-cyan to-electric-indigo text-black font-display font-bold text-xs"
                >
                  CONTACT FOR HIRE
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
