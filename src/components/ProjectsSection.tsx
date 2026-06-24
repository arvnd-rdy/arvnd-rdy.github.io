import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { ArrowRight, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { allProjects } from "@/data/projects";
import { SpotlightCard, ProjectCard } from "@/components/projects/ProjectCards";

const getRandomProjects = (projects: typeof allProjects, count = 3) =>
  [...projects].sort(() => 0.5 - Math.random()).slice(0, count);

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [displayed, setDisplayed] = useState(() => getRandomProjects(allProjects, 3));

  const handleRandomize = useCallback(() => {
    setDisplayed(getRandomProjects(allProjects, 3));
  }, []);

  const [spotlight, ...rest] = displayed;

  return (
    <section
      id="projects"
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
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14"
          variants={fadeInUp}
        >
          <div>
            <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3">
              Projects
            </p>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight">
              Featured Work
            </h2>
          </div>

          <Button
            onClick={handleRandomize}
            variant="outline"
            className="border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-none bg-transparent transition-all duration-300 self-start sm:self-auto flex-shrink-0"
          >
            <Shuffle className="w-3.5 h-3.5 mr-2" />
            Shuffle
          </Button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={displayed.map((p) => p.id).join("-")}
            className="space-y-4 sm:space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            <SpotlightCard project={spotlight} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-neutral-200 dark:border-white/20"
          variants={fadeInUp}
        >
          <div>
            <p className="text-neutral-900 dark:text-white font-bold text-lg sm:text-xl tracking-tight">
              Want to see everything?
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
              Full case studies, technical deep-dives, and more projects.
            </p>
          </div>
          <a href="/projects">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-sm font-bold rounded-none border border-orange-700 transition-all duration-300 flex-shrink-0">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
