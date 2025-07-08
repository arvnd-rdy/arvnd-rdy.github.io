import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

// Mock project data - in a real app, this would come from an API or database
const projectsData = {
  1: {
    id: 1,
    title: "AI-POWERED ANALYTICS DASHBOARD",
    description: "Real-time data visualization platform with machine learning insights and predictive analytics for enterprise clients.",
    longDescription: "This comprehensive analytics platform leverages cutting-edge machine learning algorithms to provide real-time insights for enterprise clients. The dashboard features advanced data visualization, predictive analytics, and automated reporting capabilities that help businesses make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    category: "Data Science",
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    timeline: "6 months",
    team: "4 developers",
    role: "Lead Developer",
    challenges: [
      "Processing large datasets in real-time",
      "Creating intuitive data visualizations",
      "Implementing complex ML models"
    ],
    features: [
      "Real-time data processing",
      "Interactive dashboards",
      "Predictive analytics",
      "Automated reporting",
      "Multi-tenant architecture"
    ],
    technologies: {
      "Frontend": ["React", "TypeScript", "D3.js", "Tailwind CSS"],
      "Backend": ["Python", "FastAPI", "PostgreSQL", "Redis"],
      "ML/AI": ["TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
      "Infrastructure": ["Docker", "AWS", "Kubernetes", "GitHub Actions"]
    }
  },
  2: {
    id: 2,
    title: "SMART E-COMMERCE PLATFORM",
    description: "Full-stack application with AI-driven product recommendations and dynamic pricing optimization.",
    longDescription: "A modern e-commerce platform that uses artificial intelligence to provide personalized shopping experiences. The platform includes smart product recommendations, dynamic pricing, inventory management, and seamless payment processing.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "E-Commerce",
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    timeline: "8 months",
    team: "6 developers",
    role: "Full-Stack Developer",
    challenges: [
      "Scaling to handle high traffic",
      "Implementing secure payment processing",
      "Building recommendation algorithms"
    ],
    features: [
      "AI-powered recommendations",
      "Dynamic pricing",
      "Inventory management",
      "Secure payments",
      "Admin dashboard"
    ],
    technologies: {
      "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      "Backend": ["Node.js", "Express", "PostgreSQL", "Redis"],
      "Payments": ["Stripe", "PayPal", "Apple Pay", "Google Pay"],
      "Infrastructure": ["Vercel", "AWS", "Docker", "GitHub Actions"]
    }
  },
  3: {
    id: 3,
    title: "NEURAL NETWORK OPTIMIZER",
    description: "Advanced ML toolkit for optimizing neural network architectures and hyperparameters at scale.",
    longDescription: "A sophisticated machine learning toolkit designed to automatically optimize neural network architectures and hyperparameters. The system uses advanced techniques like neural architecture search and Bayesian optimization to find optimal model configurations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["PyTorch", "FastAPI", "Docker", "AWS"],
    category: "Machine Learning",
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    timeline: "10 months",
    team: "3 ML Engineers",
    role: "ML Research Lead",
    challenges: [
      "Implementing efficient neural architecture search",
      "Scaling training across multiple GPUs",
      "Creating intuitive optimization interfaces"
    ],
    features: [
      "Automated hyperparameter tuning",
      "Neural architecture search",
      "Distributed training",
      "Model versioning",
      "Performance monitoring"
    ],
    technologies: {
      "ML/AI": ["PyTorch", "TensorBoard", "Optuna", "Ray Tune"],
      "Backend": ["FastAPI", "Python", "PostgreSQL", "Redis"],
      "Infrastructure": ["Docker", "Kubernetes", "AWS", "NVIDIA GPUs"],
      "Monitoring": ["MLflow", "Weights & Biases", "Prometheus"]
    }
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[parseInt(id || "1") as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/projects")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header 
        className="bg-foreground text-background py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl px-8">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-muted hover:text-background mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={staggerItem} className="mb-4">
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={staggerItem}
              className="text-4xl md:text-6xl font-black leading-tight mb-6"
            >
              {project.title}
            </motion.h1>
            
            <motion.p 
              variants={staggerItem}
              className="text-muted text-xl max-w-3xl leading-relaxed mb-8"
            >
              {project.longDescription}
            </motion.p>

            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </Button>
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                <Github className="mr-2 h-5 w-5" />
                View Code
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Image */}
      <motion.section 
        className="relative"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-7xl px-8 -mt-10">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <motion.main 
        className="container mx-auto max-w-7xl px-8 py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Project Info Cards */}
        <motion.section variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Timeline</h3>
              <p className="text-muted-foreground">{project.timeline}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Team Size</h3>
              <p className="text-muted-foreground">{project.team}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">My Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </CardContent>
          </Card>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Features */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">Challenges Overcome</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    className="p-4 rounded-lg border border-border bg-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="leading-relaxed">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Technologies */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
              <div className="space-y-6">
                {Object.entries(project.technologies).map(([category, techs]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold mb-3 text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Tags */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-6">Project Tags</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="px-4 py-2 text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.section>
          </div>
        </div>

        {/* Call to Action */}
        <motion.section 
          variants={fadeInUp}
          className="text-center mt-20 p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
        >
          <h2 className="text-3xl font-bold mb-4">Interested in Similar Work?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects that push the boundaries of technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Live Project
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-5 w-5" />
              View Source Code
            </Button>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default ProjectDetails;