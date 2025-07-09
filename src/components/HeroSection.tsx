import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/arvnd-rdy" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arvnd-rdy/" },
  { icon: Mail, href: "mailto:arvindhreddyanugu2002@gmail.com" },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.section 
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* Social Icons - Left Side */}
      <div className="hidden md:flex flex-col items-center space-y-4 absolute left-8 top-1/2 -translate-y-1/2 z-20">
        {socialLinks.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>
      {/* Navigation */}
      <motion.nav 
        className="flex justify-between items-center p-4 md:p-8 text-sm text-gray-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="transition-colors duration-300 hover:text-gray-900 text-xs md:text-sm"
          whileHover={{ scale: 1.05 }}
        >
          <span className="hidden sm:inline">Full Stack & AI/ML Developer</span>
          <span className="sm:hidden">Developer</span>
        </motion.div>
        <motion.div 
          className="hidden md:flex space-x-4 lg:space-x-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-gray-900 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              variants={staggerItem}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden p-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
          </div>
        </motion.button>
      </motion.nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-none tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                ARAVIND
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                REDDY
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="space-y-4 max-w-md mx-auto lg:mx-0"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              <motion.p 
                className="text-gray-600 leading-relaxed text-sm md:text-base"
                variants={fadeInUp}
              >
                Open to job opportunities.
              </motion.p>
              <motion.p 
                className="text-gray-600 leading-relaxed text-sm md:text-base"
                variants={fadeInUp}
              >
                I build websites, AI tools, and 3D experiences that are simple, smart, and fun to use.
                Always curious, always creating — let's make something cool.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              <Button 
                asChild
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-lg text-sm md:text-base"
              >
                <a href="https://www.linkedin.com/in/arvnd-rdy/" target="_blank" rel="noopener noreferrer">
                  CONTACT →
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/hero2.png"
                alt="Arvind Reddy"
                className="w-64 h-80 sm:w-80 sm:h-96 md:w-[384px] md:h-[460px] object-cover transition-all duration-700"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Text */}
      <motion.div 
        className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="text-gray-400 text-xs md:text-sm">AVAILABLE FOR WORK</div>
        <div className="text-2xl md:text-4xl font-black text-gray-900">JUN'25</div>
      </motion.div>

      {/* Small Arrow Indicator */}
      <motion.div 
        className="absolute bottom-4 md:bottom-8 left-4 md:left-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
