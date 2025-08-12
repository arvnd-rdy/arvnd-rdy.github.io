import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const ContactSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      href: "https://github.com/arvnd-rdy"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/arvnd-rdy/"
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:arvindhreddyanugu2002@gmail.com"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" }
  ];

  return (
    <footer id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
      <motion.div 
        className="container mx-auto max-w-6xl px-6" 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight"
            variants={staggerItem}
          >
            LET'S CONNECT
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Ready to collaborate on something amazing? I'm always excited to discuss new opportunities and innovative projects.
          </motion.p>
        </motion.div>

        {/* Contact Links */}
        <motion.div 
          className="flex justify-center items-center gap-12 mb-16"
          variants={staggerContainer}
        >
          {contactLinks.map((item) => (
            <motion.a 
              key={item.label}
              href={item.href} 
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center transition-all duration-300 mb-3">
                <item.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="flex justify-center items-center gap-8 mb-12"
          variants={staggerContainer}
        >
          {quickLinks.map((link) => (
            <motion.a 
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-medium relative group"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="pt-8 border-t border-gray-200"
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <motion.p
              className="text-sm text-gray-500"
              variants={staggerItem}
            >
              © 2025 Arvind Reddy. Built with passion and precision.
            </motion.p>
            
            <div className="flex items-center gap-6">
              <motion.div
                className="flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full"
                variants={staggerItem}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-700 text-sm font-medium">Available for work • Jun 2025</span>
              </motion.div>
              
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 font-medium group"
                variants={staggerItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to top
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ContactSection;
