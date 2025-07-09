import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { ExternalLink, Github, ArrowRight, Calendar, Users, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description: "A sophisticated full-stack application leveraging advanced AI models to generate high-quality content for various use cases, featuring real-time generation capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=smart",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    category: "AI/ML",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: { duration: "3 months", team: "4 people", lines: "12K+" }
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory management, secure payment processing, and responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=smart",
    tags: ["React", "Express", "Stripe", "PostgreSQL"],
    category: "Full Stack",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: { duration: "4 months", team: "3 people", lines: "8K+" }
  },
  {
    id: 3,
    title: "VR Experience Builder",
    description: "Interactive VR application built with Unity for creating immersive educational experiences with spatial audio and haptic feedback.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop&crop=smart",
    tags: ["Unity", "C#", "VR", "Blender"],
    category: "XR Development",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: { duration: "6 months", team: "5 people", lines: "15K+" }
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing complex datasets with real-time updates and customizable visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=smart",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    category: "Data Science",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: { duration: "2 months", team: "2 people", lines: "6K+" }
  },
  {
    id: 5,
    title: "Smart Home IoT System",
    description: "Complete IoT ecosystem for home automation with mobile app control, voice commands, and energy monitoring.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=smart",
    tags: ["React Native", "Node.js", "IoT", "AWS"],
    category: "IoT",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: { duration: "5 months", team: "4 people", lines: "10K+" }
  },
  {
    id: 6,
    title: "Machine Learning Pipeline",
    description: "End-to-end ML pipeline for predictive analytics with automated model training, validation, and deployment.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=smart",
    tags: ["Python", "TensorFlow", "Docker", "Kubernetes"],
    category: "AI/ML",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: { duration: "4 months", team: "3 people", lines: "9K+" }
  }
];

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        className="container mx-auto max-w-7xl px-4 md:px-8"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-gray-900 text-white text-xs md:text-sm font-medium rounded-full mb-6"
            variants={staggerItem}
          >
            PORTFOLIO
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
            variants={staggerItem}
          >
            FEATURED
            <br />
            <span className="text-gray-400">PROJECTS</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            A curated selection of projects that showcase my technical expertise, 
            creative problem-solving, and passion for building exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div 
          className="mb-20 md:mb-24"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[350px]">
            {featuredProjects.map((project, index) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <motion.div
                  className={`group relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100/50 backdrop-blur-sm ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' : index === 1 ? 'lg:row-span-2' : ''
                  }`}
                  variants={staggerItem}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-pink-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-2/3">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Dynamic Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating Action Buttons */}
                    <motion.div 
                      className="absolute top-4 right-4 flex gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <motion.button 
                        className="w-10 h-10 bg-white/90 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </motion.button>
                      <motion.button 
                        className="w-10 h-10 bg-white/90 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4 text-gray-700" />
                      </motion.button>
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-md text-gray-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Project Stats - Animated */}
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex gap-4 text-white text-xs font-medium">
                        <motion.div 
                          className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-3 h-3" />
                          <span>{project.stats.duration}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Users className="w-3 h-3" />
                          <span>{project.stats.team}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Code2 className="w-3 h-3" />
                          <span>{project.stats.lines}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 h-1/3 flex flex-col justify-between">
                    <div>
                      <motion.h3 
                        className="font-bold text-gray-900 mb-2 text-lg leading-tight group-hover:text-gray-700 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>
                    
                    {/* Tags */}
                    <motion.div 
                      className="flex flex-wrap gap-1 mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + tagIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-gray-400 text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </motion.div>
                    
                    {/* Learn More Link */}
                    <motion.div 
                      className="flex items-center justify-between"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Explore Project
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Subtle Border Animation */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent"
                    whileHover={{
                      borderColor: "rgba(59, 130, 246, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div variants={staggerContainer}>
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12"
            variants={staggerItem}
          >
            More Projects
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
          >
            {otherProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <motion.div
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
                  variants={staggerItem}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
                      <Github className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.stats.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code2 className="w-3 h-3" />
                      <span>{project.stats.lines}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          variants={staggerItem}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline"
              className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full transition-all duration-500 font-medium shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/projects'}
            >
              VIEW ALL PROJECTS →
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
