import { useState, useEffect } from 'react';

interface DeviceCapabilities {
  isMobile: boolean;
  isLowEnd: boolean;
  supportsWebGL: boolean;
  devicePixelRatio: number;
  maxTextureSize: number;
}

export const useDeviceCapabilities = (): DeviceCapabilities => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isMobile: false,
    isLowEnd: false,
    supportsWebGL: true,
    devicePixelRatio: 1,
    maxTextureSize: 2048
  });

  useEffect(() => {
    const detectCapabilities = () => {
      // Check if mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      // Check WebGL support
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const supportsWebGL = !!gl;

      let maxTextureSize = 2048;
      if (gl && gl instanceof WebGLRenderingContext) {
        maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      }

      // Estimate if device is low-end
      const isLowEnd = 
        isMobile && 
        (navigator.hardwareConcurrency <= 4 || 
         window.devicePixelRatio <= 1.5 ||
         maxTextureSize < 4096);

      setCapabilities({
        isMobile,
        isLowEnd,
        supportsWebGL,
        devicePixelRatio: window.devicePixelRatio,
        maxTextureSize
      });
    };

    detectCapabilities();
  }, []);

  return capabilities;
};