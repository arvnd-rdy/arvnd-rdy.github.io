import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { FloatingGeometry } from './FloatingGeometry';
import { PerformanceMonitor } from './PerformanceMonitor';

interface Scene3DProps {
  className?: string;
  children?: React.ReactNode;
  enableFloatingGeometry?: boolean;
  cameraPosition?: [number, number, number];
}

export const Scene3D = ({ 
  className = "", 
  children, 
  enableFloatingGeometry = false,
  cameraPosition = [0, 0, 100]
}: Scene3DProps) => {
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high');

  const handlePerformanceChange = (fps: number) => {
    if (fps < 30) {
      setQuality('low');
    } else if (fps < 45) {
      setQuality('medium');
    } else {
      setQuality('high');
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={quality === 'low' ? 1 : (typeof window !== 'undefined' ? window.devicePixelRatio : 1)}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.2} />
        <directionalLight position={[-10, -10, -5]} intensity={0.1} />
        
        <PerformanceMonitor onPerformanceChange={handlePerformanceChange} />
        
        <Suspense fallback={null}>
          {enableFloatingGeometry && (
            <FloatingGeometry 
              count={quality === 'low' ? 15 : quality === 'medium' ? 25 : 30} 
              speed={0.3} 
            />
          )}
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};