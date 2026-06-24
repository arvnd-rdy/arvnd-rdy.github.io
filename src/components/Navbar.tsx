import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { staggerContainer, staggerItem } from "@/utils/animations";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_ITEMS = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Testimonials",
  "Blog",
  "Contact",
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollNavigation();
  const { activeSection, scrollToSection } = useActiveSection();

  const handleNavClick = (item: string) => {
    if (item === "Blog") {
      window.open("https://avilogs.blogspot.com/", "_blank", "noopener noreferrer");
    } else {
      scrollToSection(item.toLowerCase());
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (item: string) =>
    activeSection === item.toLowerCase() ||
    (activeSection === "" && item === "About");

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        className={`pointer-events-auto flex justify-between items-center px-8 sm:px-12 py-3.5 transition-all duration-300 w-full max-w-[90rem] rounded-[35px] border ${
          isScrolled
            ? "bg-neutral-950 dark:bg-white border-neutral-800 dark:border-neutral-200 shadow-xl shadow-black/40 dark:shadow-white/20"
            : "bg-neutral-950 dark:bg-white border-neutral-800 dark:border-neutral-200 shadow-lg shadow-black/25 dark:shadow-white/15"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Logo / Wordmark */}
        <motion.button
          onClick={handleLogoClick}
          className="flex items-center gap-2 group focus:outline-none"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-label="Scroll to top"
        >
          {/* Monogram badge */}
          <span className="w-9 h-9 flex items-center justify-center bg-orange-600 text-white text-xs font-black tracking-wider select-none rounded-full">
            AR
          </span>
          {/* Full name — hidden on very small screens */}
          <span className="hidden sm:block font-bold text-base tracking-tight text-white dark:text-neutral-950 group-hover:text-orange-400 dark:group-hover:text-orange-600 transition-colors duration-200">
            Aravind Reddy
          </span>
        </motion.button>

        {/* Desktop nav links */}
        <motion.div
          className="hidden md:flex items-center gap-2 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none tracking-wide text-white dark:text-neutral-950`}
              variants={staggerItem}
              whileHover={{ scale: 1.04 }}
            >
              {item}
              <span
                className={`absolute bottom-0 left-3 right-3 h-[2px] bg-orange-600 transition-transform duration-200 origin-left ${
                  isActive(item) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </motion.button>
          ))}

          <div className="ml-4">
            <ThemeToggle />
          </div>
        </motion.div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            className="p-2 border border-neutral-700 dark:border-neutral-300 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white dark:text-neutral-950" />
            ) : (
              <Menu className="w-5 h-5 text-white dark:text-neutral-950" />
            )}
          </motion.button>
        </div>
      </motion.nav>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed top-20 left-4 right-4 z-40 bg-white/97 dark:bg-black/97 backdrop-blur-md border border-gray-200 dark:border-white/20 shadow-lg rounded-2xl overflow-y-auto max-h-[calc(100vh-6rem)]"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium border-l-2 transition-all duration-200 ${
                    isActive(item)
                      ? "border-orange-600 text-neutral-950 dark:text-white bg-orange-50/60 dark:bg-orange-950/30"
                      : "border-transparent text-neutral-600 dark:text-neutral-400 hover:border-orange-400 hover:text-neutral-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900"
                  }`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
