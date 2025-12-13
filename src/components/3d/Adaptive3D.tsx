import { useDeviceCapabilities } from '@/hooks/useDeviceCapabilities';
import { Scene3D } from './Scene3D';

interface Adaptive3DProps {
  className?: string;
  children?: React.ReactNode;
  enableFloatingGeometry?: boolean;
  cameraPosition?: [number, number, number];
  fallback?: React.ReactNode;
}

export const Adaptive3D = ({ 
  className = "", 
  children, 
  enableFloatingGeometry = false,
  cameraPosition = [0, 0, 100],
  fallback = null
}: Adaptive3DProps) => {
  const { supportsWebGL, isLowEnd } = useDeviceCapabilities();

  // Don't render 3D on very low-end devices or without WebGL
  if (!supportsWebGL || isLowEnd) {
    return <>{fallback}</>;
  }

  return (
    <Scene3D 
      className={className}
      enableFloatingGeometry={enableFloatingGeometry}
      cameraPosition={cameraPosition}
    >
      {children}
    </Scene3D>
  );
};