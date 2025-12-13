import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import * as THREE from 'three';

interface InteractiveOrbProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
}

export const InteractiveOrb = ({ 
  position = [0, 0, 0], 
  color = "#6366f1", 
  size = 1 
}: InteractiveOrbProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport, mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
      
      // Subtle mouse interaction
      const x = (mouse.x * viewport.width) / 20;
      const y = (mouse.y * viewport.height) / 20;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        y * 0.1,
        0.02
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        x * 0.1,
        0.02
      );

      // Scale on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
};