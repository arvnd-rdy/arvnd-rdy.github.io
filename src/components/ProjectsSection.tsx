import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { ExternalLink, Github, ArrowRight, Star, Calendar, Code2, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useMemo, useCallback } from "react";
import { TechMascot } from "@/components/TechMascot";

const allProjects = [
  {
    id: 1,
    title: "Job Monitor Bot",
    description: "Automated job application tracker that monitors Walmart and Loblaw careers 24/7, sending instant Telegram notifications when new positions are posted. Built to solve the 'first come, first served' challenge in competitive job markets.",
    image: "/projects/jobmonitor1.png",
    tags: ["Python", "Selenium", "Web Scraping", "Telegram API", "Automation"],
    category: "Automation",
    demoUrl: "/projects/job-monitor-bot",
    githubUrl: "https://github.com/arvnd-rdy/walmart_and_lowblow_jobmonitor",
    featured: true,
    status: "Live",
    year: "2024",
    stars: 45
  },
  {
    id: 2,
    title: "Interactive Portfolio Website",
    description: "Modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark/light themes, and modular component architecture. Showcases projects, skills, and professional experience with engaging user interactions.",
    image: "/projects/portfolio1.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    category: "Frontend",
    demoUrl: "/projects/portfolio-website",
    githubUrl: "https://github.com/arvnd-rdy/arvnd-rdy.github.io",
    featured: true,
    status: "Live",
    year: "2024",
    stars: 8
  },
  {
    id: 3,
    title: "Insight Advantage",
    description: "Professional consulting platform connecting organizations with skilled consultants. Features real-time messaging, AI-powered matching, payment integration, and comprehensive user management with microservices architecture.",
    image: "/projects/advatage_match.png",
    tags: ["React", "Node.js", "SQL Server", "Socket.IO", "Stripe"],
    category: "Full Stack",
    demoUrl: "/projects/insight-advantage",
    githubUrl: "https://github.com/arvnd-rdy/Advantage_match",
    featured: true,
    status: "Live",
    year: "2024",
    stars: 23
  },
  {
    id: 4,
    title: "EcoArt Market",
    description: "Sustainable art marketplace built with Django where artists showcase and sell eco-friendly artwork. Features comprehensive authentication, order management, real-time notifications, and payment processing with sustainability ratings.",
    image: "/projects/ecoart1.png",
    tags: ["Django", "Python", "Bootstrap", "SQLite", "Gmail SMTP"],
    category: "Full Stack",
    demoUrl: "/projects/ecoart-market",
    githubUrl: "https://github.com/arvnd-rdy/Eco-art",
    featured: true,
    status: "Live",
    year: "2024",
    stars: 18
  }
];

// Function to get 3 random projects
const getRandomProjects = (projects: typeof allProjects, count = 3) => {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  // Initialize with first 3 projects, then allow randomization
  const [displayedProjects, setDisplayedProjects] = useState(() =>
    getRandomProjects(allProjects, 3)
  );

  const handleRandomize = useCallback(() => {
    setDisplayedProjects(getRandomProjects(allProjects, 3));
  }, []);

  // Memoize featured projects to prevent unnecessary recalculations
  const featuredProjects = useMemo(() => displayedProjects, [displayedProjects]);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-900 relative transition-colors duration-300">
      {/* Grid background with fade effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" 
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)'
        }}
      />
      
      <motion.div
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
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
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 leading-none tracking-tighter uppercase px-4"
            variants={staggerItem}
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4 text-sm sm:text-base"
            variants={staggerItem}
          >
            Crafting digital experiences that solve real problems and push the boundaries of what's possible
          </motion.p>
          <motion.div variants={staggerItem} className="px-4">
            <Button
              onClick={handleRandomize}
              variant="outline"
              className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300 group w-full sm:w-auto bg-transparent text-xs sm:text-sm font-bold uppercase tracking-wider"
            >
              <Shuffle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Randomize Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Featured Projects - Modern Brutalist Layout */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative mb-8 sm:mb-12 md:mb-16 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex gap-6 sm:gap-8 lg:gap-12 items-center px-2 sm:px-4`}
              variants={staggerItem}
            >
              {/* Project Image - Sharp edges with thin border */}
              <motion.div
                className="w-full lg:w-1/2 relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden border-2 border-gray-900 dark:border-white bg-white dark:bg-gray-900 transition-all duration-300 group-hover:border-gray-700 dark:group-hover:border-gray-300">
                  {/* Thin colored accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 dark:bg-blue-600 z-10"></div>
                  
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 object-cover transition-opacity duration-300 group-hover:opacity-90"
                    skeletonClassName=""
                  />

                  {/* Minimal Status Badge */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <Badge
                      variant="secondary"
                      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-900 dark:border-white text-[10px] xs:text-xs font-bold uppercase tracking-wider"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Action Buttons - Minimal */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button
                      size="sm"
                      className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-900 dark:border-white h-8 w-8 p-0"
                      asChild
                    >
                      <a href={project.demoUrl}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-900 dark:border-white h-8 w-8 p-0"
                      asChild
                    >
                      <a href={project.githubUrl}>
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Stats - Minimal */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 text-gray-900 dark:text-white">
                    <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 border border-gray-900 dark:border-white">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs font-bold">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 border border-gray-900 dark:border-white">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs font-bold">{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                className="w-full lg:w-1/2 space-y-4 sm:space-y-5 mt-4 sm:mt-6 lg:mt-0"
                variants={staggerItem}
              >
                <div className="space-y-3 sm:space-y-4">
                  <Badge variant="outline" className="text-gray-700 dark:text-gray-300 border-2 border-gray-900 dark:border-white text-[10px] xs:text-xs font-bold uppercase tracking-wider bg-transparent">
                    {project.category}
                  </Badge>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-none tracking-tight uppercase">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-[10px] xs:text-xs bg-transparent"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA Buttons - Modern Brutalist */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <a
                    href={project.demoUrl}
                    target={project.demoUrl.startsWith('http') ? "_blank" : "_self"}
                    rel={project.demoUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="relative bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 font-bold uppercase text-xs tracking-wider transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] border-2 border-gray-900 dark:border-white w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
                    style={{
                      boxShadow: '2px 2px 0px 0px currentColor'
                    }}
                  >
                    {project.demoUrl.startsWith('http') ? 'View Live' : 'View Details'}
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-5 py-3 font-bold uppercase text-xs tracking-wider transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] border-2 border-gray-900 dark:border-white w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
                    style={{
                      boxShadow: '2px 2px 0px 0px currentColor'
                    }}
                  >
                    Source Code
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>



        {/* CTA Section - Modern Brutalist */}
        <motion.div
          className="text-center bg-gray-900 dark:bg-gray-800 border-2 border-gray-900 dark:border-white p-6 sm:p-8 md:p-10 lg:p-12 text-white mx-2 sm:mx-4 transition-all duration-300 relative"
          variants={staggerItem}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 uppercase tracking-wide">
            Want to see more of my work?
          </h3>
          <p className="text-gray-300 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2">
            Explore my complete portfolio with detailed case studies, technical deep-dives, and behind-the-scenes insights.
          </p>
          <button
            onClick={() => window.location.href = '/projects'}
            className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase text-sm tracking-wider transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] border-2 border-white dark:border-gray-900 inline-flex items-center justify-center gap-2"
            style={{
              boxShadow: '2px 2px 0px 0px currentColor'
            }}
          >
            View Complete Portfolio
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          {/* Victory Octopus */}
          <motion.div
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden sm:block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TechMascot variant="success" size={70} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
