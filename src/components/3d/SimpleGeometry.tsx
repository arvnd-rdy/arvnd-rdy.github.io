import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SimpleGeometryProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
  type?: 'sphere' | 'box' | 'octahedron';
}

export const SimpleGeometry = ({ 
  position = [0, 0, 0], 
  color = "#6366f1", 
  size = 1,
  type = 'sphere'
}: SimpleGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'box':
        return <boxGeometry args={[size, size, size]} />;
      case 'octahedron':
        return <octahedronGeometry args={[size]} />;
      default:
        return <sphereGeometry args={[size, 16, 16]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.2}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};