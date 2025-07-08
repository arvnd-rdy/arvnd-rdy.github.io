import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import {
  SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiCplusplus, SiReact, SiNodedotjs, 
  SiExpress, SiNumpy, SiPandas, SiScikitlearn, SiGithub, SiPostman, SiMongodb, 
  SiDocker, SiNetlify, SiUnity, SiBlender, SiVscodium
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { Brain, Code, Database, Wrench, Gamepad2, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-blue-500 to-purple-600",
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "Python", icon: <SiPython />, color: "text-blue-500" },
      { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400" },
      { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
      { name: "C", icon: <SiC />, color: "text-gray-600" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Sparkles className="w-6 h-6" />,
    gradient: "from-emerald-500 to-teal-600",
    skills: [
      { name: "React", icon: <SiReact />, color: "text-cyan-400" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-700" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-pink-500 to-rose-600",
    skills: [
      { name: "NumPy", icon: <SiNumpy />, color: "text-blue-600" },
      { name: "Pandas", icon: <SiPandas />, color: "text-purple-600" },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "text-orange-500" },
      { name: "Transformers", icon: null, color: "text-gray-700" },
      { name: "Fine-tuning", icon: null, color: "text-gray-700" },
      { name: "RAG Pipelines", icon: null, color: "text-gray-700" },
      { name: "Vector DBs", icon: null, color: "text-gray-700" },
      { name: "Model Training", icon: null, color: "text-gray-700" }
    ]
  },
  {
    title: "Development Tools",
    icon: <Wrench className="w-6 h-6" />,
    gradient: "from-amber-500 to-orange-600",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "GitHub", icon: <SiGithub />, color: "text-gray-800" },
      { name: "VS Code", icon: <SiVscodium />, color: "text-blue-500" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" }
    ]
  },
  {
    title: "Databases & Cloud",
    icon: <Database className="w-6 h-6" />,
    gradient: "from-indigo-500 to-blue-600",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-teal-500" },
      { name: "Render", icon: null, color: "text-gray-700" }
    ]
  },
  {
    title: "3D & XR Development",
    icon: <Gamepad2 className="w-6 h-6" />,
    gradient: "from-violet-500 to-purple-600",
    skills: [
      { name: "Unity", icon: <SiUnity />, color: "text-gray-800" },
      { name: "Blender", icon: <SiBlender />, color: "text-orange-500" },
      { name: "AR/VR", icon: null, color: "text-gray-700" },
      { name: "Scene Design", icon: null, color: "text-gray-700" },
      { name: "3D Animation", icon: null, color: "text-gray-700" }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                categoryIndex === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${categoryIndex === 0 ? 'lg:row-span-2' : ''}`}
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
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group/skill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
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
