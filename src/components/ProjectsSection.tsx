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
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
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

        {/* Featured Projects - Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20"
          variants={staggerContainer}
        >
          {/* Large Project Card - Left */}
          <motion.div 
            className="lg:col-span-6 group"
            variants={staggerItem}
          >
            <Link to={`/projects/${featuredProjects[0]?.id}`}>
              <motion.div
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={featuredProjects[0]?.image} 
                    alt={featuredProjects[0]?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full">
                      {featuredProjects[0]?.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {featuredProjects[0]?.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {featuredProjects[0]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProjects[0]?.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Explore Project
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Medium Project Card - Top Right */}
            <motion.div 
              className="group"
              variants={staggerItem}
            >
              <Link to={`/projects/${featuredProjects[1]?.id}`}>
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={featuredProjects[1]?.image} 
                      alt={featuredProjects[1]?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full">
                        {featuredProjects[1]?.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {featuredProjects[1]?.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {featuredProjects[1]?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredProjects[1]?.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Explore Project
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Large Project Card - Bottom Right */}
            <motion.div 
              className="group"
              variants={staggerItem}
            >
              <Link to={`/projects/${featuredProjects[2]?.id}`}>
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={featuredProjects[2]?.image} 
                      alt={featuredProjects[2]?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full">
                        {featuredProjects[2]?.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {featuredProjects[2]?.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {featuredProjects[2]?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredProjects[2]?.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Explore Project
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* More Projects */}
        <motion.div variants={staggerContainer}>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
            variants={staggerItem}
          >
            More Projects
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="group"
              >
                <Link to={`/projects/${project.id}`}>
                  <motion.div
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
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

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          View Details
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
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