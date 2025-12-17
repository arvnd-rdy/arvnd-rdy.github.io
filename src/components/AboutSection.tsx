import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { downloadResume } from "@/utils/downloadResume";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { throttle } from "@/utils/throttle";

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  // Mouse tracking for 3D tilt effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback(
    throttle((e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }, 16), // ~60fps throttling
    []
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-[#F8F8F8] dark:bg-gray-800 relative z-10 scroll-mt-20 sm:scroll-mt-28 flex items-center py-8 sm:py-12 md:py-16 lg:py-20 transition-colors duration-300"
    >
      <motion.div
        className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - 3D Floating Card Image */}
          <motion.div
            variants={fadeInLeft}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              ref={cardRef}
              className="relative group cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                y: [0, -8, 0],
                rotateY: isHovering ? mousePosition.x * 10 : 0,
                rotateX: isHovering ? -mousePosition.y * 10 : 0,
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotateX: { duration: 0.1, ease: "linear" },
                rotateY: { duration: 0.1, ease: "linear" },
              }}
              whileHover={{
                scale: 1.02,
                z: 50,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow effect behind the card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(-50px)' }} />

              {/* Multiple layered shadows for depth */}
              <div className="absolute inset-0 bg-gray-900/10 rounded-lg blur-xl" style={{ transform: 'translateZ(-40px) translateX(16px) translateY(32px)' }} />
              <div className="absolute inset-0 bg-gray-900/10 rounded-lg blur-lg" style={{ transform: 'translateZ(-30px) translateX(8px) translateY(16px)' }} />
              <div className="absolute inset-0 bg-gray-900/5 rounded-lg blur-md" style={{ transform: 'translateZ(-20px) translateX(4px) translateY(8px)' }} />

              {/* Main image with 3D transform */}
              <motion.div
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="w-[240px] h-[300px] xs:w-[280px] xs:h-[350px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-lg shadow-2xl dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] dark:group-hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] mx-auto lg:mx-0"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <ImageWithSkeleton
                    src="/hero.png"
                    alt="Arvind Reddy - About"
                    className="w-full h-full object-cover rounded-lg"
                    containerClassName="w-full h-full rounded-lg"
                    skeletonClassName="rounded-lg"
                  />
                </div>

                {/* Shine/reflection effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translateZ(25px)' }} />

                {/* Border glow */}
                <div className="absolute inset-0 rounded-lg border border-white/10 group-hover:border-white/30 transition-all duration-500" style={{ transform: 'translateZ(30px)' }} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-2"
            variants={fadeInRight}
          >
            <motion.h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8 leading-tight"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.span variants={staggerItem} className="block">ABOUT</motion.span>
              <motion.span variants={staggerItem} className="block">ME</motion.span>
            </motion.h2>
            <motion.div
              className="space-y-4 sm:space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base"
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem}>
                Hey! I'm someone who just really enjoys building cool stuff with tech.
                I work across full-stack web dev, AI/ML, and XR — so one day I might be coding a web app, and the next I'm fine-tuning a model or playing around in Unity.
              </motion.p>
              <motion.p variants={staggerItem}>
                I like making things that actually help people or feel fun to use.
                Whether it's a smart tool, a clean UI, or an immersive 3D scene, I'm all in.
                Always curious, always learning — especially when it comes to how AI is changing everything.
              </motion.p>
              <motion.p variants={staggerItem}>
                Right now, I'm looking for full-time roles where I can keep creating, growing, and working with people who love what they do.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 lg:pt-8 justify-center lg:justify-start"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem} className="w-full sm:w-auto">
                <EnhancedButton
                  onClick={downloadResume}
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 px-4 sm:px-5 md:px-6 py-2 rounded-full text-xs sm:text-sm w-full sm:w-auto group justify-center transition-all"
                >
                  DOWNLOAD RESUME
                  <Download className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-y-1 transition-transform" />
                </EnhancedButton>
              </motion.div>
              <Link to="/about" className="w-full sm:w-auto">
                <motion.div variants={staggerItem} className="w-full">
                  <EnhancedButton
                    variant="outline"
                    className="border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 px-4 sm:px-5 md:px-6 py-2 rounded-full group text-xs sm:text-sm w-full sm:w-auto justify-center transition-all bg-transparent"
                  >
                    KNOW MORE ABOUT ME
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </EnhancedButton>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
