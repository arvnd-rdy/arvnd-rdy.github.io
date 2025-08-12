import { useState } from "react";
import { motion } from "framer-motion";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
}

export const ImageWithSkeleton = ({ 
  src, 
  alt, 
  className = "", 
  skeletonClassName = "" 
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Skeleton Loader */}
      {!isLoaded && !hasError && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${skeletonClassName}`}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      )}

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Error State */}
      {hasError && (
        <div className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not available</div>
          </div>
        </div>
      )}
    </div>
  );
};