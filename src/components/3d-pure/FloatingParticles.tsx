import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ThreeScene } from './ThreeScene';

interface FloatingParticlesProps {
  className?: string;
  count?: number;
  colors?: string[];
}

export const FloatingParticles = ({ 
  className = "", 
  count = 50,
  colors = ["#6366f1", "#8b5cf6", "#06b6d4"]
}: FloatingParticlesProps) => {
  const particlesRef = useRef<THREE.Points>();
  const clockRef = useRef(new THREE.Clock());

  const setupScene = (scene: THREE.Scene) => {
    // Create particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const particleColors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Random positions in a sphere
      const radius = 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Random colors
      const color = new THREE.Color(colors[Math.floor(Math.random() * colors.length)]);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;

      // Random sizes
      sizes[i] = Math.random() * 2 + 1;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 2,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    particlesRef.current = particles;
    scene.add(particles);

    // Animation
    const animate = () => {
      if (particlesRef.current) {
        const elapsedTime = clockRef.current.getElapsedTime();
        
        particlesRef.current.rotation.y = elapsedTime * 0.05;
        particlesRef.current.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1;
        
        // Animate individual particles
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          positions[i3 + 1] += Math.sin(elapsedTime + i) * 0.01;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
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