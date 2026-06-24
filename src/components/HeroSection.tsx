import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInRight } from "@/utils/animations";
import { Github, Linkedin, Mail } from "lucide-react";
import { TechMascot } from "@/components/TechMascot";
import { downloadResume } from "@/utils/downloadResume";

const socialLinks = [
  { icon: Github, href: "https://github.com/arvnd-rdy", bgColor: "bg-orange-600 hover:bg-orange-700", iconColor: "text-white" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/arvnd-rdy/", bgColor: "bg-neutral-950 hover:bg-orange-600 dark:bg-white dark:hover:bg-orange-600", iconColor: "text-white dark:text-neutral-950 dark:hover:text-white" },
  { icon: Mail, href: "mailto:arvindhreddyanugu2002@gmail.com", bgColor: "bg-orange-600 hover:bg-orange-700", iconColor: "text-white" },
];

const HeroSection = () => {
  const { scrollToSection } = useActiveSection();

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
  }, []);

  return (
    <motion.section
      className="min-h-screen bg-white dark:bg-black flex flex-col transition-colors duration-300"
    >
      <div className="absolute inset-0 hero-grid brand-grid-fade pointer-events-none" />
      {/* Social Icons - Left Side */}
      <div className="hidden lg:flex flex-col items-center space-y-4 absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-20">
        {socialLinks.map(({ icon: Icon, href, bgColor, iconColor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgColor} ${iconColor} transition-all duration-200 p-3 border border-gray-300 dark:border-white/25 shadow-md hover:shadow-lg hover:scale-105`}
          >
            <Icon className="w-5 h-5 xl:w-6 xl:h-6" />
          </a>
        ))}
      </div>
      {/* Social Icons - Mobile Bottom */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-6 z-20 bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-300 dark:border-white/20 px-6 py-3 shadow-md">
        {socialLinks.map(({ icon: Icon, href, bgColor, iconColor }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bgColor} ${iconColor} transition-all duration-200 p-2 border border-gray-300 dark:border-white/25 shadow-md hover:shadow-lg hover:scale-105`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>


      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div className="space-y-3 sm:space-y-5 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2 sm:space-y-3">
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                ARAVIND<br />REDDY
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl font-semibold text-orange-600 dark:text-orange-500 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                AI/ML Engineer
              </motion.p>
            </div>

            <motion.div
              className="space-y-3 max-w-lg mx-auto lg:mx-0"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.35 }}
            >
              <motion.p
                className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-[15px] md:text-base"
                variants={fadeInUp}
              >
                I build RAG systems, multi-agent AI workflows, and ML applications — from hybrid retrieval pipelines to production-ready prototypes.
              </motion.p>
              <motion.p
                className="text-neutral-900 dark:text-neutral-200 font-medium text-xs sm:text-sm"
                variants={fadeInUp}
              >
                Open to full-time roles
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col xs:flex-row gap-2.5 sm:gap-3 justify-center lg:justify-start"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-orange-700 text-xs sm:text-sm font-bold rounded-none"
              >
                View Projects
              </Button>
              <Button
                onClick={downloadResume}
                variant="outline"
                className="border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-bold rounded-none bg-transparent"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Portrait */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div
              ref={cardRef}
              className="relative group"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: 1200 }}
            >
              {/* Light orange glow — drifts side to side */}
              <div className="hero-glow-track" aria-hidden="true">
                <div className="hero-glow-orb hero-glow-orb-a" />
                <div className="hero-glow-orb hero-glow-orb-b" />
              </div>

              <motion.div
                className="relative z-10 overflow-hidden rounded-xl shadow-[0_20px_45px_-14px_rgba(234,88,12,0.22)] dark:shadow-[0_22px_55px_-12px_rgba(249,115,22,0.32)]"
                animate={{
                  rotateX: isHovering ? mousePosition.y * -6 : 0,
                  rotateY: isHovering ? mousePosition.x * 6 : 0,
                  scale: isHovering ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/hero2.png"
                  alt="Arvind Reddy"
                  className="w-[240px] h-[300px] xs:w-[280px] xs:h-[340px] sm:w-[320px] sm:h-[380px] md:w-[350px] md:h-[420px] lg:w-[384px] lg:h-[460px] object-cover object-[center_15%] block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Mascot - Bottom Right */}
      <motion.div
        className="absolute bottom-6 right-4 xs:bottom-8 xs:right-6 sm:bottom-10 sm:right-8 lg:bottom-12 lg:right-12 z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <TechMascot variant="welcome" size={80} />
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
