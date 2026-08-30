import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, RotateCcw, Video, Image as ImageIcon } from 'lucide-react';

export default function PortraitCard() {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mediaMode, setMediaMode] = useState('video'); // 'video' or 'image'
  const [isPlaying, setIsPlaying] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 200 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 200 });

  // 3D Tilt rotations
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseClientX = e.clientX - rect.left;
    const mouseClientY = e.clientY - rect.top;

    const xPct = mouseClientX / width - 0.5;
    const yPct = mouseClientY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleTouchMove = (e) => {
    if (!cardRef.current || !e.touches[0]) return;
    const rect = cardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const mouseClientX = touch.clientX - rect.left;
    const mouseClientY = touch.clientY - rect.top;

    const xPct = mouseClientX / rect.width - 0.5;
    const yPct = mouseClientY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleReplayVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMediaMode = (e) => {
    e.stopPropagation();
    setMediaMode((prev) => (prev === 'video' ? 'image' : 'video'));
  };

  return (
    <div
      className="relative flex items-center justify-center p-2 sm:p-4 w-full"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        data-cursor="view"
        data-cursor-text="ASHIK"
        className="relative h-[450px] w-full max-w-[310px] sm:max-w-[340px] sm:h-[500px] md:h-[530px] md:max-w-[370px] lg:h-[540px] lg:max-w-[390px] rounded-3xl p-2.5 glass-panel group transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(0,245,212,0.3)] border border-slate-700/60"
      >
        {/* Holographic Glowing Border Accent */}
        <div className="absolute -inset-[1.5px] rounded-3xl bg-gradient-to-tr from-cyber-cyan/50 via-electric-indigo/50 to-neon-purple/50 opacity-40 blur-sm group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

        {/* Inner Card Frame */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-void-card">
          
          {/* Main Visual: Walking Video or Still Portrait */}
          {mediaMode === 'video' ? (
            <video
              ref={videoRef}
              src="/assets/Man_walking_toward_camera_202608271701.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.08] brightness-95"
            />
          ) : (
            <img
              src="/assets/images/ashik-portrait.jpg"
              alt="Md. Ashik Siddike - Full-Stack Developer & UI/UX Graphic Designer"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.06] brightness-95"
            />
          )}

          {/* Futuristic Cyber Gradients & Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-indigo/20 via-transparent to-cyber-cyan/15 mix-blend-color-dodge pointer-events-none" />

          {/* Dynamic Laser Scanline on Hover */}
          <motion.div
            animate={
              isHovered
                ? { y: ['-100%', '300%'] }
                : { y: '-100%' }
            }
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-cyber-cyan/25 to-transparent pointer-events-none opacity-80"
          />

          {/* Top Bar HUD Tech Overlays */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20" style={{ transform: 'translateZ(25px)' }}>
            <div className="flex items-center gap-1.5 rounded-full bg-void/90 px-2.5 py-1 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyber-cyan">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
              </span>
              <span>{mediaMode === 'video' ? 'LIVE_ENTRANCE' : 'DEV_NODE::ACTIVE'}</span>
            </div>

            {/* Media Mode Switcher & Replay Button */}
            <div className="flex items-center gap-1.5">
              {mediaMode === 'video' && (
                <button
                  onClick={handleReplayVideo}
                  title="Replay Entrance Walk"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-void/90 text-cyber-cyan border border-white/10 hover:bg-cyber-cyan hover:text-black transition-colors"
                >
                  <RotateCcw className="h-3 w-3" />
                </button>
              )}

              <button
                onClick={toggleMediaMode}
                title={mediaMode === 'video' ? 'Switch to Portrait Photo' : 'Switch to Walking Video'}
                className="flex items-center gap-1 rounded-full bg-void/90 px-2.5 py-1 text-[10px] font-mono text-slate-300 border border-white/10 hover:border-cyber-cyan hover:text-white transition-colors"
              >
                {mediaMode === 'video' ? (
                  <>
                    <ImageIcon className="h-3 w-3 text-cyber-cyan" />
                    <span>STILL</span>
                  </>
                ) : (
                  <>
                    <Video className="h-3 w-3 text-cyber-cyan" />
                    <span>WALK</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* HUD Coordinate Grid Lines */}
          <div className="absolute top-[38%] left-3 flex flex-col gap-0.5 text-[8px] sm:text-[8.5px] font-mono text-slate-400/90 pointer-events-none" style={{ transform: 'translateZ(15px)' }}>
            <span>LOC: MAGURA, BD</span>
            <span>UNI: LONDON (REMOTE)</span>
            <span className="text-cyber-cyan">CST ENGINEER (7TH SEM)</span>
          </div>

          {/* Bottom Identity & Metrics Card Floating in 3D Space */}
          <div
            className="absolute bottom-2.5 left-2.5 right-2.5 rounded-xl p-3 glass-panel border border-white/15 bg-void-card/90"
            style={{ transform: 'translateZ(35px)' }}
          >
            <div className="flex items-center justify-between mb-1">
              <div>
                <h3 className="font-display text-sm sm:text-base font-bold tracking-tight text-white flex items-center gap-1">
                  MD. ASHIK SIDDIKE
                  <Sparkles className="h-3.5 w-3.5 text-cyber-cyan animate-pulse" />
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-300 font-mono">Full-Stack Dev & UI/UX Designer</p>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono font-bold text-cyber-cyan">3+ YRS</div>
                <div className="text-[9px] text-slate-400 font-mono">Hybrid Edge</div>
              </div>
            </div>

            {/* Micro skill tags */}
            <div className="mt-1.5 flex flex-wrap gap-1 pt-1.5 border-t border-white/10 text-[9px] font-mono text-slate-300">
              <span className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/5">React / Next.js</span>
              <span className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/5">Node / Firebase</span>
              <span className="px-1.5 py-0.5 rounded-md bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20">Figma UI/UX</span>
              <span className="px-1.5 py-0.5 rounded-md bg-electric-indigo/20 text-indigo-300 border border-electric-indigo/30">Gemini AI</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
