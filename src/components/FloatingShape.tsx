import { motion } from "framer-motion";

interface FloatingShapeProps {
    className?: string;
    delay?: number;
    duration?: number;
    type?: "cube" | "pyramid" | "sphere" | "donut";
    color?: string;
    wireframe?: boolean;
}

export const FloatingShape = ({
    className = "",
    delay = 0,
    duration = 10,
    type = "cube",
    color = "bg-blue-500/20",
    wireframe = false
}: FloatingShapeProps) => {
    const wireframeStyles = wireframe ? "bg-transparent border-2 border-current opacity-30" : `backdrop-blur-sm border border-white/20 shadow-lg ${color}`;
    const shapeClasses = `w-16 h-16 ${wireframeStyles} ${type === "sphere" ? "rounded-full" :
            type === "cube" ? "rounded-xl" :
                type === "donut" ? "rounded-full border-8" : "rounded-lg"
        }`;

    return (
        <motion.div
            className={`absolute pointer-events-none z-0 ${className} ${wireframe ? 'text-gray-400' : ''}`}
            animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            <div className={shapeClasses} />
            {/* Add inner wireframe details for more 3D look if wireframe is true */}
            {wireframe && type === "cube" && (
                <div className="absolute inset-2 border border-current rounded-lg opacity-50" />
            )}
            {wireframe && type === "sphere" && (
                <>
                    <div className="absolute inset-0 border border-current rounded-full opacity-30 rotate-45" />
                    <div className="absolute inset-0 border border-current rounded-full opacity-30 -rotate-45" />
                </>
            )}
        </motion.div>
    );
};
