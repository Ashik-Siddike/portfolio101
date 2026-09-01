import React from "react";

export interface DotBorderButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: "cyan" | "indigo" | "gold" | "white";
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export function DotBorderButton({
  label = "Start Creating",
  onClick,
  href,
  className = "",
  icon,
  children,
  variant = "cyan",
  target,
  rel,
  type = "button",
}: DotBorderButtonProps) {
  const variantStyles = {
    cyan: {
      dotColor: "#00f5d4",
      lineColor: "rgba(0, 245, 212, 0.7)",
      gridColor: "rgba(0, 245, 212, 0.25)",
      hoverBg: "rgba(0, 245, 212, 0.15)",
      hoverBorder: "#00f5d4",
      textColor: "#ffffff",
      hoverShadow: "0 0 25px rgba(0, 245, 212, 0.4)",
    },
    indigo: {
      dotColor: "#6366f1",
      lineColor: "rgba(99, 102, 241, 0.7)",
      gridColor: "rgba(99, 102, 241, 0.25)",
      hoverBg: "rgba(99, 102, 241, 0.15)",
      hoverBorder: "#6366f1",
      textColor: "#ffffff",
      hoverShadow: "0 0 25px rgba(99, 102, 241, 0.4)",
    },
    gold: {
      dotColor: "#f59e0b",
      lineColor: "rgba(245, 158, 11, 0.7)",
      gridColor: "rgba(245, 158, 11, 0.25)",
      hoverBg: "rgba(245, 158, 11, 0.15)",
      hoverBorder: "#f59e0b",
      textColor: "#ffffff",
      hoverShadow: "0 0 25px rgba(245, 158, 11, 0.4)",
    },
    white: {
      dotColor: "#ffffff",
      lineColor: "rgba(255, 255, 255, 0.7)",
      gridColor: "rgba(255, 255, 255, 0.2)",
      hoverBg: "rgba(255, 255, 255, 0.15)",
      hoverBorder: "#ffffff",
      textColor: "#ffffff",
      hoverShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
    },
  }[variant];

  const content = (
    <div
      className={`dot-btn-wrapper relative inline-flex items-center justify-center p-2.5 sm:p-3 select-none ${className}`}
      style={{
        // @ts-ignore
        "--dot-size": "6px",
        "--line-weight": "1px",
        "--animation-speed": "0.35s",
        "--dot-color": variantStyles.dotColor,
        "--line-color": variantStyles.lineColor,
        "--grid-color": variantStyles.gridColor,
      }}
    >
      {/* Animated Perimeter Lines */}
      <div className="line horizontal top" />
      <div className="line vertical right" />
      <div className="line horizontal bottom" />
      <div className="line vertical left" />

      {/* Animated Corner Dots */}
      <div className="dot top left" />
      <div className="dot top right" />
      <div className="dot bottom right" />
      <div className="dot bottom left" />

      {/* Button Body */}
      <div
        className="btn-inner relative flex items-center justify-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md"
        style={{
          borderColor: variantStyles.gridColor,
          color: variantStyles.textColor,
          backgroundColor: "rgba(13, 14, 23, 0.7)",
        }}
      >
        <span>{children || label}</span>
        {icon || (
          <svg
            className="btn-svg h-4 w-4 transition-all duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.2959 20.6016L9.65986 14.2376"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49645 16.4515 2.49645 15.6704 3.27749L12.842 6.10592"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className="inline-block cursor-pointer"
        data-cursor="pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-block cursor-pointer border-0 bg-transparent p-0 outline-none"
      data-cursor="pointer"
    >
      {content}
    </button>
  );
}

export default DotBorderButton;
