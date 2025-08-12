import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { ExternalLink, Github, ArrowRight, Star, Calendar, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description: "A full-stack application that uses advanced AI models to generate high-quality content for various use cases. Features real-time generation, user authentication, and cloud deployment.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&crop=smart",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    category: "AI/ML",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    status: "Live",
    year: "2024",
    stars: 127
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory management, secure payment processing, and responsive design.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=smart",
    tags: ["React", "Express", "Stripe", "PostgreSQL"],
    category: "Full Stack",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    status: "In Development",
    year: "2024",
    stars: 89
  },
  {
    id: 3,
    title: "VR Experience Builder",
    description: "Interactive VR application built with Unity for creating immersive educational experiences. Features spatial audio and haptic feedback.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop&crop=smart",
    tags: ["Unity", "C#", "VR", "Blender"],
    category: "XR Development",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    status: "Live",
    year: "2023",
    stars: 203
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing complex datasets with real-time updates and customizable visualizations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=smart",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    category: "Data Science",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    status: "Live",
    year: "2023",
    stars: 156
  },
  {
    id: 5,
    title: "Smart Home IoT System",
    description: "Complete IoT ecosystem for home automation with mobile app control, voice commands, and energy monitoring.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=smart",
    tags: ["React Native", "Node.js", "IoT", "AWS"],
    category: "IoT",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    status: "Live",
    year: "2023",
    stars: 74
  },
  {
    id: 6,
    title: "Machine Learning Pipeline",
    description: "End-to-end ML pipeline for predictive analytics with automated model training, validation, and deployment.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=smart",
    tags: ["Python", "TensorFlow", "Docker", "Kubernetes"],
    category: "AI/ML",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    status: "Live",
    year: "2024",
    stars: 312
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
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight"
            variants={staggerItem}
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto"
            variants={staggerItem}
          >
            Crafting digital experiences that solve real problems and push the boundaries of what's possible
          </motion.p>
        </motion.div>

        {/* Featured Projects - Hero Layout */}
        <motion.div
          className="mb-20"
          variants={staggerContainer}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative mb-16 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex gap-12 items-center`}
              variants={staggerItem}
            >
              {/* Project Image */}
              <motion.div
                className="lg:w-1/2 relative"
                whileHover={{
                  rotateX: 2,
                  rotateY: 2,
                  scale: 1.01
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-300"
                    skeletonClassName="rounded-2xl"
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
                className="lg:w-1/2 space-y-6"
                variants={staggerItem}
              >
                <div className="space-y-4">
                  <Badge variant="outline" className="text-gray-700 border-gray-300">
                    {project.category}
                  </Badge>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
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
                <div className="flex gap-4 pt-4">
                  <EnhancedButton
                    className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                    <ExternalLink className="w-4 h-4" />
                  </EnhancedButton>
                  <EnhancedButton
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50"
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

        {/* Other Projects - Card Grid */}
        <motion.div variants={staggerContainer}>
          <motion.div
            className="text-center mb-12"
            variants={staggerItem}
          >
            <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-wide">
              More Projects
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Additional work showcasing diverse technical skills
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-gray-50 hover:bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -8 }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="text-gray-700 border-gray-300">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-gray-300 text-gray-600 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="bg-gray-50 text-gray-400 text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs border-gray-300 text-gray-600"
                  >
                    {project.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gray-900 rounded-lg p-12 text-white"
          variants={staggerItem}
        >
          <h3 className="text-2xl font-black mb-4 uppercase tracking-wide">
            Want to see more of my work?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore my complete portfolio with detailed case studies, technical deep-dives, and behind-the-scenes insights.
          </p>
          <EnhancedButton
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg"
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
