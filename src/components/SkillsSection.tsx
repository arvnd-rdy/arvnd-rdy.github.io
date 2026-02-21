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

  // Color mapping for each category - subtle accent colors
  const categoryColors = {
    frontend: { accent: "bg-blue-500", border: "border-blue-500", text: "text-blue-500" },
    backend: { accent: "bg-emerald-500", border: "border-emerald-500", text: "text-emerald-500" },
    "ai-ml": { accent: "bg-pink-500", border: "border-pink-500", text: "text-pink-500" },
    "cloud-devops": { accent: "bg-amber-500", border: "border-amber-500", text: "text-amber-500" },
    "xr-dev": { accent: "bg-purple-500", border: "border-purple-500", text: "text-purple-500" },
    tools: { accent: "bg-gray-500", border: "border-gray-500", text: "text-gray-500" }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 relative transition-colors duration-300">
      {/* Grid background with fade effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" 
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)'
        }}
      />

      <motion.div
        className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 relative"
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
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6 leading-none tracking-tighter uppercase px-4"
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
            {/* Tab Navigation - Minimal with thin borders */}
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 h-auto p-0 bg-transparent border-b border-gray-200 dark:border-gray-800 mb-8 sm:mb-10 md:mb-12 gap-0">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="relative flex items-center justify-center px-3 py-3 sm:py-4 text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white data-[state=active]:text-gray-900 dark:data-[state=active]:text-white transition-all duration-300 border-b-2 border-transparent data-[state=active]:border-gray-900 dark:data-[state=active]:border-white rounded-none bg-transparent"
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
                  className="bg-white dark:bg-gray-900 p-4 sm:p-6 md:p-8"
                >
                  {/* Category Header with subtle color accent */}
                  <div className="mb-6 sm:mb-8 md:mb-10 relative pl-4 sm:pl-6">
                    {/* Thin colored accent line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${categoryColors[category.id as keyof typeof categoryColors].accent}`}></div>
                    
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3 uppercase tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Grid - Clean minimal cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03, duration: 0.2 }}
                        className="group relative bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50 p-3 sm:p-4 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
                      >
                        {/* Subtle colored indicator on hover */}
                        <div className={`absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 ${categoryColors[category.id as keyof typeof categoryColors].accent} transition-all duration-300`}></div>

                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                            {skill.icon && (
                              <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
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
                            className="text-[10px] xs:text-xs font-medium border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 bg-transparent flex-shrink-0"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Category Stats - Minimal */}
                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                      <span className="font-medium">{category.skills.length} Technologies</span>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
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