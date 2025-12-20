import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star, Linkedin, ExternalLink, Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "TechCorp Inc.",
    image: "/testimonials/sarah.jpg", // You'll need to add these images
    content: "Arvind delivered exceptional work on our AI-powered analytics platform. His ability to translate complex requirements into elegant solutions is remarkable. The code quality and attention to detail exceeded our expectations.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/sarahchen",
    relationship: "Worked together on AI Analytics Platform",
    skills: ["React", "Python", "Machine Learning"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Lead Developer",
    company: "StartupXYZ",
    image: "/testimonials/michael.jpg",
    content: "Working with Arvind was a game-changer for our project. His full-stack expertise and problem-solving skills helped us launch our MVP 3 weeks ahead of schedule. Highly recommend!",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/michaelrodriguez",
    relationship: "Collaborated on MVP Development",
    skills: ["Node.js", "React", "PostgreSQL"]
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "AI Research Lab",
    image: "/testimonials/emily.jpg",
    content: "Arvind's work on our machine learning pipeline was outstanding. He has a rare combination of technical depth and practical application skills. His contributions were instrumental in our research breakthrough.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/emilywatson",
    relationship: "Research Collaboration",
    skills: ["TensorFlow", "Python", "Data Science"]
  },
  {
    id: 4,
    name: "James Thompson",
    role: "CTO",
    company: "InnovateTech",
    image: "/testimonials/james.jpg",
    content: "Arvind is one of those rare developers who combines technical excellence with great communication skills. He delivered a complex web application that perfectly matched our vision and requirements.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/jamesthompson",
    relationship: "Client Project - Web Application",
    skills: ["TypeScript", "React", "AWS"]
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "UI/UX Designer",
    company: "DesignStudio",
    image: "/testimonials/lisa.jpg",
    content: "Collaborating with Arvind was seamless. He brought my designs to life with pixel-perfect precision and added thoughtful interactions that enhanced the user experience beyond what I initially envisioned.",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/lisapark",
    relationship: "Design-Development Collaboration",
    skills: ["Frontend", "Animation", "UI Implementation"]
  }
];

const TestimonialsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-rotate testimonials with progress
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, 6000); // Change every 6 seconds

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 60); // 60 steps over 6 seconds
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying, currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-gray-100 to-transparent" />
        <div className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-gray-100 to-transparent" />
      </div>

      <motion.div
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Premium Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 glass-skill-card px-4 py-2 rounded-full mb-8"
            variants={staggerItem}
          >
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Client Testimonials</span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight"
            variants={staggerItem}
          >
            TRUSTED BY
            <br />
            <span className="text-gray-600">PROFESSIONALS</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-lg"
            variants={staggerItem}
          >
            Real feedback from colleagues, clients, and collaborators who've experienced my work firsthand
          </motion.p>
        </motion.div>

        {/* Premium Main Testimonial Display */}
        <motion.div
          className="relative max-w-6xl mx-auto mb-16"
          variants={staggerItem}
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side - Testimonial Content */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="space-y-8"
                >
                  {/* Quote */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-8 h-8 text-gray-200">
                      <Quote className="w-full h-full" />
                    </div>
                    <blockquote className="text-2xl lg:text-3xl xl:text-4xl text-gray-900 leading-tight font-light italic pl-8">
                      {currentTestimonial.content}
                    </blockquote>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 fill-gray-900 text-gray-900" />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0 out of 5</span>
                  </div>

                  {/* Skills Used */}
                  <div className="flex flex-wrap gap-2">
                    {currentTestimonial.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Badge variant="outline" className="border-gray-300 text-gray-700 bg-white/50">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Author Card */}
            <div className="lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                  className="glass-card rounded-2xl p-8 text-center relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-gray-900" />
                  </div>

                  <div className="relative z-10 space-y-6">
                    {/* Profile Avatar */}
                    <div className="relative mx-auto w-24 h-24">
                      <div className="w-full h-full rounded-full glass-skill-card flex items-center justify-center text-2xl font-bold text-gray-600 border-4 border-white shadow-lg">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <Linkedin className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                      <p className="text-gray-600 font-medium">{currentTestimonial.role}</p>
                      <p className="text-gray-500 text-sm">{currentTestimonial.company}</p>
                    </div>

                    {/* Relationship Badge */}
                    <Badge className="glass-skill-card text-xs px-3 py-1">
                      {currentTestimonial.relationship}
                    </Badge>

                    {/* LinkedIn Link */}
                    <a
                      href={currentTestimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group mt-4"
                    >
                      <span>Connect on LinkedIn</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Premium Navigation Controls */}
        <motion.div
          className="flex flex-col items-center gap-8"
          variants={staggerItem}
        >
          {/* Progress Indicators with Navigation */}
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass-skill-card hover:scale-110 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            </Button>

            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className="relative group"
                >
                  <div className={`w-12 h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'bg-gray-900' 
                      : 'bg-gray-200 group-hover:bg-gray-300'
                  }`}>
                    {index === currentIndex && isAutoPlaying && (
                      <motion.div
                        className="h-full bg-gray-600 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    )}
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass-skill-card hover:scale-110 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
            </Button>
          </div>

          {/* Auto-play Control */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="glass-skill-card border-gray-300 hover:border-gray-400 transition-all duration-300 group"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Play
                </>
              )}
            </Button>
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 pt-12 border-t border-gray-200"
          variants={staggerItem}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-black text-gray-900">5.0</div>
              <div className="text-sm text-gray-600">Average Rating</div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-gray-900">{testimonials.length}</div>
              <div className="text-sm text-gray-600">Client Reviews</div>
              <div className="text-xs text-gray-500">From recent projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
              <div className="text-xs text-gray-500">Would recommend</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;