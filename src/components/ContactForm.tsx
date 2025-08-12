import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched({});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg p-8 shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-wide">
          Send Message
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </div>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800 font-medium">Message sent successfully!</span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="text-red-800 font-medium">Failed to send message. Please try again.</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                errors.name && touched.name
                  ? 'border-red-300 focus:ring-red-500 bg-red-50'
                  : 'border-gray-300 focus:ring-gray-900'
              }`}
              placeholder="Your full name"
            />
            {errors.name && touched.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.name}
              </motion.p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                errors.email && touched.email
                  ? 'border-red-300 focus:ring-red-500 bg-red-50'
                  : 'border-gray-300 focus:ring-gray-900'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && touched.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
              errors.subject && touched.subject
                ? 'border-red-300 focus:ring-red-500 bg-red-50'
                : 'border-gray-300 focus:ring-gray-900'
            }`}
            placeholder="Project discussion, collaboration, etc."
          />
          {errors.subject && touched.subject && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.subject}
            </motion.p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
              errors.message && touched.message
                ? 'border-red-300 focus:ring-red-500 bg-red-50'
                : 'border-gray-300 focus:ring-gray-900'
            }`}
            placeholder="Tell me about your project, timeline, and how I can help..."
          />
          {errors.message && touched.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  );
};