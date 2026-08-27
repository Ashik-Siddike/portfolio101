import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';

export default function IntervueAIMotion() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = Math.sin(frame * 0.1) * 0.05 + 1;
  const scoreCounter = interpolate(frame, [20, 80], [0, 98.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#030305',
        backgroundImage: 'radial-gradient(circle at center, #1e1b4b 0%, #030305 85%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}
    >
      <div
        style={{
          transform: `scale(${titleSpring})`,
          textAlign: 'center',
          marginBottom: 30,
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 16,
            color: '#00f5d4',
            letterSpacing: 4,
            marginBottom: 8,
          }}
        >
          // SAAS PRODUCT MOTION SPEC
        </div>

        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 52,
            fontWeight: 900,
            color: '#ffffff',
            margin: 0,
          }}
        >
          INTERVUE<span style={{ color: '#00f5d4' }}>AI</span> ENGINE
        </h1>
        <p
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 18,
            color: '#94a3b8',
            marginTop: 8,
          }}
        >
          Resume PDF Analysis • Google Gemini API • Real-Time Voice Mock Interview
        </p>
      </div>

      {/* Interactive Mock HUD */}
      <div
        style={{
          display: 'flex',
          gap: 24,
          maxWidth: 900,
          width: '100%',
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(0, 245, 212, 0.3)',
            borderRadius: 20,
            padding: 24,
          }}
        >
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#00f5d4', marginBottom: 12 }}>
            INPUT: PDF_RESUME_PARSER.TS
          </div>
          <div style={{ color: '#e2e8f0', fontFamily: 'monospace', fontSize: 14, lineHeight: 1.6 }}>
            &gt; Extracting experience tokens... <br />
            &gt; Generating 5 custom technical challenges... <br />
            &gt; Streaming real-time AI audio prompt...
          </div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            borderRadius: 20,
            padding: 24,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 56,
              fontWeight: 900,
              color: '#6366f1',
              transform: `scale(${pulse})`,
            }}
          >
            {scoreCounter.toFixed(1)} / 100
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#94a3b8', marginTop: 8 }}>
            AI EVALUATION SCORE & BENCHMARK
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}
