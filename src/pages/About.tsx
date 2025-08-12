import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Award, Book, GraduationCap, ExternalLink } from "lucide-react";

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const education = [
    {
      degree: "Master's in Applied Computing",
      school: "University of Windsor",
      year: "2024 - 2026",
      status: "Current",
      type: "Master's Degree"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Lovely Professional University",
      year: "2019 - 2023",
      status: "Completed",
      grade: "8.6 CGPA",
      type: "Bachelor's Degree"
    }
  ];

  const skills = [
    "Full Stack Development",
    "AI & Machine Learning",
    "Cloud Architecture",
    "DevOps & CI/CD",
    "Mobile Development",
    "Data Science",
    "UI/UX Design",
    "Technical Leadership"
  ];

  const interests = [
    "Quantum Computing",
    "Space Technology",
    "Open Source",
    "Photography",
    "Hiking",
    "Cooking",
    "Reading",
    "Travel"
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar },
    { label: "Projects Built", value: "15+", icon: Award },
    { label: "Technologies", value: "25+", icon: Book },
    { label: "Current Location", value: "Canada", icon: MapPin }
  ];

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
            <motion.span variants={staggerItem}>ABOUT ME</motion.span>
          </motion.h1>
          <motion.p 
            className="text-gray-600 leading-relaxed max-w-2xl"
            variants={staggerItem}
          >
            Get to know the person behind the code - my journey, passions, and what drives me to create.
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
        {/* Personal Introduction */}
        <motion.section className="mb-16" variants={fadeInUp}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.img 
                src="/hero.png"
                alt="Arvind Reddy"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wide">My Journey</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hey! I'm someone who just really enjoys building cool stuff with tech. 
                  I work across full-stack web dev, AI/ML, and XR — so one day I might be coding a web app, 
                  and the next I'm fine-tuning a model or playing around in Unity.
                </p>
                <p>
                  I like making things that actually help people or feel fun to use. Whether it's a smart tool, 
                  a clean UI, or an immersive 3D scene, I'm all in. Always curious, always learning — 
                  especially when it comes to how AI is changing everything.
                </p>
                <p>
                  Right now, I'm pursuing my Master's in Applied Computing at the University of Windsor 
                  while looking for full-time roles where I can keep creating, growing, and working with 
                  people who love what they do.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats Grid */}
        <motion.section className="mb-16" variants={fadeInUp}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-gray-600" />
                <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-wide">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-5 h-5 text-gray-600" />
                      <Badge variant="outline" className="border-gray-300 text-gray-700">
                        {edu.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-wide">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 font-medium mb-2">{edu.school}</p>
                    {edu.grade && (
                      <p className="text-sm text-gray-500">Grade: {edu.grade}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={edu.status === 'Current' ? 'default' : 'secondary'}
                      className={edu.status === 'Current' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}
                    >
                      {edu.status}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-2">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-wide">Core Skills</h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={staggerItem}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-gray-900 rounded-full" />
                    <span className="text-gray-700 font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Interests */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-wide">Interests</h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge
                    key={interest}
                    variant="outline"
                    className="border-gray-300 text-gray-700"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Call to Action */}
        <motion.section className="text-center bg-gray-900 rounded-lg p-12 text-white" variants={fadeInUp}>
          <h2 className="text-3xl font-black mb-6 uppercase tracking-wide">
            Let's Work Together
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium"
            >
              Download Resume
            </Button>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default About;
