import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CodeMatrix = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const count = 15;
    return Array.from({ length: count }, (_, index) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (index - count / 2) * 1.5,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      color: Math.random() > 0.5 ? "#6366f1" : "#8b5cf6",
      size: 0.1 + Math.random() * 0.2
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      
      // Animate individual particles
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          child.position.z = particles[index].position[2] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 2;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <boxGeometry args={[particle.size, particle.size, particle.size]} />
          <meshStandardMaterial
            color={particle.color}
            transparent
            opacity={0.3}
            emissive={particle.color}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};