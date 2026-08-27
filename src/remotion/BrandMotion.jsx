import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export default function BrandMotion() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const rotate = interpolate(frame, [0, 150], [0, 360]);

  const tags = [
    'Vector Logo Architecture',
    'Figma Enterprise Systems',
    'Visual Balance & Contrast',
    'Typography Mastery',
    'Adobe Photoshop & Illustrator',
    'Marketing Kits & Social Packs',
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#030305',
        backgroundImage: 'radial-gradient(circle at center, #451a03 0%, #030305 85%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 30 }}>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 16,
            color: '#f59e0b',
            letterSpacing: 4,
            marginBottom: 8,
          }}
        >
          // 3+ YEARS GRAPHIC DESIGN
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
          50+ BRAND IDENTITIES DELIVERED
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'center',
          maxWidth: 750,
        }}
      >
        {tags.map((tag, i) => {
          const itemSpring = spring({
            frame: frame - i * 6,
            fps,
            config: { damping: 12 },
          });

          return (
            <div
              key={i}
              style={{
                transform: `scale(${itemSpring})`,
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                borderRadius: 14,
                padding: '14px 24px',
                fontFamily: 'monospace',
                fontSize: 16,
                color: '#fef3c7',
                fontWeight: 600,
              }}
            >
              ✓ {tag}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}
