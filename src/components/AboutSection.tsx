
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section 
      id="about" 
      className="min-h-screen bg-white relative z-10 scroll-mt-28 flex items-center py-16 md:py-20"
    >
      <motion.div 
        className="container mx-auto max-w-6xl px-4 md:px-8 w-full" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Side - Hero Image */}
          <motion.div 
            variants={fadeInLeft}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/hero.png"
                alt="Arvind Reddy - About"
                className="w-64 h-80 sm:w-80 sm:h-96 md:w-[400px] md:h-[500px] object-cover rounded-lg shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </motion.div>
          
          {/* Right Side - About Content */}
          <motion.div 
            className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left"
            variants={fadeInRight}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.span variants={staggerItem} className="block">ABOUT</motion.span>
              <motion.span variants={staggerItem} className="block">ME</motion.span>
            </motion.h2>
            <motion.div 
              className="space-y-6 text-gray-600 leading-relaxed"
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem}>
              Hey! I’m someone who just really enjoys building cool stuff with tech.
              I work across full-stack web dev, AI/ML, and XR — so one day I might be coding a web app, and the next I’m fine-tuning a model or playing around in Unity.
              </motion.p>
              <motion.p variants={staggerItem}>
              I like making things that actually help people or feel fun to use.
Whether it’s a smart tool, a clean UI, or an immersive 3D scene, I’m all in.
Always curious, always learning — especially when it comes to how AI is changing everything.
              </motion.p>
              <motion.p variants={staggerItem}>
              Right now, I’m looking for full-time roles where I can keep creating, growing, and working with people who love what they do.
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-8 justify-center lg:justify-start"
              variants={staggerContainer}
            >
              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-full transition-all duration-300 hover:shadow-lg text-sm md:text-base w-full sm:w-auto"
                >
                  DOWNLOAD RESUME →
                </Button>
              </motion.div>
              <Link to="/about">
                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 md:px-8 py-2 md:py-3 rounded-full transition-all duration-300 group text-sm md:text-base w-full sm:w-auto"
                  >
                    LEARN MORE 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
