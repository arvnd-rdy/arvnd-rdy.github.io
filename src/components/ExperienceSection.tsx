import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";
import { MapPin, CalendarDays } from "lucide-react";

const experiences = [
  {
    index: "01",
    company: "Pure Flavor® Farms",
    role: "Information Technology Specialist",
    type: "Co-op",
    duration: "Sep 2025 – Apr 2026",
    period: "8 mos",
    location: "Leamington, Ontario, Canada · On-site",
    description:
      "Engineered custom Python scripts to automate business processes, demonstrating an automation-first approach to resolving complex administrative bottlenecks. Maintained scalable server operations, enterprise system environments, and endpoint security. Designed, tested, and deployed internal micro-applications and scripts, significantly improving organizational data reporting and operational efficiency.",
    skills: ["Python", "Automation", "IT Infrastructure", "Networking", "Endpoint Security", "Server Operations"],
  },
  {
    index: "02",
    company: "Insight Advantage",
    role: "Full Stack Engineer AI",
    type: "Apprenticeship",
    duration: "May 2025 – Aug 2025",
    period: "4 mos",
    location: "Windsor, Ontario, Canada · Remote",
    description:
      "Built and integrated AI-powered features into a full-stack consulting platform. Worked across the entire stack to ship production-ready features combining modern web development with LLM-driven workflows.",
    skills: ["React", "Node.js", "AI Integration", "Full Stack", "LLMs"],
  },
  {
    index: "03",
    company: "EPAM Systems",
    role: "Frontend Developer",
    type: "Apprenticeship",
    duration: "Jan 2023 – May 2023",
    period: "5 mos",
    location: "Remote",
    description:
      "Developed responsive web interfaces using modern frameworks. Collaborated with the design team to implement pixel-perfect UIs.",
    skills: ["HTML5", "TypeScript", "React", "Responsive Design", "CSS"],
  },
];

const ExperienceSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="experience"
      className="bg-white dark:bg-black relative transition-colors duration-300 py-16 sm:py-20 scroll-mt-20"
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
            Experience
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight">
            Work History
          </h2>
        </motion.div>

        {/* Experience rows */}
        <div>
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              variants={staggerItem}
              className="group"
            >
              {/* Top border */}
              <div className="h-px bg-neutral-200 dark:bg-white/20 group-hover:bg-orange-400 dark:group-hover:bg-orange-600 transition-colors duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-4 lg:gap-8 py-8 sm:py-10">

                {/* Index number */}
                <div className="hidden lg:flex items-start pt-1">
                  <span className="text-4xl font-bold text-neutral-200 dark:text-neutral-800 leading-none select-none group-hover:text-orange-200 dark:group-hover:text-orange-900 transition-colors duration-300">
                    {exp.index}
                  </span>
                </div>

                {/* Main content */}
                <div className="space-y-4">
                  {/* Role + company + badge */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base mt-1">
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-white/20 text-neutral-700 dark:text-neutral-300 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta — duration + location */}
                <div className="flex lg:flex-col items-start lg:items-end gap-3 lg:gap-2 lg:pt-1 flex-wrap">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500">
                    <CalendarDays className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="whitespace-nowrap">{exp.duration} · {exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="whitespace-nowrap">{exp.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="h-px bg-neutral-200 dark:bg-white/20" />
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
