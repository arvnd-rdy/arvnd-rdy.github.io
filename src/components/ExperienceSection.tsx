import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { TechMascot } from "@/components/TechMascot";

const ExperienceSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const experiences = [
    {
      company: "Pure Flavor® Farms",
      role: "Information Technology Specialist",
      type: "Co-op",
      duration: "Sep 2025 - Dec 2025",
      period: "4 mos",
      location: "Leamington, Ontario, Canada",
      year: "2025",
      description: "Provided comprehensive IT support and system maintenance. Troubleshot hardware and software issues while implementing security protocols."
    },
    {
      company: "Dexian",
      role: "Technical Recruiter",
      type: "Full-time",
      duration: "May 2023 - Aug 2023",
      period: "4 mos",
      location: "Pune, Maharashtra, India",
      year: "2023",
      description: "Sourced and screened technical candidates for various positions. Managed recruitment pipeline and coordinated interview processes."
    },
    {
      company: "EPAM Systems",
      role: "Frontend Developer",
      type: "Apprenticeship",
      duration: "Jan 2023 - May 2023",
      period: "5 mos",
      location: "Remote",
      year: "2023",
      description: "Developed responsive web interfaces using modern frameworks. Collaborated with design team to implement pixel-perfect UIs."
    }
  ];

  return (
    <motion.section
      id="experience"
      className="py-16 sm:py-20 md:py-24 bg-gray-100 dark:bg-gray-950 relative transition-colors duration-300"
    >
      <motion.div
        className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Tech Mascot - Top Left */}
        <motion.div
          className="absolute top-4 left-4 hidden lg:block z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TechMascot variant="typing" size={70} />
        </motion.div>

        {/* Header Label */}
        <motion.div
          className="inline-block bg-black dark:bg-white px-8 py-4 mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white dark:text-black uppercase tracking-widest">
            WORK EXPERIENCE
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Thick vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black dark:bg-white"></div>

          {/* Experience Items */}
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                className="relative pl-12 sm:pl-16"
                variants={staggerItem}
              >
                {/* Yellow dot */}
                <div className="absolute left-0 top-2 w-6 h-6 sm:w-7 sm:h-7 bg-yellow-400 dark:bg-yellow-500 rounded-full border-4 border-black dark:border-white transform -translate-x-[10px] sm:-translate-x-[11px]"></div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Role Title */}
                  <div className="inline-block bg-black dark:bg-white px-4 py-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white dark:text-black uppercase tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Company & Duration */}
                  <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base mb-2">
                    <span className="font-black text-gray-900 dark:text-white">
                      {exp.company}
                    </span>
                    <span className="text-gray-500 dark:text-gray-500 font-mono">
                      // {exp.duration}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-500 font-medium mb-3">
                    📍 {exp.location}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed max-w-3xl font-mono">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
