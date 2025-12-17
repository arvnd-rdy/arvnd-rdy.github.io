import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
    id: "frontend",
    title: "Frontend",
    icon: <Code className="w-5 h-5" />,
    gradient: "from-blue-500 to-purple-600",
    description: "Modern web interfaces and user experiences",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500", level: "Expert" },
      { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400", level: "Expert" },
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "text-yellow-500", level: "Expert" },
      { name: "React", icon: <SiReact />, color: "text-cyan-400", level: "Expert" },
      { name: "TypeScript", icon: null, color: "text-blue-600", level: "Advanced" },
      { name: "Tailwind CSS", icon: null, color: "text-teal-500", level: "Expert" }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-600",
    description: "Server-side development and API design",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500", level: "Expert" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-700", level: "Expert" },
      { name: "Django (DRF)", icon: <SiDjango />, color: "text-green-600", level: "Advanced" },
      { name: "REST APIs", icon: null, color: "text-gray-700", level: "Expert" },
      { name: "GraphQL APIs", icon: <SiGraphql />, color: "text-pink-500", level: "Intermediate" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600", level: "Advanced" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", level: "Advanced" }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & ML",
    icon: <Brain className="w-5 h-5" />,
    gradient: "from-pink-500 to-rose-600",
    description: "Machine learning and artificial intelligence",
    skills: [
      { name: "Python", icon: <SiPython />, color: "text-blue-500", level: "Expert" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-600", level: "Advanced" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500", level: "Advanced" },
      { name: "scikit-learn", icon: <SiScikitlearn />, color: "text-orange-500", level: "Expert" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-blue-600", level: "Expert" },
      { name: "Pandas", icon: <SiPandas />, color: "text-purple-600", level: "Expert" },
      { name: "OpenCV", icon: <SiOpencv />, color: "text-green-600", level: "Advanced" },
      { name: "Hugging Face", icon: null, color: "text-gray-700", level: "Advanced" },
      { name: "BERT & GPT", icon: null, color: "text-gray-700", level: "Intermediate" },
      { name: "MLflow", icon: null, color: "text-gray-700", level: "Intermediate" }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    gradient: "from-amber-500 to-orange-600",
    description: "Cloud platforms and deployment automation",
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices />, color: "text-orange-500", level: "Advanced" },
      { name: "Azure", icon: null, color: "text-blue-500", level: "Intermediate" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400", level: "Advanced" },
      { name: "GitHub Actions", icon: <SiGithubactions />, color: "text-gray-800", level: "Advanced" },
      { name: "Vercel", icon: <SiVercel />, color: "text-gray-800", level: "Expert" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-teal-500", level: "Expert" }
    ]
  },
  {
    id: "xr-dev",
    title: "XR Development",
    icon: <Gamepad2 className="w-5 h-5" />,
    gradient: "from-purple-500 to-indigo-600",
    description: "AR/VR and immersive experiences",
    skills: [
      { name: "Unity", icon: <SiUnity />, color: "text-gray-800", level: "Advanced" },
      { name: "C#", icon: null, color: "text-purple-600", level: "Advanced" },
      { name: "Blender", icon: <SiBlender />, color: "text-orange-500", level: "Intermediate" },
      { name: "ARKit", icon: null, color: "text-gray-700", level: "Intermediate" },
      { name: "3D Modeling", icon: null, color: "text-gray-700", level: "Intermediate" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Languages",
    icon: <Wrench className="w-5 h-5" />,
    gradient: "from-gray-500 to-slate-600",
    description: "Development tools and programming languages",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500", level: "Expert" },
      { name: "GitHub", icon: <SiGithub />, color: "text-gray-800", level: "Expert" },
      { name: "VS Code", icon: <SiVscodium />, color: "text-blue-500", level: "Expert" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500", level: "Advanced" },
      { name: "C++", icon: <SiCplusplus />, color: "text-blue-600", level: "Intermediate" },
      { name: "C", icon: <SiC />, color: "text-gray-600", level: "Intermediate" }
    ]
  }
];

const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA] dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8 leading-tight px-4"
            variants={staggerItem}
          >
            TECHNICAL SKILLS
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base px-4"
            variants={staggerItem}
          >
            A comprehensive toolkit spanning multiple domains of modern technology
          </motion.p>
        </motion.div>

        {/* Tabs Container */}
        <motion.div
          variants={staggerItem}
          className="w-full"
        >
          <Tabs defaultValue="frontend" className="w-full">
            {/* Tab Navigation */}
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 h-auto p-1 sm:p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full mb-6 sm:mb-8 md:mb-12 shadow-sm transition-colors duration-300 gap-1">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center justify-center p-2 sm:p-3 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 data-[state=active]:text-white dark:data-[state=active]:text-white data-[state=active]:bg-gray-900 dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-md transition-all duration-300"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            {skillCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                >
                  {/* Category Header */}
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 uppercase tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                        className="group relative bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md dark:shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:dark:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300"
                      >
                        {/* Skill Content */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                            {skill.icon && (
                              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-200">
                                <span className={`text-lg sm:text-xl ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                                  {skill.icon}
                                </span>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base leading-tight truncate">
                                {skill.name}
                              </h4>
                            </div>
                          </div>

                          <Badge
                            variant="outline"
                            className="text-[10px] xs:text-xs font-medium border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 flex-shrink-0"
                          >
                            {skill.level}
                          </Badge>
                        </div>


                      </motion.div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{category.skills.length} Technologies</span>
                      <div className="flex flex-wrap gap-2 sm:gap-4">
                        <span>Expert: {category.skills.filter(s => s.level === "Expert").length}</span>
                        <span>Advanced: {category.skills.filter(s => s.level === "Advanced").length}</span>
                        <span>Intermediate: {category.skills.filter(s => s.level === "Intermediate").length}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(SkillsSection);