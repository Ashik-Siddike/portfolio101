import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, Sparkles, Mail, Clock, MapPin, ArrowUpRight, MessageSquare, Zap, Terminal, Phone, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import MagneticButton from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '../ui/Icons';
import { KineticTitle, KineticSubtitle } from '../ui/KineticText';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('Full-Stack Web App');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = "ashiksiddike@gmail.com";
  const phone = "+880 1918 766033";
  const whatsappUrl = "https://wa.me/8801918766033";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dhaka',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.85 },
      colors: ['#00f5d4', '#6366f1', '#a855f7', '#f59e0b'],
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#00f5d4', '#6366f1', '#ffffff'],
    });
  };

  const services = ['Full-Stack Web App', 'UI/UX & Branding', 'AI SaaS Integration', 'Frontend / Next.js'];

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-void overflow-hidden border-t border-white/5">
      
      {/* Lightweight GPU-Accelerated Cyber Vortex Background (Zero WebGL overhead) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center overflow-hidden">
        <div className="absolute h-[600px] w-[600px] rounded-full border border-cyber-cyan/20 animate-[spin_60s_linear_infinite]" />
        <div className="absolute h-[450px] w-[450px] rounded-full border border-electric-indigo/20 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute h-[300px] w-[300px] rounded-full border border-neon-purple/20 animate-[spin_25s_linear_infinite]" />
        <div className="h-96 w-96 rounded-full bg-gradient-to-tr from-cyber-cyan/15 via-electric-indigo/15 to-transparent blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyber-cyan tracking-widest uppercase mb-4 px-4 py-1 rounded-full glass-panel border border-white/10">
            <Sparkles className="h-3.5 w-3.5" />
            <KineticSubtitle text="// 07. CONNECT & COLLABORATE" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-tight">
            <KineticTitle text="LET'S BUILD SOMETHING" /> <br />
            <KineticTitle text="EXTRAORDINARY TOGETHER." delay={0.2} gradient={true} />
          </h2>
          <p className="mt-6 text-slate-300 font-light text-lg sm:text-xl max-w-2xl mx-auto">
            Available for high-impact full-stack web development, AI SaaS architecture, and bespoke UI/UX & graphic design projects.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Direct Channels & Verified Info */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl glass-panel border border-white/15 space-y-8 bg-void-card/80 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                DIRECT CONTACT
              </h3>
              <p className="font-mono text-xs text-slate-400">
                Fast response within 6 hours.
              </p>

              {/* Copy Email Box */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="overflow-hidden mr-2">
                  <div className="font-mono text-[10px] text-slate-400">EMAIL INBOX</div>
                  <div className="font-mono text-xs sm:text-sm text-white font-semibold truncate">
                    {email}
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                    copied
                      ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                      : 'bg-cyber-cyan text-black hover:scale-105'
                  }`}
                  data-cursor="pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Direct */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-emerald-400/40 transition-colors group"
                data-cursor="pointer"
              >
                <div>
                  <div className="font-mono text-[10px] text-slate-400">WHATSAPP / PHONE</div>
                  <div className="font-mono text-xs sm:text-sm text-white font-semibold group-hover:text-emerald-400 transition-colors">
                    {phone}
                  </div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <WhatsAppIcon className="h-4 w-4" />
                </div>
              </a>

              {/* Location & Real-time Clock */}
              <div className="mt-6 space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <MapPin className="h-4 w-4 text-cyber-cyan" />
                  <span>LOCATION: MAGURA, BANGLADESH</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                  <Clock className="h-4 w-4 text-electric-indigo" />
                  <span>LOCAL TIME: <span className="text-white font-bold">{currentTime || '16:25:00 GMT+6'}</span></span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <div className="font-mono text-[11px] text-slate-400 uppercase tracking-widest mb-3">
                PROFILES & REPOSITORIES
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'GITHUB', url: 'https://github.com/Ashik-Siddike', icon: GithubIcon },
                  { name: 'LINKEDIN', url: 'https://linkedin.com/in/ashik-siddike', icon: LinkedinIcon },
                  { name: 'WEBSITE', url: 'https://ashiksiddike.com', icon: Globe },
                  { name: 'WHATSAPP', url: whatsappUrl, icon: WhatsAppIcon },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300 hover:text-white hover:border-cyber-cyan/40 transition-colors group"
                    data-cursor="view"
                  >
                    <div className="flex items-center gap-2">
                      <s.icon className="h-3.5 w-3.5 text-cyber-cyan" />
                      <span>{s.name}</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-white/15 bg-void-card/80 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-1">
                      START A CONVERSATION
                    </h3>
                    <p className="font-mono text-xs text-slate-400">
                      Looking for full-stack development, AI integration, or UI/UX design?
                    </p>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label className="block font-mono text-xs text-slate-300 mb-2">
                      WHAT DO YOU NEED HELP WITH?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedService(s)}
                          className={`p-2.5 rounded-xl border font-mono text-xs transition-all ${
                            selectedService === s
                              ? 'border-cyber-cyan bg-cyber-cyan/20 text-white font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)]'
                              : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-slate-300 mb-2">YOUR NAME</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyber-cyan focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-slate-300 mb-2">YOUR EMAIL</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyber-cyan focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block font-mono text-xs text-slate-300 mb-2">PROJECT DETAILS</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your product requirements, tech stack preferences, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyber-cyan focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <MagneticButton
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-cyan via-electric-indigo to-neon-purple text-black font-display font-black text-sm tracking-wider shadow-[0_0_30px_rgba(0,245,212,0.4)] hover:scale-[1.02]"
                    cursorText="SEND"
                  >
                    <span>SEND MESSAGE TO ASHIK</span>
                    <Send className="h-4 w-4 ml-2" />
                  </MagneticButton>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-[0_0_30px_rgba(0,245,212,0.4)]">
                    <Check className="h-10 w-10" />
                  </div>
                  <h3 className="font-display font-black text-3xl text-white">
                    MESSAGE TRANSMITTED!
                  </h3>
                  <p className="font-mono text-sm text-slate-300 max-w-md">
                    Thank you, <span className="text-cyber-cyan font-bold">{formData.name}</span>. Md. Ashik Siddike has received your request and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 font-mono text-xs text-cyber-cyan underline hover:text-white"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} MD. ASHIK SIDDIKE. BUILT WITH REACT, THREE.JS, TAILWIND & PASSION.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-cyber-cyan">FULL-STACK DEVELOPER & GRAPHIC DESIGNER</span>
            <span>MAGURA, BANGLADESH</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
