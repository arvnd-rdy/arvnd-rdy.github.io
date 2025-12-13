import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SkillNode {
  name: string;
  position: [number, number, number];
  color: string;
  size: number;
}

export const SkillsVisualization = () => {
  const groupRef = useRef<THREE.Group>(null);

  const skills: SkillNode[] = useMemo(() => [
    { name: "React", position: [2, 1, 0], color: "#61dafb", size: 0.8 },
    { name: "Python", position: [-2, 0.5, 1], color: "#3776ab", size: 0.7 },
    { name: "TypeScript", position: [0, -1, 0.5], color: "#3178c6", size: 0.6 },
    { name: "Node.js", position: [1.5, -0.5, -1], color: "#339933", size: 0.6 },
    { name: "AI/ML", position: [-1.5, 1.5, -0.5], color: "#ff6b6b", size: 0.9 },
    { name: "Three.js", position: [0, 2, 1], color: "#000000", size: 0.5 },
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <group key={skill.name} position={skill.position}>
          <mesh>
            <sphereGeometry args={[skill.size * 0.3, 16, 16]} />
            <meshStandardMaterial
              color={skill.color}
              transparent
              opacity={0.3}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
          {/* Connection lines */}
          {index > 0 && (
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([
                    0, 0, 0,
                    skills[0].position[0] - skill.position[0],
                    skills[0].position[1] - skill.position[1],
                    skills[0].position[2] - skill.position[2]
                  ])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#6366f1" transparent opacity={0.2} />
            </line>
          )}
        </group>
      ))}
    </group>
  );
};