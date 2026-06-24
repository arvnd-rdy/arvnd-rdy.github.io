import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { allProjects, projectCategories } from "@/data/projects";
import { SpotlightCard } from "@/components/projects/ProjectCards";

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter((project) => project.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <ScrollProgress />

      {/* Page header */}
      <div className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 bg-white dark:bg-black">
        <div className="absolute inset-0 brand-grid brand-grid-fade pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={staggerItem}
              className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3"
            >
              Projects
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight mb-5"
            >
              All Work
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              RAG systems, full-stack apps, automation tools, and experiments — built
              end-to-end with a focus on shipping real prototypes.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <main
        className="relative bg-orange-50/40 dark:bg-black transition-colors duration-300 pb-16 sm:pb-24"
        ref={ref}
      >
        <div className="absolute inset-0 brand-grid pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Category filters */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            {projectCategories.map((category) => {
              const active = selectedCategory === category;
              return (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant="outline"
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-none transition-all duration-300 ${
                    active
                      ? "bg-orange-600 hover:bg-orange-700 text-white border-orange-700"
                      : "border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white bg-transparent hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950"
                  }`}
                >
                  {category}
                </Button>
              );
            })}
          </motion.div>

          {/* Project list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="space-y-6 sm:space-y-8"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit={{ opacity: 0 }}
            >
              {filteredProjects.length === 0 ? (
                <motion.p
                  variants={staggerItem}
                  className="text-neutral-500 dark:text-neutral-400 text-center py-16"
                >
                  No projects in this category yet.
                </motion.p>
              ) : (
                filteredProjects.map((project, index) => (
                  <SpotlightCard
                    key={project.id}
                    project={project}
                    reversed={index % 2 === 1}
                  />
                ))
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            className="mt-16 sm:mt-20 pt-10 border-t border-neutral-200 dark:border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <div>
              <p className="text-neutral-950 dark:text-white font-bold text-xl sm:text-2xl tracking-tight">
                Interested in collaborating?
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] mt-2 max-w-md leading-relaxed">
                Open to full-time roles and projects where AI, retrieval, and solid
                engineering matter.
              </p>
            </div>
            <Link to="/#contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-sm font-bold rounded-none border border-orange-700 transition-all duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
