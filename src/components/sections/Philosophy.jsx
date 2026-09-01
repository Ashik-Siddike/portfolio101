import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Code2, PenTool, Layout, Box, Wand2, Terminal, CheckCircle2, Server, Database, BrainCircuit, Palette } from 'lucide-react';
import { KineticTitle, KineticSubtitle } from '../ui/KineticText';

export default function Philosophy() {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    {
      title: "FRONTEND & INTERACTIVE UI",
      icon: Layout,
      color: "from-cyber-cyan to-blue-500",
      accent: "#00f5d4",
      philosophy: "Modern web interfaces must be ultra-responsive, accessible, and cinematic. I specialize in building reusable, scalable component systems in React & Next.js with TypeScript and Tailwind CSS.",
      tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP & Three.js", "shadcn/ui", "HTML5/CSS3"],
      level: "Advanced Full-Stack",
      milestone: "Production SaaS & High-Traffic Apps"
    },
    {
      title: "BACKEND, CLOUD & DATABASES",
      icon: Server,
      color: "from-electric-indigo to-neon-purple",
      accent: "#6366f1",
      philosophy: "A gorgeous frontend is only as powerful as the engine behind it. I architect resilient APIs, secure role authentication, and real-time database workflows with Node, Firebase, and Supabase.",
      tools: ["Node.js", "Express.js", "Firebase Firestore", "Supabase", "MongoDB", "REST APIs", "SQL", "Python"],
      level: "Robust Scalability",
      milestone: "Secure Auth, Real-time sync & REST APIs"
    },
    {
      title: "UI/UX & GRAPHIC DESIGN (3+ YRS)",
      icon: Palette,
      color: "from-pink-500 to-amber-500",
      accent: "#f59e0b",
      philosophy: "Design isn't an afterthought — it's the core differentiator. With 3+ years of professional graphic design and 50+ delivered brand projects, I leverage golden ratios, color psychology, and Figma systems.",
      tools: ["Figma Design Systems", "Adobe Photoshop", "Adobe Illustrator", "Vector Branding", "Visual Hierarchy", "Logo Design"],
      level: "50+ Client Brands",
      milestone: "End-to-end Brand & UI/UX Kits"
    },
    {
      title: "AI WORKFLOWS & PROMPT ENGINEERING",
      icon: BrainCircuit,
      color: "from-emerald-400 to-cyan-500",
      accent: "#10b981",
      philosophy: "AI is the ultimate force multiplier. Integrating Google Gemini API directly into full-stack applications to build autonomous resume evaluators, SEO blogging pipelines, and intelligent interfaces.",
      tools: ["Google Gemini API", "LLM Prompt Engineering", "AI Automation Pipelines", "Python Scripts", "Git & GitHub"],
      level: "Certified Practitioner",
      milestone: "AI-Integrated Real-World SaaS"
    }
  ];

  const currentSkill = skills[activeSkill];

  return (
    <section id="philosophy" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyber-cyan tracking-widest uppercase mb-2">
              <Compass className="h-3.5 w-3.5" />
              <KineticSubtitle text="// 05. CORE DISCIPLINES & EXPERTISE" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white">
              <KineticTitle text="THE COMPLETE" /> <br />
              <KineticTitle text="TECHNICAL & CREATIVE ARSENAL." delay={0.2} gradient={true} />
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs sm:text-sm text-slate-400 leading-relaxed">
            Bridging 3+ years of professional graphic design with deep full-stack programming to craft seamless real-world products.
          </p>
        </div>

        {/* Interactive Constellation / Disciplines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Skill Nodes List with Cascade Slide-In */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = activeSkill === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveSkill(index)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'glass-panel bg-void-card/90 border-cyber-cyan/50 shadow-[0_0_30px_rgba(0,245,212,0.15)] translate-x-2'
                      : 'border-white/5 bg-void-card/40 hover:bg-void-card/70 hover:border-white/15'
                  }`}
                  data-cursor="pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${skill.color} text-black font-bold shadow-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm sm:text-base text-white">
                          {skill.title}
                        </h4>
                        <span className="font-mono text-[11px] text-slate-400">{skill.milestone}</span>
                      </div>
                    </div>

                    <div className="font-mono text-xs font-bold text-cyber-cyan">
                      {skill.level}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Deep Dive Display Card with Slide-in from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl glass-panel p-8 sm:p-12 border border-white/15 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Background Accent Glow */}
            <div
              className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full blur-[100px] opacity-30 pointer-events-none transition-all duration-700"
              style={{ background: currentSkill.accent }}
            />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-white/10 pb-4 mb-6">
                <span className="text-cyber-cyan font-semibold">ENGINEERING & DESIGN SPEC</span>
                <span>DISCIPLINE_0{activeSkill + 1}</span>
              </div>

              {/* Title & Philosophy Quote */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkill.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white mb-4">
                    {currentSkill.title}
                  </h3>

                  <blockquote className="text-slate-300 text-base sm:text-lg font-light leading-relaxed italic border-l-2 border-cyber-cyan/50 pl-4 my-6">
                    "{currentSkill.philosophy}"
                  </blockquote>

                  {/* Toolkit Tags */}
                  <div className="mt-8">
                    <h5 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                      TOOLS & TECHNOLOGIES
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {currentSkill.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-200"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-cyber-cyan" />
                          <span>{tool}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Status Ticker */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
              <div>LOCATION: MAGURA, BANGLADESH (OPEN TO GLOBAL ROLES)</div>
              <div className="text-cyber-cyan font-bold">100% PRODUCTION READY</div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
