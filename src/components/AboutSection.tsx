import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { downloadResume } from "@/utils/downloadResume";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { TechMascot } from "@/components/TechMascot";

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 relative z-10 scroll-mt-20 sm:scroll-mt-28 flex items-center py-8 sm:py-12 md:py-16 lg:py-20 transition-colors duration-300"
    >
      {/* Grid background with fade effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" 
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)'
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full relative"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Tech Mascot - Top Left */}
        <motion.div
          className="absolute top-4 left-4 hidden lg:block z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TechMascot variant="thinking" size={70} />
        </motion.div>

        {/* Swiss Poster Style Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          
          {/* Left Side - Image with Bold Colored Border */}
          <motion.div
            variants={fadeInLeft}
            className="flex justify-center lg:justify-start order-2 lg:order-1 p-4 sm:p-6 lg:p-8"
          >
            <div className="relative">
              {/* Geometric accent - Yellow square */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 dark:bg-yellow-500 -z-10"></div>
              
              {/* Geometric accent - Blue square */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 dark:bg-blue-600 -z-10"></div>

              {/* Main image with thick colored border */}
              <div className="relative border-4 border-black dark:border-white bg-white dark:bg-gray-900">
                <ImageWithSkeleton
                  src="/hero.png"
                  alt="Arvind Reddy - About"
                  className="w-[240px] h-[300px] xs:w-[280px] xs:h-[350px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] object-cover"
                  containerClassName="w-full h-full"
                  skeletonClassName=""
                />
                
                {/* Red accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-500 dark:bg-red-600"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content with Bold Typography */}
          <motion.div
            className="space-y-6 lg:space-y-8 text-left order-1 lg:order-2 p-4 sm:p-6 lg:p-8"
            variants={fadeInRight}
          >
            {/* Bold Swiss-style heading */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Yellow accent block behind heading */}
              <div className="absolute -left-2 top-0 w-1 h-full bg-yellow-400 dark:bg-yellow-500"></div>
              
              <motion.h2
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-none tracking-tighter uppercase"
                variants={staggerItem}
              >
                ABOUT
              </motion.h2>
              <motion.h2
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white leading-none tracking-tighter uppercase"
                variants={staggerItem}
              >
                ME
              </motion.h2>
            </motion.div>

            {/* Content blocks with geometric divisions */}
            <motion.div
              className="space-y-4 sm:space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-l-4 border-blue-500 dark:border-blue-600 pl-4 sm:pl-6"
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem} className="font-medium">
                Hey! I'm someone who just really enjoys building cool stuff with tech.
                I work across full-stack web dev, AI/ML, and XR — so one day I might be coding a web app, and the next I'm fine-tuning a model or playing around in Unity.
              </motion.p>
              <motion.p variants={staggerItem} className="font-medium">
                I like making things that actually help people or feel fun to use.
                Whether it's a smart tool, a clean UI, or an immersive 3D scene, I'm all in.
                Always curious, always learning — especially when it comes to how AI is changing everything.
              </motion.p>
              <motion.p variants={staggerItem} className="font-medium">
                Right now, I'm looking for full-time roles where I can keep creating, growing, and working with people who love what they do.
              </motion.p>
            </motion.div>

            {/* Brutalist Buttons with Offset Shadows */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6"
              variants={staggerContainer}
            >
              <motion.button
                onClick={downloadResume}
                variants={staggerItem}
                className="relative bg-black dark:bg-white text-white dark:text-black px-6 py-3 font-black uppercase text-sm tracking-wider transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] group"
                style={{
                  boxShadow: '4px 4px 0px 0px #EF4444'
                }}
                whileHover={{
                  boxShadow: '8px 8px 0px 0px #EF4444'
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  DOWNLOAD RESUME
                  <Download className="w-4 h-4" />
                </span>
              </motion.button>

              <Link to="/about" className="w-full sm:w-auto">
                <motion.button
                  variants={staggerItem}
                  className="relative bg-white dark:bg-gray-900 text-black dark:text-white border-4 border-black dark:border-white px-6 py-3 font-black uppercase text-sm tracking-wider transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] w-full group"
                  style={{
                    boxShadow: '4px 4px 0px 0px #3B82F6'
                  }}
                  whileHover={{
                    boxShadow: '8px 8px 0px 0px #3B82F6'
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    KNOW MORE
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Geometric accent element */}
            <motion.div
              variants={staggerItem}
              className="flex gap-2 pt-4"
            >
              <div className="w-12 h-1 bg-red-500 dark:bg-red-600"></div>
              <div className="w-8 h-1 bg-yellow-400 dark:bg-yellow-500"></div>
              <div className="w-6 h-1 bg-blue-500 dark:bg-blue-600"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
