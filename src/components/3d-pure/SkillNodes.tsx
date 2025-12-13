import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThreeScene } from './ThreeScene';

interface SkillNode {
  name: string;
  position: [number, number, number];
  color: string;
  size: number;
}

interface SkillNodesProps {
  className?: string;
  skills?: SkillNode[];
}

export const SkillNodes = ({ 
  className = "",
  skills = [
    { name: "React", position: [2, 1, 0], color: "#61dafb", size: 0.8 },
    { name: "Python", position: [-2, 0.5, 1], color: "#3776ab", size: 0.7 },
    { name: "TypeScript", position: [0, -1, 0.5], color: "#3178c6", size: 0.6 },
    { name: "Node.js", position: [1.5, -0.5, -1], color: "#339933", size: 0.6 },
    { name: "AI/ML", position: [-1.5, 1.5, -0.5], color: "#ff6b6b", size: 0.9 },
    { name: "Three.js", position: [0, 2, 1], color: "#000000", size: 0.5 },
  ]
}: SkillNodesProps) => {
  const groupRef = useRef<THREE.Group>();
  const clockRef = useRef(new THREE.Clock());

  const setupScene = (scene: THREE.Scene) => {
    const group = new THREE.Group();
    groupRef.current = group;
    scene.add(group);

    // Create skill nodes
    skills.forEach((skill, index) => {
      const geometry = new THREE.SphereGeometry(skill.size * 0.3, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: skill.color,
        transparent: true,
        opacity: 0.3,
        roughness: 0.1,
        metalness: 0.8
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...skill.position);
      group.add(mesh);

      // Connection lines to first node
      if (index > 0) {
        const points = [
          new THREE.Vector3(...skill.position),
          new THREE.Vector3(...skills[0].position)
        ];
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: "#6366f1",
          transparent: true,
          opacity: 0.2
        });
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        group.add(line);
      }
    });

    // Animation
    const animate = () => {
      if (groupRef.current) {
        const elapsedTime = clockRef.current.getElapsedTime();
        
        groupRef.current.rotation.y = Math.sin(elapsedTime * 0.2) * 0.1;
        groupRef.current.rotation.x = Math.cos(elapsedTime * 0.15) * 0.05;
      }
      
      requestAnimationFrame(animate);
    };
    animate();
  };

  return (
    <ThreeScene className={className}>
      {setupScene}
    </ThreeScene>
  );
};