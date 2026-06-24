import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerItem } from "@/utils/animations";
import type { Project } from "@/data/projects";

type SpotlightCardProps = {
  project: Project;
  reversed?: boolean;
};

export const SpotlightCard = ({ project, reversed = false }: SpotlightCardProps) => (
  <motion.article
    layout
    className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/20 bg-neutral-50 dark:bg-black hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300"
    variants={staggerItem}
  >
    <div className={`relative overflow-hidden ${reversed ? "lg:order-2" : "lg:order-1"}`}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-orange-600 z-10" />
      <div
        className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(234,88,12,0.35) 0%, transparent 70%)",
        }}
      />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 sm:h-72 lg:h-full min-h-[220px] object-cover"
      />
    </div>

    <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 space-y-4 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
      <div className="space-y-1">
        <p className="text-orange-600 dark:text-orange-500 text-xs font-semibold tracking-tight uppercase">
          {project.category} · {project.year}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white leading-tight tracking-tight">
          {project.title}
        </h3>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-black border border-neutral-200 dark:border-white/20 text-neutral-700 dark:text-neutral-300 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 pt-1">
        <a
          href={project.demoUrl}
          target={project.demoUrl.startsWith("http") ? "_blank" : "_self"}
          rel={project.demoUrl.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 text-xs sm:text-sm font-bold rounded-none border border-orange-700 transition-all duration-300">
            View Details
            <ExternalLink className="w-3.5 h-3.5 ml-2" />
          </Button>
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-none bg-transparent transition-all duration-300"
          >
            <Github className="w-3.5 h-3.5 mr-2" />
            Code
          </Button>
        </a>
      </div>
    </div>
  </motion.article>
);

export const ProjectCard = ({ project }: { project: Project }) => (
  <motion.article
    layout
    className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/20 bg-neutral-50 dark:bg-black hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 h-full"
    variants={staggerItem}
  >
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-orange-600 z-10" />
      <div
        className="absolute -inset-4 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(234,88,12,0.35) 0%, transparent 70%)",
        }}
      />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 sm:h-48 object-cover"
      />
    </div>

    <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-3">
      <div className="space-y-1">
        <p className="text-orange-600 dark:text-orange-500 text-xs font-semibold tracking-tight uppercase">
          {project.category} · {project.year}
        </p>
        <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white leading-tight tracking-tight">
          {project.title}
        </h3>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-medium bg-white dark:bg-black border border-neutral-200 dark:border-white/20 text-neutral-700 dark:text-neutral-300 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 pt-1">
        <a
          href={project.demoUrl}
          target={project.demoUrl.startsWith("http") ? "_blank" : "_self"}
          rel={project.demoUrl.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex-1"
        >
          <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold rounded-none border border-orange-700 transition-all duration-300">
            Details
            <ExternalLink className="w-3 h-3 ml-1.5" />
          </Button>
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 text-xs font-bold rounded-none bg-transparent transition-all duration-300 px-3"
          >
            <Github className="w-3.5 h-3.5" />
          </Button>
        </a>
      </div>
    </div>
  </motion.article>
);
