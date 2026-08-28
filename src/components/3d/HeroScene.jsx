import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Optimized 3D Star Particle Field
function ParticleField({ count = 600 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color('#00f5d4'); // Cyan
    const colorB = new THREE.Color('#6366f1'); // Indigo
    const colorC = new THREE.Color('#ffffff'); // White

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2;

      const mixed = Math.random();
      const c = mixed < 0.4 ? colorA : mixed < 0.8 ? colorB : colorC;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.04;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Lightweight Floating Cyber Geometric Artifacts
function FloatingArtifacts() {
  const torusRef = useRef();
  const octaRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.35;
      torusRef.current.rotation.y = t * 0.5;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.4;
      octaRef.current.rotation.z = t * 0.25;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.2} position={[-3.8, 1.8, -1]}>
        <mesh ref={torusRef}>
          <torusGeometry args={[0.85, 0.2, 24, 48]} />
          <meshStandardMaterial
            color="#6366f1"
            roughness={0.2}
            metalness={0.8}
            emissive="#4338ca"
            emissiveIntensity={0.5}
            wireframe={true}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.4} position={[3.6, -1.6, 0.5]}>
        <mesh ref={octaRef}>
          <octahedronGeometry args={[0.85, 0]} />
          <meshStandardMaterial
            color="#00f5d4"
            roughness={0.2}
            metalness={0.85}
            emissive="#00f5d4"
            emissiveIntensity={0.4}
            wireframe={true}
          />
        </mesh>
      </Float>
    </>
  );
}

// Core Hero 3D Scene Wrapper (Optimized DPR & Materials)
export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, 2]} intensity={2} color="#00f5d4" />
        <pointLight position={[5, 3, 2]} intensity={2} color="#6366f1" />

        <ParticleField count={600} />
        <FloatingArtifacts />
      </Canvas>
    </div>
  );
}
