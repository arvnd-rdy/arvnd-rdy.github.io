import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import {
  SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiCplusplus, SiReact, SiNodedotjs, 
  SiExpress, SiNumpy, SiPandas, SiScikitlearn, SiGithub, SiPostman, SiMongodb, 
  SiDocker, SiNetlify, SiUnity, SiBlender, SiVscodium, SiDjango, SiGraphql,
  SiAmazonwebservices, SiVercel, SiPostgresql, SiSqlite, SiTensorflow, SiPytorch,
  SiOpencv, SiGithubactions
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { Brain, Code, Database, Wrench, Gamepad2, Sparkles, Cloud, Eye } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-purple-600",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400" },
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "React", icon: <SiReact />, color: "text-cyan-400" }
    ]
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-700" },
      { name: "Django (DRF)", icon: <SiDjango />, color: "text-green-600" },
      { name: "REST APIs", icon: null, color: "text-gray-700" },
      { name: "GraphQL APIs", icon: <SiGraphql />, color: "text-pink-500" }
    ]
  },
  {
    title: "Programming Languages",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-violet-500 to-purple-600",
    skills: [
      { name: "Python", icon: <SiPython />, color: "text-blue-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
      { name: "C", icon: <SiC />, color: "text-gray-600" },
      { name: "C#", icon: null, color: "text-purple-600" }
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-indigo-500 to-blue-600",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "SQLite", icon: <SiSqlite />, color: "text-blue-400" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-600",
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices />, color: "text-orange-500" },
      { name: "Azure", icon: null, color: "text-blue-500" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
      { name: "GitHub Actions", icon: <SiGithubactions />, color: "text-gray-800" },
      { name: "Vercel", icon: <SiVercel />, color: "text-gray-800" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-teal-500" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-600",
    skills: [
      { name: "Python", icon: <SiPython />, color: "text-blue-500" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-blue-600" },
      { name: "Pandas", icon: <SiPandas />, color: "text-purple-600" },
      { name: "SciPy", icon: null, color: "text-gray-700" },
      { name: "scikit-learn", icon: <SiScikitlearn />, color: "text-orange-500" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-600" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
      { name: "Hugging Face", icon: null, color: "text-gray-700" },
      { name: "BERT & GPT", icon: null, color: "text-gray-700" },
      { name: "PEFT/LoRA", icon: null, color: "text-gray-700" },
      { name: "spaCy", icon: null, color: "text-gray-700" },
      { name: "MLflow", icon: null, color: "text-gray-700" },
      { name: "Weights & Biases", icon: null, color: "text-gray-700" }
    ]
  },
  {
    title: "Computer Vision",
    icon: <Eye className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      { name: "OpenCV", icon: <SiOpencv />, color: "text-green-600" },
      { name: "Albumentations", icon: null, color: "text-gray-700" },
      { name: "Image Processing", icon: null, color: "text-gray-700" }
    ]
  },
  {
    title: "AR/VR Development",
    icon: <Gamepad2 className="w-6 h-6" />,
    gradient: "from-purple-500 to-indigo-600",
    skills: [
      { name: "Unity", icon: <SiUnity />, color: "text-gray-800" },
      { name: "C#", icon: null, color: "text-purple-600" },
      { name: "Blender", icon: <SiBlender />, color: "text-orange-500" },
      { name: "ARKit", icon: null, color: "text-gray-700" },
      { name: "3D Modeling", icon: null, color: "text-gray-700" },
      { name: "Scene Creation", icon: null, color: "text-gray-700" }
    ]
  },
  {
    title: "Development Tools",
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-gray-500 to-slate-600",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "GitHub", icon: <SiGithub />, color: "text-gray-800" },
      { name: "VS Code", icon: <SiVscodium />, color: "text-blue-500" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400" }
    ]
  }
];

const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        className="container mx-auto max-w-7xl px-8"
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
            TECHNICAL EXPERTISE
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            A comprehensive toolkit spanning multiple domains of technology
          </motion.p>
        </motion.div>

        <motion.div 
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          variants={staggerContainer}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 break-inside-avoid"
              variants={staggerItem}
              whileHover={{ y: -4 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group/skill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {skill.icon && (
                      <span className={`text-lg ${skill.color} group-hover/skill:scale-110 transition-transform duration-200`}>
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-sm font-medium text-gray-700 group-hover/skill:text-gray-900 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;