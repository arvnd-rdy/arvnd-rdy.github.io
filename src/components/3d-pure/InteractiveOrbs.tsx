import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThreeScene } from './ThreeScene';

interface OrbConfig {
  position: [number, number, number];
  color: string;
  size: number;
}

interface InteractiveOrbsProps {
  className?: string;
  orbs?: OrbConfig[];
}

export const InteractiveOrbs = ({ 
  className = "",
  orbs = [
    { position: [15, 5, -10], color: "#6366f1", size: 2 },
    { position: [-20, -8, -15], color: "#8b5cf6", size: 1.5 },
    { position: [25, -5, -20], color: "#06b6d4", size: 1.8 }
  ]
}: InteractiveOrbsProps) => {
  const orbMeshes = useRef<THREE.Mesh[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setupScene = (scene: THREE.Scene) => {
    orbMeshes.current = [];

    orbs.forEach((orbConfig, index) => {
      const geometry = new THREE.IcosahedronGeometry(orbConfig.size, 1);
      const material = new THREE.MeshStandardMaterial({
        color: orbConfig.color,
        transparent: true,
        opacity: 0.15,
        roughness: 0.1,
        metalness: 0.8
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...orbConfig.position);
      
      orbMeshes.current.push(mesh);
      scene.add(mesh);
    });

    // Animation
    const animate = () => {
      const elapsedTime = clockRef.current.getElapsedTime();
      
      orbMeshes.current.forEach((mesh, index) => {
        // Floating animation
        const originalY = orbs[index].position[1];
        mesh.position.y = originalY + Math.sin(elapsedTime + index) * 0.2;
        
        // Mouse interaction
        const mouseInfluence = 0.1;
        mesh.rotation.x += (mouseRef.current.y * mouseInfluence - mesh.rotation.x) * 0.02;
        mesh.rotation.y += (mouseRef.current.x * mouseInfluence - mesh.rotation.y) * 0.02;
        
        // Gentle rotation
        mesh.rotation.z += 0.005;
      });
      
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