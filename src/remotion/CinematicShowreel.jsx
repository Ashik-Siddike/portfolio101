import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';

// Scene 1: The Intro & Persona (0s - 3s / frames 0 - 90)
function SceneIntro() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20, 75, 90], [0, 1, 1, 0]);
  const scale = interpolate(frame, [0, 90], [0.92, 1.08]);

  const titleSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, mass: 0.5 },
  });

  const subtitleSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14 },
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030305',
        backgroundImage: 'radial-gradient(circle at center, #1e1b4b 0%, #030305 70%)',
      }}
    >
      {/* Background Cyber Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, rgba(0, 245, 212, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 245, 212, 0.08) 1px, transparent 1px)',
          opacity: 0.8,
        }}
      />

      {/* Center Holographic Badge */}
      <div
        style={{
          transform: `scale(${titleSpring})`,
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 18,
            letterSpacing: 6,
            color: '#00f5d4',
            marginBottom: 16,
            textTransform: 'uppercase',
          }}
        >
          // 2026 CREATIVE PORTFOLIO REEL //
        </div>

        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 64,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: -1,
            lineHeight: 1.1,
            margin: 0,
            textShadow: '0 0 40px rgba(0, 245, 212, 0.5)',
          }}
        >
          MD. ASHIK SIDDIKE
        </h1>

        <div
          style={{
            transform: `scale(${subtitleSpring})`,
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 24,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #00f5d4, #6366f1, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginTop: 18,
            letterSpacing: 2,
          }}
        >
          FULL-STACK DEVELOPER & UI/UX GRAPHIC DESIGNER
        </div>
      </div>
    </AbsoluteFill>
  );
}

// Scene 2: Full-Stack Code & AI (3s - 6s / frames 90 - 180)
function SceneCodeAndAI() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0]);
  const rotate = interpolate(frame, [0, 90], [-2, 2]);

  const cards = [
    { title: 'React.js & Next.js', tag: 'TypeScript Architecture', color: '#00f5d4' },
    { title: 'Google Gemini API', tag: 'Autonomous AI SaaS', color: '#6366f1' },
    { title: 'Node.js & Firebase', tag: 'Realtime Backend Cloud', color: '#ec4899' },
    { title: 'Three.js & GSAP', tag: 'Cinematic 3D Shaders', color: '#f59e0b' },
  ];

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `rotate(${rotate}deg)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030305',
        backgroundImage: 'radial-gradient(circle at center, #0f172a 0%, #030305 75%)',
        padding: 40,
      }}
    >
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 20,
          color: '#00f5d4',
          letterSpacing: 4,
          marginBottom: 30,
        }}
      >
        PILLAR 01 // PRODUCTION-READY FULL-STACK STACK
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          maxWidth: 800,
          width: '100%',
        }}
      >
        {cards.map((c, idx) => {
          const cardSpring = spring({
            frame: frame - idx * 8,
            fps,
            config: { damping: 12 },
          });

          return (
            <div
              key={idx}
              style={{
                transform: `scale(${cardSpring})`,
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                border: `1px solid ${c.color}66`,
                borderRadius: 16,
                padding: 24,
                boxShadow: `0 10px 30px ${c.color}22`,
              }}
            >
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 26,
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: 6,
                }}
              >
                {c.title}
              </div>
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: 14,
                  color: c.color,
                }}
              >
                {c.tag}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

// Scene 3: IntervueAI Spotlight (6s - 9s / frames 180 - 270)
function SceneProjectSpotlight() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0]);

  const progress = interpolate(frame, [10, 60], [0, 99.4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030305',
        backgroundImage: 'radial-gradient(circle at center, #1e1b4b 0%, #030305 80%)',
      }}
    >
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 16,
          color: '#ec4899',
          letterSpacing: 4,
          marginBottom: 12,
        }}
      >
        FLAGSHIP SAAS // INTERVUEAI
      </div>

      <h2
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 54,
          fontWeight: 900,
          color: '#ffffff',
          margin: 0,
        }}
      >
        AI-POWERED MOCK INTERVIEWER
      </h2>

      <div
        style={{
          display: 'flex',
          gap: 30,
          marginTop: 40,
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(0, 245, 212, 0.4)',
            borderRadius: 20,
            padding: 30,
            textAlign: 'center',
            minWidth: 220,
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 48,
              fontWeight: 900,
              color: '#00f5d4',
            }}
          >
            {progress.toFixed(1)}%
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#94a3b8', marginTop: 6 }}>
            Resume Parser Accuracy
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            borderRadius: 20,
            padding: 30,
            textAlign: 'center',
            minWidth: 220,
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 48,
              fontWeight: 900,
              color: '#6366f1',
            }}
          >
            &lt; 2.4s
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#94a3b8', marginTop: 6 }}>
            Gemini AI Evaluation
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
}

// Scene 4: 3+ Years Graphic Artistry (9s - 12s / frames 270 - 360)
function SceneGraphicDesign() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0]);

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030305',
        backgroundImage: 'radial-gradient(circle at center, #2e1065 0%, #030305 80%)',
      }}
    >
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 16,
          color: '#f59e0b',
          letterSpacing: 4,
          marginBottom: 12,
        }}
      >
        PILLAR 02 // 3+ YEARS GRAPHIC ARTISTRY
      </div>

      <h2
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 56,
          fontWeight: 900,
          color: '#ffffff',
          margin: 0,
        }}
      >
        50+ DELIVERED BRAND IDENTITIES
      </h2>

      <div
        style={{
          display: 'flex',
          gap: 20,
          marginTop: 36,
        }}
      >
        {['Figma Design Systems', 'Vector Logos', 'Adobe Photoshop', 'Adobe Illustrator'].map(
          (tool, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                borderRadius: 12,
                padding: '12px 24px',
                fontFamily: 'monospace',
                fontSize: 16,
                color: '#fef08a',
                fontWeight: 600,
              }}
            >
              {tool}
            </div>
          )
        )}
      </div>
    </AbsoluteFill>
  );
}

// Scene 5: Outro / Call to Action (12s - 15s / frames 360 - 450)
function SceneOutro() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const scale = spring({
    frame,
    fps,
    config: { damping: 10 },
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030305',
        backgroundImage: 'radial-gradient(circle at center, #172554 0%, #030305 80%)',
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 18,
            color: '#00f5d4',
            letterSpacing: 4,
            marginBottom: 16,
          }}
        >
          AVAILABLE FOR ELITE CONTRACTS & FULL-STACK ROLES
        </div>

        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 60,
            fontWeight: 900,
            color: '#ffffff',
            margin: 0,
          }}
        >
          LET'S CREATE HISTORY.
        </h1>

        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 20,
            color: '#94a3b8',
            marginTop: 20,
          }}
        >
          ashiksiddike@gmail.com // +880 1918 766033
        </div>
      </div>
    </AbsoluteFill>
  );
}

// Full Cinematic Masterpiece Composition (450 frames @ 30fps = 15 seconds)
export default function CinematicShowreel() {
  return (
    <AbsoluteFill style={{ backgroundColor: '#030305' }}>
      <Sequence from={0} durationInFrames={90}>
        <SceneIntro />
      </Sequence>

      <Sequence from={90} durationInFrames={90}>
        <SceneCodeAndAI />
      </Sequence>

      <Sequence from={180} durationInFrames={90}>
        <SceneProjectSpotlight />
      </Sequence>

      <Sequence from={270} durationInFrames={90}>
        <SceneGraphicDesign />
      </Sequence>

      <Sequence from={360} durationInFrames={90}>
        <SceneOutro />
      </Sequence>
    </AbsoluteFill>
  );
}
