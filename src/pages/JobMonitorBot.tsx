import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Star, Calendar, Code2, Zap, Shield, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const JobMonitorBot = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      description: "24/7 automated monitoring with 3-minute response time for new job postings"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Multi-Site Support",
      description: "Monitors both Walmart and Loblaw career websites simultaneously"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Duplicate Detection",
      description: "Advanced ID tracking prevents false notifications and duplicate alerts"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Notifications",
      description: "Telegram bot delivers formatted job alerts directly to your phone"
    }
  ];

  const techStack = [
    "Python", "Selenium WebDriver", "BeautifulSoup", "Telegram Bot API", 
    "Chrome Automation", "Web Scraping", "Multi-threading", "Error Handling",
    "JSON Data Management", "Logging System", "Configuration Management"
  ];

  const metrics = [
    { label: "Response Time", value: "3 minutes", icon: <Clock className="w-4 h-4" /> },
    { label: "Uptime", value: "24/7", icon: <Zap className="w-4 h-4" /> },
    { label: "Sites Monitored", value: "2", icon: <Target className="w-4 h-4" /> },
    { label: "False Positives", value: "0%", icon: <Shield className="w-4 h-4" /> }
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
                  Automation • Python
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Job Monitor Bot
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Automated job application tracker that solves the "first come, first served" challenge 
                  in competitive job markets through 24/7 monitoring and instant notifications.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <EnhancedButton
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                  href="https://github.com/arvnd-rdy/walmart_and_lowblow_jobmonitor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50"
                  href="#demo"
                >
                  <ExternalLink className="w-4 h-4" />
                  See Demo
                </EnhancedButton>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      {metric.icon}
                      <span className="text-sm">{metric.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div variants={staggerItem}>
              <div className="relative">
                <ImageWithSkeleton
                  src="/projects/jobmonitor1.png"
                  alt="Job Monitor Bot Interface"
                  className="w-full rounded-2xl shadow-2xl"
                  skeletonClassName="rounded-2xl aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Problem & Solution */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* The Problem */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h2 className="text-3xl font-black text-gray-900">The Problem</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As an international student in Canada, finding part-time work was crucial. 
                  Walmart and Loblaw offered the best opportunities - good pay, flexible hours, 
                  and student-friendly policies.
                </p>
                <p>
                  After sending 50+ applications to each company with zero interviews, 
                  I discovered the harsh reality: <strong className="text-gray-900">it's first come, first served</strong>. 
                  Only the first 10-15 applicants get interviews, regardless of qualifications.
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                  <p className="text-red-700 font-medium">
                    Manual checking meant missing opportunities within minutes of posting.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h2 className="text-3xl font-black text-gray-900">The Engineering Solution</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As an engineer, I know the rule: <strong className="text-gray-900">identify a problem, solve it with technology</strong>.
                </p>
                <p>
                  I built an automated monitoring system that gives me the first-mover advantage 
                  in competitive job markets through intelligent automation and real-time notifications.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <p className="text-green-700 font-medium">
                    Result: 3-minute response time vs. manual checking, 24/7 monitoring coverage.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with robust architecture and user-centric design for maximum reliability and ease of use.
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
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Technical Implementation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combining multiple technologies for a robust, scalable automation solution.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Architecture */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">System Architecture</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-2">Multi-Site Monitoring</h4>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Walmart Careers (Selenium automation)</li>
                    <li>• Loblaw Careers (BeautifulSoup scraping)</li>
                    <li>• Parallel processing for speed</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-green-900 mb-2">Real-Time Notifications</h4>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Telegram Bot API integration</li>
                    <li>• HTML-formatted job details</li>
                    <li>• Direct apply links</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-bold text-purple-900 mb-2">Robust Architecture</h4>
                  <ul className="text-purple-800 space-y-1 text-sm">
                    <li>• Connection error handling</li>
                    <li>• Memory management</li>
                    <li>• Cross-platform compatibility</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Technology Stack</h3>
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

              {/* Second Image */}
              <div className="mt-8">
                <ImageWithSkeleton
                  src="/projects/jobmonitor2.png"
                  alt="Job Monitor Bot Code Structure"
                  className="w-full rounded-lg shadow-lg"
                  skeletonClassName="rounded-lg aspect-video"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Results & Impact */}
      <motion.section 
        className="py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">The Result</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Problem solved. Now I get job notifications within 3 minutes of posting, 
              giving me the first-mover advantage in competitive job markets.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-black text-blue-400">⚡ 3min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-green-400">🔄 24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-purple-400">📱 Instant</div>
              <div className="text-gray-300">Notifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-yellow-400">🎯 Zero</div>
              <div className="text-gray-300">False Positives</div>
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center mt-16">
            <EnhancedButton
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
              href="https://github.com/arvnd-rdy/walmart_and_lowblow_jobmonitor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              Explore the Code
            </EnhancedButton>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default JobMonitorBot;