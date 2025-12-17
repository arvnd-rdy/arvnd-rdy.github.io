import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Letter = ({ char }: { char: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.span
            className={`inline-block cursor-default relative glitch-hover ${char === ' ' ? 'mr-4' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title={char} // Accessibility
            data-text={char} // Required for CSS glitch effect
            initial={{
                color: "rgba(255, 255, 255, 0)",
                WebkitTextStroke: isDark ? "1.5px #FFFFFF" : "1.5px #6B7280", // White stroke in dark mode
            } as any}
            animate={isHovered ? {
                color: isDark ? "#FFFFFF" : "#1F2937", // White fill in dark mode, Dark Gray in light
                WebkitTextStroke: "0px transparent",
                scale: 1.1,
                y: -5,
                textShadow: isDark
                    ? "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)" // Brighter glow in dark mode
                    : "0 0 20px rgba(59, 130, 246, 0.5)"
            } as any : {
                color: "rgba(255, 255, 255, 0)",
                WebkitTextStroke: isDark ? "1.5px #E5E7EB" : "1.5px #6B7280",
                scale: 1,
                y: 0,
                textShadow: "none"
            } as any}
            transition={{
                duration: 0.2,
                ease: "circOut"
            }}
        >
            {char === ' ' ? '\u00A0' : char}
        </motion.span>
    );
};

export const InteractiveText = ({ text }: { text: string }) => {
    return (
        <span className="inline-flex whitespace-nowrap">
            {text.split('').map((char, index) => (
                <Letter key={`${char}-${index}`} char={char} />
            ))}
        </span>
    );
};
