import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TimelineNode {
  position: [number, number, number];
  color: string;
}

export const Timeline3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const timelineData: TimelineNode[] = useMemo(() => [
    {
      position: [0, 4, 0],
      color: "#3b82f6"
    },
    {
      position: [0, 0, 0],
      color: "#8b5cf6"
    },
    {
      position: [0, -4, 0],
      color: "#10b981"
    }
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Animate individual nodes
      groupRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Group && index > 0) {
          const offset = index * 0.5;
          child.position.x = Math.sin(state.clock.elapsedTime * 0.3 + offset) * 0.5;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Timeline line */}
      <mesh position={[0, 0, -1]}>
        <cylinderGeometry args={[0.05, 0.05, 10, 8]} />
        <meshStandardMaterial color="#6366f1" transparent opacity={0.3} />
      </mesh>
      
      {/* Timeline nodes */}
      {timelineData.map((node, index) => (
        <group key={index} position={node.position}>
          {/* Node sphere */}
          <mesh>
            <sphereGeometry args={[0.4, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              transparent
              opacity={0.6}
              emissive={node.color}
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};