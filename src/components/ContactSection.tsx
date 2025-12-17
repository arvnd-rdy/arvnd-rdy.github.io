import { Github, Linkedin, Mail, ArrowUp, Sparkles, Heart } from "lucide-react";
import { playSound } from "@/utils/soundEffects";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const ContactSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentMood = () => {
    const moods = [
      { text: "caffeinated but calm", emoji: "☕", color: "bg-amber-100 border-amber-300 text-amber-800" },
      { text: "casually crushing deadlines", emoji: "💪", color: "bg-blue-100 border-blue-300 text-blue-800" },
      { text: "ideas per minute — slightly above average", emoji: "💡", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
      { text: "one coffee away from genius", emoji: "🧠", color: "bg-purple-100 border-purple-300 text-purple-800" },
      { text: "designing like it's Friday", emoji: "🎉", color: "bg-green-100 border-green-300 text-green-800" },
      { text: "quietly unstoppable", emoji: "🚀", color: "bg-indigo-100 border-indigo-300 text-indigo-800" },
      { text: "making pixels behave", emoji: "🎨", color: "bg-pink-100 border-pink-300 text-pink-800" },
      { text: "curious and caffeinated", emoji: "🤔", color: "bg-orange-100 border-orange-300 text-orange-800" },
      { text: "full battery (for now)", emoji: "🔋", color: "bg-emerald-100 border-emerald-300 text-emerald-800" },
      { text: "coasting in creative mode", emoji: "🌊", color: "bg-cyan-100 border-cyan-300 text-cyan-800" },
      { text: "running on playlists and pixels", emoji: "🎵", color: "bg-violet-100 border-violet-300 text-violet-800" },
      { text: "in the zone, but chill about it", emoji: "😎", color: "bg-slate-100 border-slate-300 text-slate-800" },
      { text: "minimal chaos, maximum focus", emoji: "🎯", color: "bg-red-100 border-red-300 text-red-800" },
      { text: "brainstorming without the storm", emoji: "🌤️", color: "bg-sky-100 border-sky-300 text-sky-800" },
      { text: "just enough coffee to function", emoji: "☕", color: "bg-amber-100 border-amber-300 text-amber-800" },
      { text: "cruising through the day", emoji: "🛣️", color: "bg-teal-100 border-teal-300 text-teal-800" },
      { text: "calm, collected, and creative", emoji: "🧘", color: "bg-green-100 border-green-300 text-green-800" },
      { text: "slightly ahead of schedule", emoji: "⏰", color: "bg-blue-100 border-blue-300 text-blue-800" },
      { text: "designing with a side of snacks", emoji: "🍿", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
      { text: "balanced between 'let's go' and 'let's nap'", emoji: "⚖️", color: "bg-purple-100 border-purple-300 text-purple-800" }
    ];

    // Use date to ensure same mood for the day
    const today = new Date().toDateString();
    const moodIndex = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % moods.length;
    return moods[moodIndex];
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
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" }
  ];

  return (
    <footer id="contact" className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <motion.div
        className="container mx-auto max-w-6xl px-4 sm:px-6"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-4"
            variants={staggerItem}
          >
            LET'S CONNECT
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4"
            variants={staggerItem}
          >
            Ready to collaborate on something amazing? I'm always excited to discuss new opportunities and innovative projects.
          </motion.p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16 flex-wrap"
          variants={staggerContainer}
        >
          {contactLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" ? "_blank" : undefined}
              rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center transition-all duration-300"
              onClick={() => playSound('click')}
              onMouseEnter={() => playSound('hover')}
              variants={staggerItem}
              whileHover={{ y: -4 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-900 dark:group-hover:bg-white flex items-center justify-center transition-all duration-300 mb-2 sm:mb-3">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-black transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 flex-wrap px-4"
          variants={staggerContainer}
        >
          {quickLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 font-medium relative group text-xs sm:text-sm"
              onClick={() => playSound('click')}
              onMouseEnter={() => playSound('hover')}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
            >
              {link.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Mood Section */}
        <motion.div
          className="flex justify-center mb-6 sm:mb-8 px-4"
          variants={staggerContainer}
        >
          <motion.div
            className={`flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm shadow-sm ${getCurrentMood().color.replace('bg-', 'bg-').replace('text-', 'text-')} dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 border shadow-sm dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] max-w-full`}
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-base sm:text-lg">{getCurrentMood().emoji}</span>
            <span className="font-medium">Current mood:</span>
            <span className="italic font-medium text-center sm:text-left">{getCurrentMood().text}</span>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800"
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left px-4">
            <motion.p
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-500"
              variants={staggerItem}
            >
              © 2025 Arvind Reddy. Built with passion and precision.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
              <motion.div
                className="flex items-center gap-2 px-2 sm:px-3 py-1 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full"
                variants={staggerItem}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-700 dark:text-green-400 text-[10px] xs:text-xs sm:text-sm font-medium">Available for work • Jun 2025</span>
              </motion.div>

              <motion.button
                onClick={() => {
                  playSound('click');
                  scrollToTop();
                }}
                onMouseEnter={() => playSound('hover')}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 font-medium group"
                variants={staggerItem}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to top
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default ContactSection;
