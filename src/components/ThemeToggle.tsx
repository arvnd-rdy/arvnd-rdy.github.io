import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
                    <Moon className="w-5 h-5 text-yellow-400" />
                ) : (
                    <Sun className="w-5 h-5 text-orange-500" />
                )}
            </motion.div>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full"
                initial={false}
                animate={{
                    boxShadow: isDark
                        ? '0 0 15px 3px rgba(251, 191, 36, 0.3)'
                        : '0 0 15px 3px rgba(249, 115, 22, 0.3)',
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
};

export default ThemeToggle;
