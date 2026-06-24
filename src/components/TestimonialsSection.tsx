import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Linkedin } from "lucide-react";

const testimonials = [
  {
    id: 0,
    name: "Renee Daudlin-Iacobelli",
    role: "Owner / VP Operations · Insight Advantage Inc",
    relationship: "Mentor",
    date: "June 2026",
    initials: "RD",
    accentColor: "bg-orange-600",
    linkedinUrl: "https://www.linkedin.com/in/renee-daudlin-iacobelli/",
    content:
      "Aravind demonstrated strong technical ability and professionalism while working on an industry project for my company through the University of Windsor. His group successfully developed a functional app that met our business needs, and he consistently approached challenges with initiative and clear problem-solving skills. Aravind was reliable, collaborative, and committed to delivering quality work. I confidently recommend him for future roles in software development or related fields.",
  },
  {
    id: 1,
    name: "Jason Robbins",
    role: "Senior Director, IT · Pure Flavor® Farms",
    relationship: "Manager",
    date: "December 2025",
    initials: "JR",
    accentColor: "bg-neutral-800",
    linkedinUrl: "https://www.linkedin.com/in/jason-robbins-ab4a307a/",
    content:
      "Aravind was an exceptional IT intern during his time at Pure Flavor. He demonstrated strong problem-solving skills, a proactive attitude, and an eagerness to learn. Aravind quickly adapted to our systems and contributed immediately. His collaborative approach made him a valuable part of the team. I'm confident he will excel in any future role and recommend him for opportunities in IT.",
  },
  {
    id: 2,
    name: "Daniel Nogueira",
    role: "IT Support Management · Pure Flavor® Farms",
    relationship: "Manager",
    date: "December 2025",
    initials: "DN",
    accentColor: "bg-orange-500",
    linkedinUrl: "https://www.linkedin.com/in/daniel-nogueira-21a787303/",
    content:
      "I highly recommend Aravind Anugu as an exceptional IT Technician who consistently delivers reliable, high-quality support, even under pressure. He has demonstrated strong problem-solving skills, regularly thinking outside the box and approaching challenges with creativity and solid technical insight. Aravind is a fast learner who quickly adapts to new systems and technologies, making him a valuable asset to any IT team. His strong work ethic and dedication to seeing problems through to complete resolution are both admirable and impressive.",
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="bg-orange-50/40 dark:bg-black relative transition-colors duration-300 py-16 sm:py-20 scroll-mt-20"
    >
      <div className="absolute inset-0 brand-grid brand-grid-fade pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div className="mb-12 sm:mb-16" variants={fadeInUp}>
          <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3">
            Recommendations
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight">
            What People Say
          </h2>
        </motion.div>

        {/* Layout: names left, quote right */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 items-start">

          {/* Name selector */}
          <motion.div variants={fadeInUp} className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-28">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 flex-shrink-0 lg:flex-shrink border ${
                  active === i
                    ? "bg-white dark:bg-white border-orange-300 dark:border-orange-600 shadow-sm"
                    : "bg-transparent border-transparent hover:bg-white/60 dark:hover:bg-white/10 hover:border-neutral-200 dark:hover:border-white/20"
                }`}
              >
                <div className={`w-9 h-9 rounded-full ${item.accentColor} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{item.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-semibold leading-tight truncate transition-colors ${active === i ? "text-neutral-950" : "text-neutral-500 dark:text-neutral-400"}`}>
                    {item.name.split(" ")[0]} {item.name.split(" ")[1]}
                  </p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-600 truncate">{item.relationship}</p>
                </div>
                {active === i && (
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 ml-auto hidden lg:block" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Quote area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between gap-8"
            >
              {/* Quote text */}
              <div className="relative">
                <span className="absolute -top-6 -left-2 text-8xl font-black text-orange-200 dark:text-orange-900/40 leading-none select-none">
                  "
                </span>
                <p className="relative text-neutral-800 dark:text-neutral-200 text-sm sm:text-base leading-relaxed pt-6">
                  {t.content}
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center justify-between gap-4 pt-6 border-t border-neutral-200 dark:border-white/20">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.accentColor} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-950 dark:text-white leading-tight">{t.name}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-400 dark:text-neutral-600 hidden sm:block">{t.date}</span>
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-orange-400 dark:hover:border-orange-600 text-neutral-400 hover:text-orange-600 transition-all duration-200"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
