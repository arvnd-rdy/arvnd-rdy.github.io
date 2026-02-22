import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Linkedin, ExternalLink } from "lucide-react";
import { TechMascot } from "@/components/TechMascot";

const testimonials = [
  {
    id: 1,
    name: "Jason Robbins",
    role: "Senior Director Information Technology",
    company: "Pure Flavor",
    initials: "JR",
    content: "Aravind was an exceptional IT intern during his time at Pure Flavor. He demonstrated strong problem-solving skills, a proactive attitude, and an eagerness to learn. Aravind quickly adapted to our systems and contributed immediately. His collaborative approach made him a valuable part of the team. I'm confident he will excel in any future role and recommend him for opportunities in IT.",
    linkedinUrl: "https://www.linkedin.com/in/jason-robbins-ab4a307a/",
    relationship: "Manager",
    date: "December 19, 2025",
    accentColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "Daniel Nogueira",
    role: "Information Technology Support Management",
    company: "Pure Flavor® Farms",
    initials: "DN",
    content: "I highly recommend Aravind Anugu as an exceptional IT Technician who consistently delivers reliable, high-quality support, even under pressure. During his time with the team, he has demonstrated strong problem-solving skills, regularly thinking outside the box and approaching challenges with creativity and solid technical insight. Aravind is a fast learner who quickly adapts to new systems and technologies, making him a valuable asset to any IT team. His strong work ethic and dedication to seeing problems through to complete resolution are both admirable and impressive.",
    linkedinUrl: "https://www.linkedin.com/in/daniel-nogueira-21a787303/",
    relationship: "Colleague",
    date: "December 16, 2025",
    accentColor: "bg-emerald-500"
  }
];

const TestimonialsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <motion.div
        className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 relative"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Tech Mascot - Top Right */}
        <motion.div
          className="absolute top-4 right-4 hidden lg:block z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TechMascot variant="starstruck" size={70} />
        </motion.div>

        {/* Header Label */}
        <motion.div
          className="inline-block bg-black dark:bg-white px-8 py-4 mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white dark:text-black uppercase tracking-widest">
            RECOMMENDATIONS
          </h2>
        </motion.div>

        {/* Testimonials List */}
        <motion.div
          className="space-y-0"
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-t-2 border-gray-300 dark:border-gray-700 py-8 sm:py-10"
              variants={staggerItem}
            >
              {/* Left Column - Name & Info */}
              <div className="mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-2">
                  {testimonial.name.split(' ').map((part, i) => (
                    <span key={i}>
                      {part}
                      {i === 0 && ' '}
                      {i === 1 && '.'}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </h3>
                
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
                  {testimonial.role}
                </div>
                
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-mono mb-3">
                  {testimonial.company} // <span style={{ color: '#0077B5' }}>{testimonial.date.split(',')[1].trim()}</span>
                </div>

                <a
                  href={testimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white transition-colors"
                  style={{ 
                    backgroundColor: '#0077B5',
                    borderColor: '#0077B5'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#005885';
                    e.currentTarget.style.borderColor = '#005885';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0077B5';
                    e.currentTarget.style.borderColor = '#0077B5';
                  }}
                >
                  LINKEDIN
                </a>
              </div>

              {/* Right Column - Quote */}
              <div className="md:pl-8 md:border-l-2 border-gray-300 dark:border-gray-700">
                <blockquote className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-mono">
                  "{testimonial.content}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom border */}
        <div className="border-t-2 border-gray-300 dark:border-gray-700 mt-0"></div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;