import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const FeedbackSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <motion.section 
      id="feedback" 
      className="py-20 bg-gray-50"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight uppercase tracking-wide"
            variants={staggerItem}
          >
            What Do You Think?
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg"
            variants={staggerItem}
          >
            Your feedback helps me improve and create better experiences. 
            Share your thoughts, suggestions, or just say hello!
          </motion.p>
        </motion.div>



        {/* Compact Feedback Options */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
        >
          {/* Quick Feedback */}
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={staggerItem}
          >
            <h3 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-wide">
              Quick Feedback
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Share your thoughts in just a few clicks
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you rate this portfolio?
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setSelectedRating(star)}
                      className={`text-2xl transition-all duration-200 hover:scale-110 ${
                        star <= selectedRating 
                          ? 'text-yellow-400' 
                          : 'text-gray-300 hover:text-yellow-400'
                      }`}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
                {selectedRating > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    Thanks for the {selectedRating}-star rating! 🎉
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What impressed you most?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Design", "Projects", "Skills", "Experience"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                {selectedCategory && (
                  <p className="text-sm text-gray-600 mt-2">
                    Great choice! {selectedCategory} is definitely a key part of my work. 👍
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Detailed Feedback */}
          <motion.div
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            variants={staggerItem}
          >
            <h3 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-wide">
              Detailed Feedback
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Want to share more detailed thoughts?
            </p>
            
            <div className="space-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfS5T3p_2uvx5WmdIYJGRYuOdSRcWWMSIcwIjBwQAV2euZ9dg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Open Full Feedback Form
              </a>
              
              <div className="text-center">
                <p className="text-gray-500 text-xs">
                  Opens in new tab • Takes 2 minutes
                </p>
              </div>
              
              {/* Contact Options */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  Or reach out directly:
                </p>
                <div className="flex gap-2">
                  <a
                    href="mailto:arvindhreddyanugu2002@gmail.com"
                    className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arvnd-rdy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-center py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          className="text-center mt-8"
          variants={staggerItem}
        >
          <p className="text-gray-500 text-sm">
            Thank you for taking the time to share your feedback! 🙏
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeedbackSection;