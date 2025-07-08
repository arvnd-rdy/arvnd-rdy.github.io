
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { ref, isInView } = useScrollAnimation();

  const allProjects = [
    {
      id: 1,
      title: "AI-POWERED ANALYTICS DASHBOARD",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics for enterprise clients.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      category: "Data Science",
      featured: true
    },
    {
      id: 2,
      title: "SMART E-COMMERCE PLATFORM",
      description: "Full-stack application with AI-driven product recommendations and dynamic pricing optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      category: "E-Commerce",
      featured: true
    },
    {
      id: 3,
      title: "NEURAL NETWORK OPTIMIZER",
      description: "Advanced ML toolkit for optimizing neural network architectures and hyperparameters at scale.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["PyTorch", "FastAPI", "Docker", "AWS"],
      category: "Machine Learning",
      featured: true
    },
    {
      id: 4,
      title: "BLOCKCHAIN WALLET",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration for seamless trading.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web3", "Solidity", "React", "Ethereum"],
      category: "Blockchain",
      featured: false
    },
    {
      id: 5,
      title: "MOBILE HEALTH TRACKER",
      description: "Cross-platform health monitoring app with real-time vitals tracking and AI-powered health insights.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Firebase", "TensorFlow", "HealthKit"],
      category: "Healthcare",
      featured: false
    },
    {
      id: 6,
      title: "REAL-TIME CHAT APPLICATION",
      description: "Scalable messaging platform with end-to-end encryption and multimedia support.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Socket.io", "Node.js", "MongoDB", "WebRTC"],
      category: "Communication",
      featured: false
    }
  ];

  const categories = ["All", "Data Science", "E-Commerce", "Machine Learning", "Blockchain", "Healthcare", "Communication"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className="bg-black text-white py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl px-8">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <motion.h1 
            className="text-6xl md:text-8xl font-black leading-tight"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={staggerItem} className="block">ALL</motion.span>
            <motion.span variants={staggerItem} className="block text-gray-400">PROJECTS</motion.span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-xl mt-8 max-w-2xl"
            variants={staggerItem}
          >
            A comprehensive showcase of my work spanning multiple technologies and industries.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="container mx-auto max-w-7xl px-8 py-20"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Filter Categories */}
        <motion.section className="mb-16" variants={fadeInUp}>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button 
                key={category}
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2 rounded-full transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section variants={staggerContainer}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/projects/${project.id}`}>
                  <Card className="bg-white border-gray-200 overflow-hidden group cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-wide">
                            FEATURED
                          </span>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-800 px-3 py-1 text-xs rounded-full uppercase tracking-wide hover:bg-gray-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="text-center mt-20" variants={fadeInUp}>
          <h2 className="text-4xl font-black text-gray-900 mb-8">INTERESTED IN COLLABORATING?</h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Link to="/#contact">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 rounded-full text-lg font-bold uppercase tracking-wide">
              LET'S TALK →
            </Button>
          </Link>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default Projects;
