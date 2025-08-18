import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { ExternalLink, Github, ArrowRight, Star, Calendar, Code2, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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
const getRandomProjects = (projects, count = 3) => {
  const shuffled = [...projects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  // Initialize with first 3 projects, then allow randomization
  const [displayedProjects, setDisplayedProjects] = useState(() =>
    getRandomProjects(allProjects, 3)
  );

  const handleRandomize = () => {
    setDisplayedProjects(getRandomProjects(allProjects, 3));
  };

  const featuredProjects = displayedProjects;

  return (
    <section id="projects" className="py-20 bg-white">
      <motion.div
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-tight px-4"
            variants={staggerItem}
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8 px-4 text-sm sm:text-base"
            variants={staggerItem}
          >
            Crafting digital experiences that solve real problems and push the boundaries of what's possible
          </motion.p>
          <motion.div variants={staggerItem} className="px-4">
            <Button
              onClick={handleRandomize}
              variant="outline"
              className="border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 group w-full sm:w-auto"
            >
              <Shuffle className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Randomize Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Featured Projects - Hero Layout */}
        <motion.div
          className="mb-20"
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative mb-12 md:mb-16 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex gap-8 md:gap-12 items-center px-4`}
              variants={staggerItem}
            >
              {/* Project Image */}
              <motion.div
                className="w-full lg:w-1/2 relative"
                whileHover={{
                  rotateX: 2,
                  rotateY: 2,
                  scale: 1.01
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300"
                    skeletonClassName="rounded-xl md:rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating Status Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-gray-900 border-0 shadow-lg backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      className="bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 shadow-lg border-0"
                      asChild
                    >
                      <a href={project.demoUrl}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 shadow-lg border-0"
                      asChild
                    >
                      <a href={project.githubUrl}>
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div
                className="w-full lg:w-1/2 space-y-4 md:space-y-6 mt-6 lg:mt-0"
                variants={staggerItem}
              >
                <div className="space-y-3 md:space-y-4">
                  <Badge variant="outline" className="text-gray-700 border-gray-300 text-xs sm:text-sm">
                    {project.category}
                  </Badge>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-gray-300 text-gray-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <EnhancedButton
                    className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg w-full sm:w-auto justify-center"
                    href={project.demoUrl}
                    target={project.demoUrl.startsWith('http') ? "_blank" : "_self"}
                    rel={project.demoUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    {project.demoUrl.startsWith('http') ? 'View Live' : 'View Details'}
                    <ExternalLink className="w-4 h-4" />
                  </EnhancedButton>
                  <EnhancedButton
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 w-full sm:w-auto justify-center"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                    <Github className="w-4 h-4" />
                  </EnhancedButton>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>



        {/* CTA Section */}
        <motion.div
          className="text-center bg-gray-900 rounded-lg p-6 md:p-12 text-white mx-4"
          variants={staggerItem}
        >
          <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase tracking-wide">
            Want to see more of my work?
          </h3>
          <p className="text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Explore my complete portfolio with detailed case studies, technical deep-dives, and behind-the-scenes insights.
          </p>
          <EnhancedButton
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-6 md:px-8 py-3 rounded-full font-medium shadow-lg w-full sm:w-auto"
            onClick={() => window.location.href = '/projects'}
          >
            View Complete Portfolio
            <ArrowRight className="w-5 h-5 ml-2" />
          </EnhancedButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
