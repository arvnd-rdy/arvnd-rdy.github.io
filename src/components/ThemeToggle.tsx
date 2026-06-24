import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2.5 rounded-full bg-white hover:bg-gray-100 dark:bg-neutral-950 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-950"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 180 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {isDark ? (
                    <Moon className="w-5 h-5 text-orange-400" />
                ) : (
                    <Sun className="w-5 h-5 text-orange-500" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
