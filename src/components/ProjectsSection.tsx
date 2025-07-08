import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description: "A full-stack application that uses advanced AI models to generate high-quality content for various use cases. Features real-time generation, user authentication, and cloud deployment.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=smart",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    category: "AI/ML",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
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
    featured: false
  },
  {
    id: 3,
    title: "VR Experience Builder",
    description: "Interactive VR application built with Unity for creating immersive educational experiences. Features spatial audio and haptic feedback.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop&crop=smart",
    tags: ["Unity", "C#", "VR", "Blender"],
    category: "XR Development",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
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
    featured: false
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
    featured: false
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
    featured: true
  }
];

const ProjectsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <motion.div
        className="container mx-auto max-w-7xl px-8"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            variants={staggerItem}
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            A collection of projects that showcase my technical expertise and passion for innovation
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <motion.div
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
                variants={staggerItem}
                whileHover={{ y: -8 }}
              >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index === 0 ? 'h-64 lg:h-80' : 'h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a href={project.demoUrl} className="text-gray-900 hover:text-gray-600 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.githubUrl} className="text-gray-900 hover:text-gray-600 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div variants={staggerContainer}>
          <motion.h3 
            className="text-3xl font-bold text-gray-900 mb-8"
            variants={staggerItem}
          >
            Other Notable Projects
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
          >
            {otherProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <motion.div
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a href={project.demoUrl} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.githubUrl} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
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
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center"
          variants={staggerItem}
        >
          <Button 
            variant="outline"
            className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
            onClick={() => window.location.href = '/projects'}
          >
            VIEW ALL PROJECTS →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
