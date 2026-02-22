import React from "react";
import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { playSound } from "@/utils/soundEffects";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { TechMascot } from "@/components/TechMascot";

const ContactSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/arvnd-rdy",
      color: "bg-gray-900 dark:bg-white",
      textColor: "text-white dark:text-gray-900",
      shadowColor: "#FF00FF"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arvnd-rdy/",
      color: "bg-blue-600",
      textColor: "text-white",
      shadowColor: "#FFFF00"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:arvindhreddyanugu2002@gmail.com",
      color: "bg-emerald-500",
      textColor: "text-white",
      shadowColor: "#FF6B00"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about", color: "#FF00FF" },
    { label: "Skills", href: "#skills", color: "#00FFFF" },
    { label: "Projects", href: "#projects", color: "#FFFF00" },
    { label: "Experience", href: "#experience", color: "#FF6B00" },
    { label: "Testimonials", href: "#testimonials", color: "#00FF00" }
  ];

  return (
    <footer id="contact" className="py-0 bg-gray-100 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <motion.div
        className="w-full relative z-10"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Main Contact Grid - 3 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[300px]">
          
          {/* Left Column - CTA (Red) */}
          <motion.div
            className="p-8 md:p-10 lg:p-12 flex flex-col justify-center border-4 border-black dark:border-white relative"
            style={{ backgroundColor: '#E63946' }}
            variants={fadeInUp}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight uppercase mb-4"
              variants={staggerItem}
            >
              HAVE AN
              <br />
              IDEA?
            </motion.h2>
            
            <motion.p
              className="text-sm sm:text-base text-white/90 font-medium mb-6 leading-relaxed"
              variants={staggerItem}
            >
              I am currently available for freelance work and full-time positions.
            </motion.p>

            <motion.a
              href="mailto:arvindhreddyanugu2002@gmail.com"
              className="inline-block text-white font-black text-lg sm:text-xl uppercase tracking-wider border-b-4 border-white hover:border-white/70 transition-colors pb-1 w-fit"
              variants={staggerItem}
              onClick={() => playSound('click')}
              onMouseEnter={() => playSound('hover')}
            >
              CONTACT ME
            </motion.a>
            
            {/* Tech Mascot - Bottom Left */}
            <motion.div
              className="absolute bottom-4 left-4 hidden sm:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <TechMascot variant="cool" size={60} />
            </motion.div>
          </motion.div>

          {/* Middle Column - Contact Links (White/Light) */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 md:p-10 lg:p-12 flex flex-col justify-center border-y-4 md:border-y-4 md:border-x-0 border-x-4 border-black dark:border-white"
            variants={fadeInUp}
          >
            <div className="space-y-5">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="block group"
                  onClick={() => playSound('click')}
                  onMouseEnter={() => playSound('hover')}
                  variants={staggerItem}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight group-hover:translate-x-2 transition-transform">
                      {link.label}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" strokeWidth={3} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Status (Black) */}
          <motion.div
            className="bg-black dark:bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center border-4 border-black dark:border-white"
            variants={fadeInUp}
          >
            <motion.div
              className="text-xs sm:text-sm font-black text-gray-400 dark:text-gray-600 uppercase tracking-widest mb-4"
              variants={staggerItem}
            >
              STATUS
            </motion.div>
            
            <motion.div
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white dark:text-black uppercase tracking-tight mb-6"
              variants={staggerItem}
            >
              AVAILABLE
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-gray-400 dark:text-gray-600 text-xs sm:text-sm font-bold"
              variants={staggerItem}
            >
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
              <span>JUN 2025</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar - Quick Links + Footer */}
        <motion.div
          className="bg-black dark:bg-white border-t-4 border-black dark:border-white"
          variants={fadeInUp}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              
              {/* Left - Quick Links */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                {quickLinks.map((link, idx) => (
                  <React.Fragment key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-[10px] font-black uppercase tracking-widest text-white dark:text-black hover:text-pink-400 dark:hover:text-pink-500 transition-colors"
                      onClick={() => playSound('click')}
                      onMouseEnter={() => playSound('hover')}
                      variants={staggerItem}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.label}
                    </motion.a>
                    {idx < quickLinks.length - 1 && (
                      <span className="text-gray-600 dark:text-gray-400">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Right - Copyright + Back to Top */}
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                  © 2025 ARVIND REDDY
                </span>
                
                <motion.button
                  onClick={() => {
                    playSound('click');
                    scrollToTop();
                  }}
                  onMouseEnter={() => playSound('hover')}
                  className="flex items-center gap-1.5 bg-white dark:bg-black text-black dark:text-white px-3 py-1.5 border-2 border-white dark:border-black hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all"
                  variants={staggerItem}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-[9px] font-black uppercase tracking-widest">TOP</span>
                  <ArrowUp className="w-3 h-3" strokeWidth={3} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ContactSection;
