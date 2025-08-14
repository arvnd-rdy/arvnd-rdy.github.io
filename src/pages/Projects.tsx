
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Star } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProjects = [
    {
      id: 1,
      title: "Job Monitor Bot",
      description: "Automated job application tracker that monitors Walmart and Loblaw careers 24/7, sending instant Telegram notifications when new positions are posted. Built to solve the 'first come, first served' challenge in competitive job markets.",
      image: "/projects/jobmonitor1.png",
      tags: ["Python", "Selenium", "Web Scraping", "Telegram API", "Automation"],
      category: "Automation",
      status: "Live",
      year: "2024",
      stars: 45,
      featured: true,
      demoUrl: "/projects/job-monitor-bot",
      githubUrl: "https://github.com/arvnd-rdy/walmart_and_lowblow_jobmonitor"
    },
    {
      id: 2,
      title: "Interactive Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark/light themes, and modular component architecture. Showcases projects, skills, and professional experience with engaging user interactions.",
      image: "/projects/portfolio1.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "Frontend",
      status: "Live",
      year: "2024",
      stars: 8,
      featured: true,
      demoUrl: "/projects/portfolio-website",
      githubUrl: "https://github.com/arvnd-rdy/arvnd-rdy.github.io"
    },
    {
      id: 3,
      title: "Insight Advantage",
      description: "Professional consulting platform connecting organizations with skilled consultants. Features real-time messaging, AI-powered matching, payment integration, and comprehensive user management with microservices architecture.",
      image: "/projects/advatage_match.png",
      tags: ["React", "Node.js", "SQL Server", "Socket.IO", "Stripe"],
      category: "Full Stack",
      status: "Live",
      year: "2024",
      stars: 23,
      featured: true,
      demoUrl: "/projects/insight-advantage",
      githubUrl: "https://github.com/arvnd-rdy/Advantage_match"
    },
    {
      id: 4,
      title: "EcoArt Market",
      description: "Sustainable art marketplace built with Django where artists showcase and sell eco-friendly artwork. Features comprehensive authentication, order management, real-time notifications, and payment processing with sustainability ratings.",
      image: "/projects/ecoart1.png",
      tags: ["Django", "Python", "Bootstrap", "SQLite", "Gmail SMTP"],
      category: "Full Stack",
      status: "Live",
      year: "2024",
      stars: 18,
      featured: true,
      demoUrl: "/projects/ecoart-market",
      githubUrl: "https://github.com/arvnd-rdy/Eco-art"
    }
  ];

  const categories = ["All", "Automation", "Frontend", "Full Stack"];
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-white py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl px-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <motion.h1 
            className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={staggerItem}>ALL PROJECTS</motion.span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 leading-relaxed max-w-2xl"
            variants={staggerItem}
          >
            A comprehensive showcase of my work spanning multiple technologies and industries.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="container mx-auto max-w-7xl px-8 py-16"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Filter Categories */}
        <motion.section className="mb-12" variants={fadeInUp}>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category 
                    ? "bg-gray-900 text-white hover:bg-gray-800" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section variants={staggerContainer}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white hover:bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => {
                  if (project.demoUrl && !project.demoUrl.startsWith('http') && project.demoUrl !== "#") {
                    window.location.href = project.demoUrl;
                  }
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900 backdrop-blur-sm">
                      {project.status}
                    </Badge>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gray-900 text-white">
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.demoUrl && (
                      <Button 
                        size="sm" 
                        className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.demoUrl.startsWith('http')) {
                            window.open(project.demoUrl, '_blank');
                          } else {
                            window.location.href = project.demoUrl;
                          }
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button 
                        size="sm" 
                        className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white text-sm">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-gray-300 text-gray-700">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-gray-300 text-gray-600 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="text-center mt-20 bg-gray-900 rounded-lg p-12 text-white" variants={fadeInUp}>
          <h2 className="text-3xl font-black mb-6 uppercase tracking-wide">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Link to="/#contact">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
              Let's Talk
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Projects;
