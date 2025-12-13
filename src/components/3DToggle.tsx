import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Box, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThreeDToggle = () => {
  const [is3DEnabled, setIs3DEnabled] = useState(true);

  useEffect(() => {
    // Check localStorage for user preference
    const saved3DPreference = localStorage.getItem('portfolio-3d-enabled');
    if (saved3DPreference !== null) {
      setIs3DEnabled(JSON.parse(saved3DPreference));
    }
  }, []);

  const toggle3D = () => {
    const newState = !is3DEnabled;
    setIs3DEnabled(newState);
    localStorage.setItem('portfolio-3d-enabled', JSON.stringify(newState));
    
    // Add/remove class to body to control 3D rendering
    if (newState) {
      document.body.classList.remove('disable-3d');
    } else {
      document.body.classList.add('disable-3d');
    }
  };

  return (
    <motion.div
      className="fixed top-20 right-4 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggle3D}
        className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
        title={is3DEnabled ? "Disable 3D Effects" : "Enable 3D Effects"}
      >
        <AnimatePresence mode="wait">
          {is3DEnabled ? (
            <motion.div
              key="enabled"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Box className="w-4 h-4 text-blue-600" />
            </motion.div>
          ) : (
            <motion.div
              key="disabled"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Package className="w-4 h-4 text-gray-400" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="ml-2 text-xs font-medium">
          3D {is3DEnabled ? 'ON' : 'OFF'}
        </span>
      </Button>
    </motion.div>
  );
};