import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Star, Calendar, Code2, Palette, Zap, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const PortfolioWebsite = () => {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern Design System",
      description: "Built with Tailwind CSS and shadcn/ui for consistent, beautiful components"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smooth Animations",
      description: "Framer Motion powered interactions and scroll-triggered animations"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Fully Responsive",
      description: "Mobile-first design that works perfectly on all devices and screen sizes"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Fast loading times with Vite build system and optimized assets"
    }
  ];

  const techStack = [
    "React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", 
    "Framer Motion", "React Router", "Radix UI", "Lucide Icons", 
    "React Hook Form", "Zod Validation", "ESLint", "Modern Hooks"
  ];

  const sections = [
    {
      name: "Hero Section",
      description: "Dynamic introduction with social links and call-to-action",
      features: ["Typing animation", "Social media integration", "Responsive design"]
    },
    {
      name: "About Section", 
      description: "Professional background and personal interests",
      features: ["Interactive content", "Skills showcase", "Personal story"]
    },
    {
      name: "Projects Section",
      description: "Featured and grid layouts for project showcase",
      features: ["Detailed project cards", "Live demos", "GitHub integration"]
    },
    {
      name: "Contact Section",
      description: "Professional contact form with validation",
      features: ["Form validation", "Email integration", "Social links"]
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
                  Frontend • React • TypeScript
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Interactive Portfolio Website
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  A modern, responsive portfolio website showcasing my work, skills, and experience 
                  as a Full Stack & AI/ML Developer. Built with cutting-edge web technologies.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <EnhancedButton
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                  href="https://aravindreddyanugu.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-4 h-4" />
                  View Live Site
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50"
                  href="https://github.com/arvnd-rdy/arvnd-rdy.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </EnhancedButton>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm">Framework</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">React 18</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Smartphone className="w-4 h-4" />
                    <span className="text-sm">Responsive</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm">Performance</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Fast</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">Deployment</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Live</div>
                </div>
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div variants={staggerItem}>
              <div className="relative">
                <ImageWithSkeleton
                  src="/projects/portfolio1.png"
                  alt="Portfolio Website Screenshot"
                  className="w-full rounded-2xl shadow-2xl"
                  skeletonClassName="rounded-2xl aspect-video"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with modern web technologies and best practices for optimal user experience.
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
              Modern React ecosystem with TypeScript for type safety and developer experience.
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
            </motion.div>

            {/* Architecture */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Architecture Highlights</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Component-Based Architecture</h4>
                  <p className="text-gray-600 text-sm">Modular, reusable components with clear separation of concerns</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Type-Safe Development</h4>
                  <p className="text-gray-600 text-sm">Full TypeScript integration for better code quality and developer experience</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Performance Optimized</h4>
                  <p className="text-gray-600 text-sm">Vite build system with code splitting and asset optimization</p>
                </div>
              </div>

              {/* Second Portfolio Image */}
              <div className="mt-8">
                <ImageWithSkeleton
                  src="/projects/portfolio2.png"
                  alt="Portfolio Website Mobile View"
                  className="w-full rounded-lg shadow-lg"
                  skeletonClassName="rounded-lg aspect-video"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sections Overview */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Site Sections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each section is carefully crafted to showcase different aspects of my professional profile.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.name}</h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="space-y-2">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
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
            <h2 className="text-4xl font-black mb-4">Experience the Portfolio</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              See the live website in action and explore the source code to understand 
              the implementation details and architecture decisions.
            </p>
            
            <div className="flex gap-4 justify-center">
              <EnhancedButton
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
                href="https://aravindreddyanugu.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-5 h-5 mr-2" />
                Visit Live Site
              </EnhancedButton>
              <EnhancedButton
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
                href="https://github.com/arvnd-rdy/arvnd-rdy.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </EnhancedButton>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PortfolioWebsite;