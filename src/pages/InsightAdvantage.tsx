import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Star, Calendar, Code2, Users, MessageSquare, Shield, CreditCard, Zap, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const InsightAdvantage = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Smart Matching System",
      description: "AI-powered consultant-organization matching with profile verification and approval workflows"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Real-time Messaging",
      description: "Socket.IO powered instant messaging with file sharing, read receipts, and typing indicators"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Integration",
      description: "Stripe-powered subscription plans, contract management, and professional time tracking"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "JWT authentication, role-based access control, and comprehensive input validation"
    }
  ];

  const techStack = [
    "React 18", "TypeScript", "Node.js", "Express.js", "SQL Server", 
    "Sequelize ORM", "Socket.IO", "Stripe API", "JWT Authentication", 
    "Tailwind CSS", "shadcn/ui", "React Query", "Vite", "Microservices"
  ];

  const architecture = [
    {
      title: "Frontend (React + TypeScript)",
      technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Query", "Socket.IO Client"],
      description: "Modern, responsive interface with real-time capabilities"
    },
    {
      title: "Backend (Node.js + Express)",
      technologies: ["Node.js", "Express.js", "SQL Server", "Sequelize ORM", "JWT", "Stripe", "Multer"],
      description: "Robust API with authentication, payments, and file handling"
    },
    {
      title: "Messaging Service (Microservice)",
      technologies: ["Socket.IO", "SQL Server", "JWT", "RESTful API"],
      description: "Dedicated real-time messaging with persistent storage"
    }
  ];

  const keyFeatures = [
    {
      category: "Connection & Networking",
      features: [
        "Smart Matching System with AI-powered recommendations",
        "Professional connection requests with approval workflow",
        "Multi-level profile verification system",
        "Real-time notifications for connections and messages"
      ]
    },
    {
      category: "Advanced Messaging",
      features: [
        "Real-time chat with Socket.IO integration",
        "Organized conversation threads with search",
        "Message delivery and read status tracking",
        "File sharing with document and media support"
      ]
    },
    {
      category: "User Management",
      features: [
        "Multi-role system (Consultants, Organizations, Admins)",
        "Comprehensive consultant portfolios with skills and experience",
        "Step-by-step onboarding flow",
        "License and credential verification system"
      ]
    },
    {
      category: "Business Features",
      features: [
        "Tiered subscription plans for organizations",
        "Stripe payment processing integration",
        "Digital contract creation and management",
        "Professional time tracking and milestone management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          {/* Back Button */}
          <motion.div variants={staggerItem} className="mb-8">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div variants={staggerItem} className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-gray-700 border-gray-300">
                  Full Stack • Enterprise • Microservices
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Insight Advantage
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional consulting platform connecting organizations with skilled consultants. 
                  Features real-time messaging, AI-powered matching, and comprehensive business management tools.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <EnhancedButton
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                  href="https://github.com/arvnd-rdy/Advantage_match"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50"
                  href="#architecture"
                >
                  <Code2 className="w-4 h-4" />
                  Architecture
                </EnhancedButton>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">User Roles</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">3</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">Real-time</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Chat</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-sm">Payments</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Stripe</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Database className="w-4 h-4" />
                    <span className="text-sm">Database</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">SQL Server</div>
                </div>
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div variants={staggerItem}>
              <div className="relative">
                <ImageWithSkeleton
                  src="/projects/advatage_match.png"
                  alt="Insight Advantage Platform Interface"
                  className="w-full rounded-2xl shadow-2xl"
                  skeletonClassName="rounded-2xl aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Platform Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive consulting platform with enterprise-grade features and modern architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Architecture */}
      <motion.section 
        id="architecture"
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">System Architecture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Microservices architecture with modern full-stack technologies for scalability and performance.
            </p>
          </motion.div>

          <div className="space-y-8">
            {architecture.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                <div className="grid lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-gray-300 text-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Overview */}
          <motion.div variants={staggerItem} className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Complete Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="justify-center py-2 border-gray-300 text-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Detailed Features */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Feature Deep Dive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive feature set designed for professional consulting workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((section, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8 text-center">
          <motion.div variants={staggerItem} className="space-y-8">
            <h2 className="text-4xl font-black mb-4">Enterprise-Grade Solution</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A comprehensive consulting platform showcasing full-stack development, 
              microservices architecture, and modern business application design.
            </p>
            
            <div className="flex gap-4 justify-center">
              <EnhancedButton
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
                href="https://github.com/arvnd-rdy/Advantage_match"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Explore Code
              </EnhancedButton>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default InsightAdvantage;