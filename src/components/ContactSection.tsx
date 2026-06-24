import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/arvnd-rdy",
    sub: "arvnd-rdy",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arvnd-rdy/",
    sub: "arvnd-rdy",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:arvindhreddyanugu2002@gmail.com",
    sub: "arvindhreddyanugu2002@gmail.com",
  },
];

const navLinks = ["About", "Skills", "Projects", "Experience", "Testimonials", "Contact"];

const ContactSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="contact"
      className="bg-orange-50/40 dark:bg-black relative overflow-hidden transition-colors duration-300"
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Main content */}
        <div className="pt-16 sm:pt-20 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — CTA */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <p className="text-orange-500 font-semibold text-sm tracking-tight mb-3">
                Get In Touch
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight">
                Let's Build<br />Something Great
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed max-w-md">
              I'm currently open to full-time roles and interesting collaborations.
              Whether you have an idea, a project, or just want to say hello — my inbox is open.
            </p>
            <motion.a
              href="mailto:arvindhreddyanugu2002@gmail.com"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-105 border border-orange-700"
              variants={staggerItem}
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </motion.a>
          </motion.div>

          {/* Right — social links */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <p className="text-neutral-500 dark:text-neutral-500 text-xs font-semibold tracking-widest uppercase mb-5">
              Find me online
            </p>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-4 rounded-xl border border-neutral-900 dark:border-white hover:border-orange-500 dark:hover:border-orange-600 bg-neutral-950 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(234,88,12,0.8)] hover:shadow-[2px_2px_0px_0px_rgba(234,88,12,0.8)] hover:translate-x-[2px] hover:translate-y-[2px]"
                variants={staggerItem}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-neutral-800 dark:bg-neutral-100 group-hover:bg-orange-600 flex items-center justify-center transition-colors duration-200">
                    <link.icon className="w-4 h-4 text-neutral-300 dark:text-neutral-800 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-white dark:text-neutral-950 text-sm font-semibold">{link.label}</p>
                    <p className="text-neutral-400 dark:text-neutral-600 text-xs truncate max-w-[180px] sm:max-w-none">{link.sub}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-orange-400 transition-colors flex-shrink-0" />
              </motion.a>
            ))}

            {/* Status pill */}
            <div className="flex items-center gap-2 pt-3 pl-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-neutral-500 dark:text-neutral-400 text-xs font-medium">Available for opportunities · Jun 2025</span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-200 dark:bg-white/20" />

        {/* Bottom bar */}
        <motion.div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          variants={fadeInUp}
        >
          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-neutral-500 dark:text-neutral-500 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-400 dark:text-neutral-600">© 2025 Aravind Reddy</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-300 dark:border-neutral-700 hover:border-orange-500 hover:text-orange-600 text-neutral-500 dark:text-neutral-400 text-xs font-medium rounded-full transition-all duration-200"
            >
              <ArrowUp className="w-3 h-3" />
              Top
            </button>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ContactSection;
