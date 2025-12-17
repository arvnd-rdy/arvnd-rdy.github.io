
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

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
      workType: "On-site"
    },
    {
      company: "Dexian",
      role: "Technical Recruiter",
      type: "Full-time",
      duration: "May 2023 - Aug 2023",
      period: "4 mos",
      location: "Pune, Maharashtra, India",
      workType: "On-site"
    },
    {
      company: "EPAM Systems",
      role: "Frontend Developer",
      type: "Apprenticeship",
      duration: "Jan 2023 - May 2023",
      period: "5 mos",
      location: "Remote",
      workType: "Remote"
    }
  ];

  return (
    <motion.section
      id="experience"
      className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA] dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.div
        className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
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
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-4"
            variants={staggerItem}
          >
            EXPERIENCE
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base px-4"
            variants={staggerItem}
          >
            Professional journey through technical roles and continuous learning
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative flex items-start gap-3 sm:gap-4 md:gap-8"
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-900 dark:bg-white rounded-full relative z-10 mt-4 sm:mt-5 md:mt-6 flex-shrink-0 hidden md:block"></div>

                  {/* Content Card */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:dark:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white uppercase tracking-wide mb-1">
                          {exp.company}
                        </h3>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                          {exp.role}
                        </h4>

                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-2">
                        <Badge variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-[10px] xs:text-xs">
                          {exp.type}
                        </Badge>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
