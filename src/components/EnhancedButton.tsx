import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface EnhancedButtonProps {
  children: ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const EnhancedButton = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  disabled = false,
  loading = false,
  href,
  target,
  rel,
}: EnhancedButtonProps) => {
  const buttonContent = (
    <Button
      variant={variant}
      size={size}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Loading Spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      
      {/* Button Content */}
      <motion.span
        className={`relative z-10 flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </Button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {buttonContent}
    </motion.div>
  );
};