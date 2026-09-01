import React, { useState, useRef, useMemo } from 'react';
import { Sparkles } from 'lucide-react';

export interface LiquidMetalButtonProps {
  label?: string;
  onClick?: () => void;
  viewMode?: 'text' | 'icon';
  className?: string;
  icon?: React.ReactNode;
}

export function LiquidMetalButton({
  label = 'Get Started',
  onClick,
  viewMode = 'text',
  className = '',
  icon,
}: LiquidMetalButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleId = useRef(0);

  const isIconOnly = viewMode === 'icon' && !label;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = { x, y, id: rippleId.current++ };

      setRipples((prev) => [...prev, ripple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 600);
    }

    onClick?.();
  };

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Outer Metallic Glow & Border */}
      <div
        className="group relative rounded-full p-[1.5px] transition-all duration-500"
        style={{
          background: isHovered
            ? 'linear-gradient(135deg, #00f5d4 0%, #6366f1 50%, #d946ef 100%)'
            : 'linear-gradient(135deg, rgba(0, 245, 212, 0.6) 0%, rgba(99, 102, 241, 0.4) 50%, rgba(255, 255, 255, 0.2) 100%)',
          boxShadow: isHovered
            ? '0 0 30px rgba(0, 245, 212, 0.4), 0 0 15px rgba(99, 102, 241, 0.3)'
            : '0 0 15px rgba(0, 0, 0, 0.5)',
          transform: isPressed ? 'scale(0.97)' : isHovered ? 'scale(1.03)' : 'scale(1)',
        }}
      >
        {/* Animated Liquid Chrome Shimmer Layer */}
        <div
          className="absolute inset-0 rounded-full opacity-75 blur-[2px] transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 245, 212, 0.3) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'liquidShimmer 3s linear infinite',
          }}
        />

        {/* Inner Button Body with Fluid Chrome Gradient */}
        <button
          ref={buttonRef}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsPressed(false);
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          className={`relative flex items-center justify-center gap-2 rounded-full font-mono text-xs font-bold tracking-wider transition-all duration-300 overflow-hidden ${
            isIconOnly ? 'h-10 w-10 p-0' : 'px-5 py-2.5 sm:px-6 sm:py-3'
          }`}
          style={{
            background: isHovered
              ? 'linear-gradient(180deg, #181b2a 0%, #0a0b14 100%)'
              : 'linear-gradient(180deg, #121422 0%, #06070d 100%)',
            color: '#ffffff',
          }}
          data-cursor="pointer"
          aria-label={label}
        >
          {/* Subtle Top Metallic Highlight */}
          <div className="absolute top-0 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

          {/* Icon */}
          {icon || (isIconOnly && (
            <Sparkles className="h-4 w-4 text-cyber-cyan transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          ))}

          {/* Label */}
          {!isIconOnly && (
            <span className="relative z-10 text-white font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 group-hover:text-cyber-cyan">
              {label}
            </span>
          )}

          {/* Interactive Click Ripples */}
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              style={{
                position: 'absolute',
                left: `${ripple.x}px`,
                top: `${ripple.y}px`,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 245, 212, 0.6) 0%, rgba(99, 102, 241, 0) 70%)',
                pointerEvents: 'none',
                animation: 'ripple-animation 0.6s ease-out',
              }}
            />
          ))}
        </button>
      </div>
    </div>
  );
}

export default LiquidMetalButton;
