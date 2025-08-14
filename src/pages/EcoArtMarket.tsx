import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Star, Calendar, Code2, ShoppingCart, Users, Shield, Bell, Palette, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const EcoArtMarket = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Authentication",
      description: "Complete authentication system with email verification, password reset via Gmail SMTP, and secure session management"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Platform",
      description: "Full shopping cart, checkout process, order management, and multiple payment methods with tax calculation"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-time Notifications",
      description: "Comprehensive notification system for orders, reviews, cart actions, and system messages with read/unread status"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability Focus",
      description: "Eco-friendly artwork tracking with sustainability ratings, materials information, and environmental impact awareness"
    }
  ];

  const techStack = [
    "Django 4.x", "Python", "Bootstrap 5", "SQLite", "Gmail SMTP", 
    "Django Templates", "Class-based Views", "Django Admin", "Django Forms", 
    "Custom Authentication", "File Storage", "Session Management"
  ];

  const keyFeatures = [
    {
      category: "User Management",
      features: [
        "Custom authentication with enhanced security",
        "Email verification and password reset functionality", 
        "Extended user profiles with artist information",
        "Role-based features for buyers and sellers",
        "Profile picture upload and management"
      ]
    },
    {
      category: "Marketplace Features",
      features: [
        "Detailed artwork listings with comprehensive information",
        "Art categories and style classification system",
        "Sustainability ratings (1-5 scale) for eco-friendliness",
        "Advanced search and filter capabilities",
        "Artist statements and personal stories"
      ]
    },
    {
      category: "E-commerce System",
      features: [
        "Shopping cart with real-time total calculation",
        "Complete checkout process with shipping information",
        "Multiple payment methods (Credit Card, PayPal, Bank Transfer, COD)",
        "Order tracking and management system",
        "Automatic tax calculation and order confirmation"
      ]
    },
    {
      category: "Interactive Features",
      features: [
        "Rating and review system (1-5 stars)",
        "Direct messaging between buyers and artists",
        "Real-time notification center with badges",
        "User visit tracking and analytics",
        "Responsive Bootstrap 5 design"
      ]
    }
  ];

  const sampleData = [
    "14 Sample Users (artists, buyers, admin)",
    "50+ Eco-friendly artwork samples",
    "Realistic reviews and ratings",
    "Complete artist profiles with bios",
    "Pre-populated notifications for testing"
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
                  Django • E-commerce • Sustainability
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  EcoArt Market
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Sustainable art marketplace where artists showcase and sell eco-friendly artwork. 
                  Built with Django featuring comprehensive authentication, order management, and sustainability tracking.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <EnhancedButton
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                  href="https://github.com/arvnd-rdy/Eco-art"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50"
                  href="#features"
                >
                  <Code2 className="w-4 h-4" />
                  Features
                </EnhancedButton>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Sample Users</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">14</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Palette className="w-4 h-4" />
                    <span className="text-sm">Artworks</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-sm">E-commerce</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Full</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Leaf className="w-4 h-4" />
                    <span className="text-sm">Eco-Focus</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                </div>
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div variants={staggerItem}>
              <div className="relative">
                <ImageWithSkeleton
                  src="/projects/ecoart1.png"
                  alt="EcoArt Market Platform Interface"
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
        id="features"
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
              Comprehensive e-commerce platform built with Django, focusing on sustainable art and eco-friendly practices.
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

      {/* Technical Implementation */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Technical Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with Django and modern web technologies for a robust, scalable e-commerce platform.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tech Stack */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-3">
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

              {/* Additional Images */}
              <div className="space-y-4 mt-8">
                <ImageWithSkeleton
                  src="/projects/ecoart2.png"
                  alt="EcoArt Market Product Listings"
                  className="w-full rounded-lg shadow-lg"
                  skeletonClassName="rounded-lg aspect-video"
                />
              </div>
            </motion.div>

            {/* Sample Data */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Sample Data & Fixtures</h3>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 mb-4">
                  Comprehensive fixtures for easy setup and consistent demos:
                </p>
                <ul className="space-y-2">
                  {sampleData.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <code className="text-sm text-gray-700">
                    python manage.py loaddata fixtures/*.json
                  </code>
                </div>
              </div>

              <div className="mt-8">
                <ImageWithSkeleton
                  src="/projects/ecoart3.png"
                  alt="EcoArt Market Admin Interface"
                  className="w-full rounded-lg shadow-lg"
                  skeletonClassName="rounded-lg aspect-video"
                />
              </div>
            </motion.div>
          </div>
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
              Comprehensive feature set designed for sustainable art marketplace workflows.
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
            <h2 className="text-4xl font-black mb-4">Sustainable E-commerce Solution</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A comprehensive Django-based marketplace showcasing full-stack development, 
              e-commerce functionality, and environmental consciousness in web applications.
            </p>
            
            <div className="flex gap-4 justify-center">
              <EnhancedButton
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
                href="https://github.com/arvnd-rdy/Eco-art"
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

export default EcoArtMarket;