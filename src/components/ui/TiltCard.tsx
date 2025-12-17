import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Helper for transform
function useMotionTransform(x: any, y: any, transformer: (x: any, y: any) => string) {
    return useTransform([x, y], ([latestX, latestY]) => transformer(latestX, latestY));
}

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    variants?: any;
    isFloating?: boolean;
}

export const TiltCard = ({ children, className, variants, isFloating = false }: TiltCardProps) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [4, -4]); // Reverse for natural tilt
    const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

    return (
        <motion.div
            className={className}
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            variants={variants}
            animate={isFloating ? {
                y: [0, -10, 0],
            } : undefined}
            transition={isFloating ? {
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            } : { type: "spring", stiffness: 400, damping: 30 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Layered Depth Effects (Shadows/Glows behind) */}
            <div
                className="absolute inset-0 bg-gray-900/5 dark:bg-white/5 rounded-xl blur-xl"
                style={{ transform: 'translateZ(-40px) translateY(20px) scale(0.9)' }}
            />
            <div
                className="absolute inset-0 bg-gray-900/5 dark:bg-white/5 rounded-xl blur-lg"
                style={{ transform: 'translateZ(-20px) translateY(10px) scale(0.95)' }}
            />

            {/* Main Glass Card */}
            <div
                style={{ transform: "translateZ(20px)" }}
                className="relative h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 p-6 overflow-hidden group"
            >
                {/* Shine/Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Dynamic Spotlight Glow */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: useMotionTransform(mouseX, mouseY, (x, y) => {
                            return `radial-gradient(600px circle at calc(50% + ${x}px) calc(50% + ${y}px), rgba(255,255,255,0.1), transparent 40%)`
                        }),
                    }}
                />
                <div className="relative z-10 font-sans h-full">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};
