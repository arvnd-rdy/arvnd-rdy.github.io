import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { toggleSounds, isSoundEnabled } from "@/utils/soundEffects";

const SoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    setSoundEnabled(isSoundEnabled());
  }, []);

  const handleToggle = () => {
    const newState = toggleSounds();
    setSoundEnabled(newState);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-sm"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={soundEnabled ? "Mute sounds" : "Enable sounds"}
    >
      {soundEnabled ? (
        <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
      ) : (
        <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />
      )}
    </motion.button>
  );
};

export default SoundToggle;