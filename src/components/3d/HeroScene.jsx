import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Text, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Star Particle Field
function ParticleField({ count = 1200 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color('#00f5d4'); // Cyan
    const colorB = new THREE.Color('#6366f1'); // Indigo
    const colorC = new THREE.Color('#ffffff'); // White

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 2;

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
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.07}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Floating Cyber Geometric Artifacts
function FloatingArtifacts() {
  const torusRef = useRef();
  const octaRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.4;
      torusRef.current.rotation.y = t * 0.6;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.5;
      octaRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <>
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5} position={[-3.8, 1.8, -1]}>
        <mesh ref={torusRef}>
          <torusGeometry args={[0.9, 0.22, 32, 64]} />
          <meshStandardMaterial
            color="#6366f1"
            roughness={0.1}
            metalness={0.9}
            emissive="#4338ca"
            emissiveIntensity={0.6}
            wireframe={true}
          />
        </mesh>
      </Float>

      <Float speed={3.2} rotationIntensity={1.8} floatIntensity={2} position={[3.6, -1.6, 0.5]}>
        <mesh ref={octaRef}>
          <octahedronGeometry args={[0.9, 0]} />
          <meshPhysicalMaterial
            color="#00f5d4"
            roughness={0.15}
            metalness={0.8}
            transmission={0.6}
            ior={1.5}
            reflectivity={0.9}
            clearcoat={1}
            emissive="#00f5d4"
            emissiveIntensity={0.3}
          />
        </mesh>
      </Float>
    </>
  );
}

// Core Hero 3D Scene Wrapper
export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-6, -4, 2]} intensity={2.5} color="#00f5d4" />
        <pointLight position={[6, 4, 3]} intensity={3} color="#6366f1" />

        <ParticleField count={900} />
        <FloatingArtifacts />
      </Canvas>
    </div>
  );
}
