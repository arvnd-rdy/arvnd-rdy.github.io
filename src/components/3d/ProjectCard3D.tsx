import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ProjectCard3DProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  index?: number;
}

export const ProjectCard3D = ({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  color = "#f8fafc",
  index = 0
}: ProjectCard3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation with offset based on index
      const offset = index * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + offset) * 0.1;
      
      // Subtle rotation
      meshRef.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.02;
      
      // Scale on hover
      const targetScale = hovered ? 1.05 : 1;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale), 
        0.1
      );
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 2.5, 0.1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.1}
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
};