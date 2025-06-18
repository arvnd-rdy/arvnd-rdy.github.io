
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Award, Book } from "lucide-react";

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      year: "2019",
      details: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Technology in Computer Engineering", 
      school: "Indian Institute of Technology",
      year: "2017",
      details: "Graduated Magna Cum Laude with focus on Software Engineering"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional ML Engineer", 
    "Meta Front-End Developer Professional",
    "Deep Learning Specialization - Deeplearning.ai"
  ];

  const personalInfo = [
    { label: "Location", value: "San Francisco, CA", icon: MapPin },
    { label: "Experience", value: "5+ Years", icon: Calendar },
    { label: "Projects Completed", value: "50+", icon: Award },
    { label: "Continuous Learning", value: "Always", icon: Book }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className="bg-gray-900 text-white py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-6xl px-8">
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
            <motion.span variants={staggerItem} className="block">ABOUT</motion.span>
            <motion.span variants={staggerItem} className="block text-gray-400">ARVIND</motion.span>
          </motion.h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="container mx-auto max-w-6xl px-8 py-20"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Personal Introduction */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <img 
                src="/hero.png"
                alt="Arvind Reddy"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-gray-900">MY STORY</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Born and raised in India, my fascination with technology began at age 12 when I wrote my first 
                  "Hello World" program. This spark ignited a passion that has driven my entire career.
                </p>
                <p>
                  After completing my education at prestigious institutions, I moved to Silicon Valley to pursue 
                  my dreams of building technology that makes a difference. Over the past 5 years, I've had the 
                  privilege of working with cutting-edge technologies and brilliant minds.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring San Francisco's hiking trails, experimenting with 
                  new cuisines, or reading about the latest developments in quantum computing and space exploration.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Personal Info Grid */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <h2 className="text-4xl font-black text-gray-900 mb-12">QUICK FACTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalInfo.map((info, index) => (
              <motion.div 
                key={info.label}
                className="bg-gray-50 p-6 text-center group hover:bg-gray-900 hover:text-white transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <info.icon className="h-8 w-8 mx-auto mb-4 text-gray-600 group-hover:text-white" />
                <h3 className="font-bold text-lg mb-2">{info.label}</h3>
                <p className="text-gray-600 group-hover:text-gray-300">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <h2 className="text-4xl font-black text-gray-900 mb-12">EDUCATION</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 group hover:bg-gray-900 hover:text-white transition-all duration-300"
                variants={staggerItem}
                whileHover={{ x: 10 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-600 group-hover:text-gray-300">{edu.school}</p>
                    <p className="text-gray-500 group-hover:text-gray-400">{edu.details}</p>
                  </div>
                  <span className="text-lg font-bold text-gray-500 group-hover:text-gray-300">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <h2 className="text-4xl font-black text-gray-900 mb-12">CERTIFICATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 group hover:bg-gray-900 hover:text-white transition-all duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-gray-600 group-hover:text-white flex-shrink-0" />
                  <span className="font-semibold">{cert}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="text-center" variants={fadeInUp}>
          <h2 className="text-4xl font-black text-gray-900 mb-8">LET'S WORK TOGETHER</h2>
          <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full">
                GET IN TOUCH →
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full"
            >
              DOWNLOAD CV
            </Button>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default About;
