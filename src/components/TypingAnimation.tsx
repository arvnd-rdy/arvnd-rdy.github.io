import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypingAnimation = ({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 50 
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-6 bg-gray-900 ml-1"
        />
      )}
    </span>
  );
};