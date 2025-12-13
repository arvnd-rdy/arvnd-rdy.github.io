import { useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

interface PerformanceMonitorProps {
  onPerformanceChange?: (fps: number) => void;
}

export const PerformanceMonitor = ({ onPerformanceChange }: PerformanceMonitorProps) => {
  const { gl } = useThree();
  const [fps, setFps] = useState(60);
  const [frameCount, setFrameCount] = useState(0);
  const [lastTime, setLastTime] = useState(performance.now());

  useFrame(() => {
    const currentTime = performance.now();
    const newFrameCount = frameCount + 1;
    
    if (currentTime - lastTime >= 1000) {
      const currentFps = Math.round((newFrameCount * 1000) / (currentTime - lastTime));
      setFps(currentFps);
      setFrameCount(0);
      setLastTime(currentTime);
      
      onPerformanceChange?.(currentFps);
      
      // Adjust quality based on performance
      if (typeof window !== 'undefined') {
        if (currentFps < 30) {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1));
        } else if (currentFps > 50) {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
      }
    } else {
      setFrameCount(newFrameCount);
    }
  });

  return null;
};