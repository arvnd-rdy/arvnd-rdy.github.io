import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  radius?: number;
}

export const ParticleField = ({ count = 1000, radius = 50 }: ParticleFieldProps) => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random sphere distribution
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      // Gradient colors from blue to purple
      const colorIntensity = Math.random();
      colors[i * 3] = 0.3 + colorIntensity * 0.4; // R
      colors[i * 3 + 1] = 0.2 + colorIntensity * 0.3; // G
      colors[i * 3 + 2] = 0.8 + colorIntensity * 0.2; // B
    }
    
    return [positions, colors];
  }, [count, radius]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        transparent
        opacity={0.6}
        size={0.5}
        sizeAttenuation={true}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};