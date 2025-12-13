import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { InteractiveOrb } from './InteractiveOrb';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';
import * as THREE from 'three';

export const ShowcaseScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central geometry */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      {/* Orbiting elements */}
      <InteractiveOrb position={[8, 2, 0]} color="#3b82f6" size={1} />
      <InteractiveOrb position={[-8, -2, 0]} color="#8b5cf6" size={1.2} />
      <InteractiveOrb position={[0, 6, -5]} color="#06b6d4" size={0.8} />
      <InteractiveOrb position={[0, -6, -5]} color="#10b981" size={1.1} />

      {/* Background elements */}
      <FloatingGeometry count={20} speed={0.2} />
      <ParticleField count={200} radius={15} />
    </group>
  );
};