
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

const ExperienceSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const experiences = [
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
      className="py-20 bg-white"
    >
      <motion.div 
        className="container mx-auto max-w-7xl px-8" 
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
            className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
            variants={staggerItem}
          >
            EXPERIENCE
          </motion.h2>
          <motion.p 
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto"
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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.company}
                  className="relative flex items-start gap-8"
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-gray-900 rounded-full relative z-10 mt-6 flex-shrink-0 hidden md:block"></div>
                  
                  {/* Content Card */}
                  <div className="bg-gray-50 hover:bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-black text-gray-900 uppercase tracking-wide mb-1">
                          {exp.company}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          {exp.role}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start sm:items-end gap-2">
                        <Badge variant="outline" className="border-gray-300 text-gray-700">
                          {exp.type}
                        </Badge>
                        <span className="text-sm text-gray-500 font-medium">
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
