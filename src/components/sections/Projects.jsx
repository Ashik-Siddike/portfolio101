import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle, X, ShieldCheck, TrendingUp, Bot, Sparkle } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { GithubIcon } from '../ui/Icons';
import { KineticTitle, KineticSubtitle } from '../ui/KineticText';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'AI & SAAS', 'FULL-STACK WEB', 'BRANDING & GRAPHICS'];

  const projects = [
    {
      id: 'intervue-ai',
      title: 'INTERVUEAI',
      category: 'AI & SAAS',
      tagline: 'AI-Powered Interactive Mock Interviewer & Resume Intelligence SaaS',
      year: '2025 – 2026',
      client: 'Independent SaaS Launch',
      role: 'Full-Stack Developer & AI Systems Engineer',
      gradient: 'from-cyan-500/20 via-indigo-500/20 to-purple-500/20',
      accentColor: '#00f5d4',
      impact: 'Real-time Gemini AI Scoring',
      metrics: [
        { label: 'AI Evaluation Speed', value: '< 2.4s' },
        { label: 'Question Tailoring', value: '100% Contextual' },
        { label: 'Resume Parser Accuracy', value: '99.4%' },
      ],
      description:
        'A premium SaaS platform that parses and analyzes uploaded PDF resumes, generates personalized technical and behavioral interview questions, conducts an interactive voice-ready mock interview, and grades candidate responses with instant analytics powered by Google Gemini API.',
      deliverables: [
        'Google Gemini API Integration',
        'PDF Parsing & Resume Intelligence Pipeline',
        'Real-time Performance Scoring Engine',
        'Supabase Authentication & Database',
        'TypeScript Next.js Architecture',
        'Responsive Tailwind CSS UI System',
      ],
      techStack: ['Next.js', 'TypeScript', 'Google Gemini API', 'Tailwind CSS', 'Supabase'],
      github: 'https://github.com/Ashik-Siddike',
      liveUrl: 'https://github.com/Ashik-Siddike',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'affiliate-automation',
      title: 'AFFILIATE AUTOMATION SYSTEM',
      category: 'AI & SAAS',
      tagline: 'Full-Stack Campaign Automation with Python Auto-Blogging Backend',
      year: '2025',
      client: 'Autonomous Digital Publishing',
      role: 'Full-Stack & Python Automation Engineer',
      gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
      accentColor: '#6366f1',
      impact: '100% Autonomous SEO Content',
      metrics: [
        { label: 'Articles Auto-Generated', value: '10,000+' },
        { label: 'SEO Ranking Boost', value: '+240%' },
        { label: 'Click Tracking Accuracy', value: '99.9%' },
      ],
      description:
        'A robust multi-tier automation ecosystem combining a modern Next.js frontend with an autonomous Python backend. Uses Google Gemini AI to generate deeply researched, SEO-optimized product reviews, implements automated affiliate link cloaking, and provides real-time click statistics and conversion logs.',
      deliverables: [
        'Python Auto-Blogging & Scraping Pipeline',
        'Gemini AI SEO Review Generation',
        'Affiliate URL Cloaking & Redirection',
        'Live Click & Analytics Dashboard',
        'Vercel Deployment Automation',
      ],
      techStack: ['Next.js', 'TypeScript', 'Python', 'Gemini AI', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/Ashik-Siddike',
      liveUrl: 'https://github.com/Ashik-Siddike',
      image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: '247school',
      title: '247SCHOOL PLATFORM',
      category: 'FULL-STACK WEB',
      tagline: 'Web-Based Virtual Classroom & School Management Ecosystem',
      year: '2024 – 2025',
      client: '247School Educational Platform',
      role: 'Frontend Lead & Firebase Architect',
      gradient: 'from-emerald-500/20 via-cyan-500/20 to-blue-500/20',
      accentColor: '#10b981',
      impact: 'Live @ 247school.org',
      metrics: [
        { label: 'Enrolled Students', value: '5,000+' },
        { label: 'Uptime Reliability', value: '99.99%' },
        { label: 'Role Security', value: 'Multi-Tier RBAC' },
      ],
      description:
        'A comprehensive online schooling application facilitating student enrollment, virtual classrooms, assignment management, and academic timelines. Features strict role-based access control (Admin, Teacher, Student) with real-time Firebase Firestore synchronization.',
      deliverables: [
        'Multi-Role Authorization (RBAC)',
        'Virtual Classroom & Curriculum Timelines',
        'Real-time Firestore Database Integration',
        'Interactive Student/Teacher Dashboards',
        'Optimized Component Architecture',
      ],
      techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Firebase Auth', 'Firestore'],
      github: 'https://github.com/Ashik-Siddike',
      liveUrl: 'https://247school.org',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'graphic-branding-suite',
      title: 'BRAND IDENTITY & VECTOR SUITE',
      category: 'BRANDING & GRAPHICS',
      tagline: '50+ Delivered Branding Packages, Vector Logos & Marketing Kits',
      year: '2023 – Present',
      client: 'Global Online Brands & Businesses',
      role: 'Graphic Designer & Visual Artist',
      gradient: 'from-pink-500/20 via-amber-500/20 to-purple-500/20',
      accentColor: '#f59e0b',
      impact: '50+ Completed Projects',
      metrics: [
        { label: 'Client Satisfaction', value: '100%' },
        { label: 'Branding Packages', value: '50+' },
        { label: 'Visual Hierarchy', value: 'Pixel Perfect' },
      ],
      description:
        'Over 3 years of delivering high-impact brand identities, custom vector logos, marketing banners, and comprehensive social media kits. Leveraging foundational design principles (chromatic theory, golden ratios, visual hierarchies) to elevate brand trust and drive conversions.',
      deliverables: [
        'Vector Logo Design & Brand Books',
        'Marketing Posters & Social Media Kits',
        'High-Fidelity Figma UI Prototypes',
        'Adobe Photoshop & Illustrator Mastering',
      ],
      techStack: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Visual Identity', 'Typography'],
      github: 'https://github.com/Ashik-Siddike',
      liveUrl: 'https://github.com/Ashik-Siddike',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="works" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-void overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan tracking-widest uppercase mb-2">
              <Layers className="h-3.5 w-3.5" />
              <KineticSubtitle text="// 03. HIGHLIGHTED REAL-WORLD PROJECTS" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
              <KineticTitle text="CRAFTED WITH CODE" /> <br />
              <KineticTitle text="& DESIGN PRECISION." delay={0.2} className="text-slate-300" />
            </h2>
          </div>

          {/* Category Filter Pills (Horizontal scrollable on mobile) */}
          <div className="flex items-center gap-2 p-1.5 glass-panel rounded-2xl sm:rounded-full border border-white/10 overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap shrink-0 transition-all duration-300 ${
                  activeFilter === cat
                    ? 'text-black font-bold bg-cyber-cyan shadow-[0_0_15px_rgba(0,245,212,0.5)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                data-cursor="pointer"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Staggered Alternating Arrival Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{
                    opacity: 0,
                    x: isEven ? -40 : 40,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => openProjectModal(project)}
                  className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 glass-card-hover cursor-pointer"
                  data-cursor="view"
                  data-cursor-text="EXPLORE"
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-void-light">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-90 group-hover:brightness-100"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Category Pill Tag */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="rounded-full px-3 py-1 bg-black/70 backdrop-blur-md text-[11px] font-mono text-cyber-cyan border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Impact Badge */}
                    <div className="absolute top-5 right-5 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-emerald-500/20 backdrop-blur-md text-[11px] font-mono font-bold text-emerald-400 border border-emerald-500/30">
                        <TrendingUp className="h-3 w-3" />
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-cyber-cyan transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-cyber-cyan group-hover:text-black transition-all">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>

                      <p className="font-mono text-xs sm:text-sm text-slate-300 line-clamp-2">
                        {project.tagline}
                      </p>

                      {/* Tech stack pill tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techStack.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client & Role Footnote */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
                      <div>{project.client}</div>
                      <div className="text-cyber-cyan">{project.year}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Case Study Modal / Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl glass-panel p-6 sm:p-10 bg-void border border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
            >
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                data-cursor="pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 font-mono text-xs text-cyber-cyan mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30">
                  {selectedProject.category}
                </span>
                <span>// {selectedProject.year} ARCHITECTURE</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
                {selectedProject.title}
              </h2>
              <p className="mt-2 text-slate-300 text-lg font-light">
                {selectedProject.tagline}
              </p>

              {/* Hero Image */}
              <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Metrics Grid */}
              <div className="mt-8 grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display font-extrabold text-2xl sm:text-3xl text-cyber-cyan">
                      {m.value}
                    </div>
                    <div className="font-mono text-xs text-slate-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Detailed Narrative */}
              <div className="mt-8 space-y-4 text-slate-300 leading-relaxed">
                <h4 className="font-display font-bold text-xl text-white">System Architecture & Capabilities</h4>
                <p>{selectedProject.description}</p>

                <h4 className="font-display font-bold text-xl text-white pt-4">Key Engineering Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-xs text-slate-200">
                      <CheckCircle className="h-4 w-4 text-cyber-cyan shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h4 className="font-display font-bold text-xl text-white pt-4">Tech Stack & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/10 font-mono text-xs text-cyber-cyan border border-cyber-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs text-slate-400">
                  DEVELOPED BY: <span className="text-white font-semibold">Md. Ashik Siddike</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Ashik-Siddike"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>VIEW GITHUB REPO</span>
                  </a>

                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyber-cyan to-electric-indigo text-black font-display font-bold text-xs tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,245,212,0.4)]"
                  >
                    <span>LAUNCH PROJECT</span>
                    <ExternalLink className="h-3.5 w-3.5" />
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
