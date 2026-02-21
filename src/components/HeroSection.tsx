import { ArrowDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/TypingAnimation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import ThemeToggle from "@/components/ThemeToggle";

const socialLinks = [
  { icon: Github, href: "https://github.com/arvnd-rdy", bgColor: "bg-gray-900 hover:bg-gray-800", iconColor: "text-white" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arvnd-rdy/", bgColor: "bg-blue-600 hover:bg-blue-700", iconColor: "text-white" },
  { icon: Mail, href: "mailto:arvindhreddyanugu2002@gmail.com", bgColor: "bg-red-500 hover:bg-red-600", iconColor: "text-white" },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollNavigation();
  const { activeSection, scrollToSection } = useActiveSection();

  // Mouse tracking for 3D tilt effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Testimonials', 'Blog', 'Contact'];

  return (
    <motion.section
      className="min-h-screen bg-white dark:bg-gray-900 flex flex-col transition-colors duration-300"
    >
      {/* Enhanced grid background with fade effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" 
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)'
        }}
      />
      {/* Social Icons - Left Side */}
      <div className="hidden lg:flex flex-col items-center space-y-4 absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20">
        {socialLinks.map(({ icon: Icon, href, bgColor, iconColor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgColor} ${iconColor} transition-all duration-200 p-3 border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg hover:scale-105`}
          >
            <Icon className="w-5 h-5 xl:w-6 xl:h-6" />
          </a>
        ))}
      </div>
      {/* Social Icons - Mobile Bottom */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-6 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-300 dark:border-gray-600 px-6 py-3 shadow-md">
        {socialLinks.map(({ icon: Icon, href, bgColor, iconColor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgColor} ${iconColor} transition-all duration-200 p-2 border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg hover:scale-105`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      {/* Sticky Glass Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 sm:p-4 md:p-6 lg:px-8 lg:py-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-300 dark:border-gray-600 shadow-sm'
          : 'bg-transparent border-b border-transparent shadow-none'
          }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.div
          className="transition-colors duration-300 hover:text-gray-900 text-[10px] xs:text-xs sm:text-sm lg:text-base font-medium"
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
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => {
                if (item === 'Blog') {
                  window.open('https://avilogs.blogspot.com/', '_blank', 'noopener noreferrer');
                } else {
                  scrollToSection(item.toLowerCase());
                }
              }}
              className={`px-3 py-2 transition-all duration-300 font-medium border border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white/50 dark:hover:bg-gray-800/50 ${activeSection === item.toLowerCase() || (activeSection === '' && item === 'About')
                ? 'text-gray-900 dark:text-white bg-white/30 dark:bg-gray-800/30 border-gray-300 dark:border-gray-600'
                : 'text-gray-600 dark:text-gray-300'
                }`}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.button>
          ))}
          <ThemeToggle />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 hover:bg-white/50 border border-gray-300 dark:border-gray-600 transition-colors backdrop-blur-sm"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
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
            className="md:hidden fixed top-[64px] sm:top-[72px] left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 z-40 shadow-lg max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-72px)] overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
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
                  className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-white/50 border border-transparent hover:border-gray-300 transition-all duration-300 text-center font-medium w-full"
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
                {socialLinks.map(({ icon: Icon, href, bgColor, iconColor }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bgColor} ${iconColor} transition-all duration-200 p-2 border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg hover:scale-105`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-gray-900 dark:text-white leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              ARAVIND<br />REDDY
            </motion.h1>

            <motion.div
              className="space-y-4 max-w-md mx-auto lg:mx-0"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <motion.p
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base"
                variants={fadeInUp}
              >
                <TypingAnimation
                  text="Open to job opportunities."
                  delay={800}
                  speed={50}
                />
              </motion.p>
              <motion.p
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base"
                variants={fadeInUp}
              >
                <TypingAnimation
                  text="I build websites, AI tools, and 3D experiences that are simple, smart, and fun to use. Always curious, always creating...let's make something cool."
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
                className="bg-blue-500 hover:bg-blue-600 text-white px-7 sm:px-9 py-3 sm:py-4 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-blue-600 text-sm sm:text-base font-bold rounded-none"
              >
                <a href="https://www.linkedin.com/in/arvnd-rdy/" target="_blank" rel="noopener noreferrer">
                  CONTACT →
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Simple Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 border border-gray-300 dark:border-gray-600 shadow-lg">
              <img
                src="/hero2.png"
                alt="Arvind Reddy"
                className="w-[240px] h-[300px] xs:w-[280px] xs:h-[340px] sm:w-[320px] sm:h-[380px] md:w-[350px] md:h-[420px] lg:w-[384px] lg:h-[460px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Text */}
      <motion.div
        className="absolute bottom-2 right-2 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 text-right z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div className="text-gray-400 text-[10px] xs:text-xs sm:text-sm">AVAILABLE FOR WORK</div>
        <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white">JUN'25</div>
      </motion.div>

      {/* Small Arrow Indicator */}
      <motion.div
        className="absolute bottom-2 left-2 xs:bottom-4 xs:left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3 h-3 xs:w-4 xs:h-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
