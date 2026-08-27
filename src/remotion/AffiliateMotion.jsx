import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export default function AffiliateMotion() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const count = interpolate(frame, [10, 80], [120, 10450], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const floatY = Math.sin(frame * 0.08) * 8;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#030305',
        backgroundImage: 'radial-gradient(circle at center, #064e3b 0%, #030305 85%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}
    >
      <div
        style={{
          transform: `translateY(${floatY}px)`,
          textAlign: 'center',
          marginBottom: 30,
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 16,
            color: '#10b981',
            letterSpacing: 4,
            marginBottom: 8,
          }}
        >
          // AUTONOMOUS CAMPAIGN ENGINE
        </div>

        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 50,
            fontWeight: 900,
            color: '#ffffff',
            margin: 0,
          }}
        >
          AFFILIATE AUTOMATION ECOSYSTEM
        </h1>
        <p
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 18,
            color: '#94a3b8',
            marginTop: 8,
          }}
        >
          Python Auto-Blogging • Gemini AI SEO Reviews • Link Cloaking
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 24,
          maxWidth: 800,
          width: '100%',
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(6, 78, 59, 0.3)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: 20,
            padding: 30,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 50,
              fontWeight: 900,
              color: '#34d399',
            }}
          >
            {Math.floor(count).toLocaleString()}+
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#a7f3d0', marginTop: 8 }}>
            Articles Auto-Generated & Ranked
          </div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(6, 78, 59, 0.3)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: 20,
            padding: 30,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 50,
              fontWeight: 900,
              color: '#34d399',
            }}
          >
            100%
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#a7f3d0', marginTop: 8 }}>
            Autonomous Python Workflow
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
