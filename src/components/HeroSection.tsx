import { ArrowDown, Menu, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/TypingAnimation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

const socialLinks = [
  { icon: Github, href: "https://github.com/arvnd-rdy" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arvnd-rdy/" },
  { icon: Mail, href: "mailto:arvindhreddyanugu2002@gmail.com" },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollNavigation();
  const { activeSection, scrollToSection } = useActiveSection();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Blog', 'Contact'];

  return (
    <motion.section 
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* Social Icons - Left Side */}
      <div className="hidden lg:flex flex-col items-center space-y-4 absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20">
        {socialLinks.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            <Icon className="w-5 h-5 xl:w-6 xl:h-6" />
          </a>
        ))}
      </div>
      {/* Sticky Glass Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 sm:p-6 lg:px-8 lg:py-4 text-xs sm:text-sm text-gray-600 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-lg' 
            : 'bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm'
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.div 
          className="transition-colors duration-300 hover:text-gray-900 text-xs sm:text-sm lg:text-base font-medium"
          whileHover={{ scale: 1.05 }}
        >
          <span className="hidden sm:inline">Full Stack & AI/ML Developer</span>
          <span className="sm:hidden">Developer</span>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex space-x-4 lg:space-x-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => {
                if (item === 'Blog') {
                  window.open('https://avilogs.blogspot.com/', '_blank', 'noopener noreferrer');
                } else {
                  scrollToSection(item.toLowerCase());
                }
              }}
              className={`hover:text-gray-900 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-900 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left font-medium ${
                activeSection === item.toLowerCase() || (activeSection === '' && item === 'About')
                  ? 'text-gray-900 after:scale-x-100' 
                  : 'after:scale-x-0'
              }`}
              variants={staggerItem}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 hover:bg-white/50 rounded-lg transition-colors backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-[72px] left-0 right-0 bg-white/95 backdrop-blur-md border-b border-white/20 z-40 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    if (item === 'Blog') {
                      window.open('https://avilogs.blogspot.com/', '_blank', 'noopener noreferrer');
                    } else {
                      scrollToSection(item.toLowerCase());
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all duration-300 text-center font-medium w-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200/50">
                {socialLinks.map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Development Warning Banner */}
      <motion.div
        className="fixed top-[72px] left-0 right-0 bg-amber-50/95 backdrop-blur-sm border-b border-amber-200/50 z-30 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-2 text-amber-800">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-medium">
              🚧 Website under development - Some content may be placeholder data
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-gray-900 leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              ARAVIND
              <br />
              REDDY
            </motion.h1>
            
            <motion.div 
              className="space-y-4 max-w-md mx-auto lg:mx-0"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <motion.p 
                className="text-gray-600 leading-relaxed text-sm sm:text-base"
                variants={fadeInUp}
              >
                <TypingAnimation 
                  text="Open to job opportunities."
                  delay={800}
                  speed={50}
                />
              </motion.p>
              <motion.p 
                className="text-gray-600 leading-relaxed text-sm sm:text-base"
                variants={fadeInUp}
              >
                <TypingAnimation 
                  text="I build websites, AI tools, and 3D experiences that are simple, smart, and fun to use. Always curious, always creating — let's make something cool."
                  delay={2000}
                  speed={30}
                />
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <Button 
                asChild
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <a href="https://www.linkedin.com/in/arvnd-rdy/" target="_blank" rel="noopener noreferrer">
                  CONTACT →
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="/hero2.png"
                alt="Arvind Reddy"
                className="w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] md:w-[350px] md:h-[420px] lg:w-[384px] lg:h-[460px] object-cover transition-all duration-700 rounded-lg shadow-xl"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Text */}
      <motion.div 
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div className="text-gray-400 text-xs sm:text-sm">AVAILABLE FOR WORK</div>
        <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">JUN'25</div>
      </motion.div>

      {/* Small Arrow Indicator */}
      <motion.div 
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
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
