
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
      title: "AI-Powered Content Generator",
      description: "A full-stack application that uses advanced AI models to generate high-quality content for various use cases. Features real-time generation, user authentication, and cloud deployment.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=smart",
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      category: "AI/ML",
      status: "Live",
      year: "2024",
      stars: 127,
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with real-time inventory management, secure payment processing, and responsive design.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=smart",
      tags: ["React", "Express", "Stripe", "PostgreSQL"],
      category: "Full Stack",
      status: "In Development",
      year: "2024",
      stars: 89,
      featured: true
    },
    {
      id: 3,
      title: "VR Experience Builder",
      description: "Interactive VR application built with Unity for creating immersive educational experiences. Features spatial audio and haptic feedback.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop&crop=smart",
      tags: ["Unity", "C#", "VR", "Blender"],
      category: "XR Development",
      status: "Live",
      year: "2023",
      stars: 203,
      featured: true
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing complex datasets with real-time updates and customizable visualizations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=smart",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      category: "Data Science",
      status: "Live",
      year: "2023",
      stars: 156,
      featured: false
    },
    {
      id: 5,
      title: "Smart Home IoT System",
      description: "Complete IoT ecosystem for home automation with mobile app control, voice commands, and energy monitoring.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=smart",
      tags: ["React Native", "Node.js", "IoT", "AWS"],
      category: "IoT",
      status: "Live",
      year: "2023",
      stars: 74,
      featured: false
    },
    {
      id: 6,
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for predictive analytics with automated model training, validation, and deployment.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=smart",
      tags: ["Python", "TensorFlow", "Docker", "Kubernetes"],
      category: "AI/ML",
      status: "Live",
      year: "2024",
      stars: 312,
      featured: false
    }
  ];

  const categories = ["All", "AI/ML", "Full Stack", "XR Development", "Data Science", "IoT"];
  
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
                    <Button size="sm" className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white">
                      <Github className="h-4 w-4" />
                    </Button>
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
