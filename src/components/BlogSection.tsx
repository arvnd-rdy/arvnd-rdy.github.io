
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const { ref, isInView } = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable AI Solutions with Modern Frameworks",
      excerpt: "Exploring the latest trends in AI/ML development and how to create robust, scalable solutions that can handle real-world applications.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=smart"
    },
    {
      id: 2,
      title: "The Future of Full-Stack Development",
      excerpt: "Diving deep into emerging technologies and frameworks that are shaping the future of web development and user experiences.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=smart"
    },
    {
      id: 3,
      title: "Optimizing React Performance for Large Applications",
      excerpt: "Practical strategies and techniques to improve React application performance, from code splitting to state management optimization.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=smart"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <motion.div 
        className="container mx-auto max-w-6xl px-8"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            variants={staggerItem}
          >
            LATEST INSIGHTS
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Thoughts, tutorials, and insights about technology, development, and innovation
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group cursor-pointer"
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          variants={staggerItem}
        >
          <Button 
            variant="outline"
            className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
          >
            VIEW ALL ARTICLES →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
