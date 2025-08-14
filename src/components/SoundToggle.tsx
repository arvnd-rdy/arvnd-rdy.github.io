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
      className="fixed top-4 right-4 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-300 shadow-sm"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={soundEnabled ? "Mute sounds" : "Enable sounds"}
    >
      {soundEnabled ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
    </motion.button>
  );
};

export default SoundToggle;