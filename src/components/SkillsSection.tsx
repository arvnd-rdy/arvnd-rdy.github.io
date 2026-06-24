import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import {
  SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiCplusplus, SiReact, SiNodedotjs,
  SiExpress, SiNumpy, SiPandas, SiScikitlearn, SiGithub, SiPostman, SiMongodb,
  SiDocker, SiNetlify, SiUnity, SiBlender, SiVscodium, SiDjango, SiGraphql,
  SiAmazonwebservices, SiVercel, SiPostgresql, SiSqlite, SiTensorflow, SiPytorch,
  SiOpencv, SiGithubactions, SiTypescript, SiTailwindcss, SiNextdotjs, SiStreamlit,
  SiFastapi,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { Brain, Code, Database, Wrench, Gamepad2, Sparkles, Cloud } from "lucide-react";

type Skill = { name: string; icon?: React.ReactNode; color?: string };

const skillCategories: {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}[] = [
  {
    id: "genai",
    label: "GenAI & Agents",
    icon: <Sparkles className="w-4 h-4" />,
    description: "RAG pipelines, agent workflows, and LLM tooling",
    skills: [
      { name: "LangGraph" },
      { name: "LangChain", color: "text-green-600" },
      { name: "RAG" },
      { name: "Hybrid Search" },
      { name: "Tool Calling" },
      { name: "Prompt Engineering" },
      { name: "RAGAs" },
      { name: "Langfuse", color: "text-indigo-500" },
      { name: "Ollama" },
      { name: "Gemma", color: "text-blue-500" },
      { name: "ChromaDB", color: "text-orange-500" },
      { name: "BM25" },
      { name: "Sentence Transformers", color: "text-yellow-600" },
      { name: "BGE Embeddings", color: "text-purple-500" },
      { name: "Cohere Rerank" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    icon: <Brain className="w-4 h-4" />,
    description: "Machine learning, NLP, and model development",
    skills: [
      { name: "Python", icon: <SiPython />, color: "text-blue-500" },
      { name: "scikit-learn", icon: <SiScikitlearn />, color: "text-orange-500" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-600" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-red-500" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-blue-600" },
      { name: "Pandas", icon: <SiPandas />, color: "text-purple-600" },
      { name: "OpenCV", icon: <SiOpencv />, color: "text-green-600" },
      { name: "Hugging Face", color: "text-yellow-500" },
      { name: "BERT & GPT" },
      { name: "HDBSCAN", color: "text-blue-700" },
      { name: "Embeddings", color: "text-indigo-600" },
      { name: "Sentiment Analysis" },
      { name: "Random Forests", color: "text-green-600" },
      { name: "MLflow" },
      { name: "Plotly", color: "text-blue-500" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: <Code className="w-4 h-4" />,
    description: "Modern web interfaces and user experiences",
    skills: [
      { name: "React", icon: <SiReact />, color: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-neutral-800 dark:text-white" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500" },
      { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <Database className="w-4 h-4" />,
    description: "Server-side development, APIs, and data layers",
    skills: [
      { name: "FastAPI", icon: <SiFastapi />, color: "text-teal-600" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Django", icon: <SiDjango />, color: "text-green-600" },
      { name: "Streamlit", icon: <SiStreamlit />, color: "text-red-500" },
      { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
      { name: "SQLite", icon: <SiSqlite />, color: "text-blue-500" },
      { name: "REST APIs" },
      { name: "Pydantic", color: "text-emerald-600" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    description: "Cloud platforms, deployment, and infrastructure",
    skills: [
      { name: "AWS", icon: <SiAmazonwebservices />, color: "text-orange-500" },
      { name: "Azure", color: "text-blue-500" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify />, color: "text-teal-500" },
      { name: "NGINX", color: "text-green-600" },
    ],
  },
  {
    id: "xr",
    label: "XR Dev",
    icon: <Gamepad2 className="w-4 h-4" />,
    description: "AR/VR and immersive experiences",
    skills: [
      { name: "Unity", icon: <SiUnity /> },
      { name: "C#", color: "text-purple-600" },
      { name: "Blender", icon: <SiBlender />, color: "text-orange-500" },
      { name: "ARKit" },
      { name: "3D Modeling" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: <Wrench className="w-4 h-4" />,
    description: "Development tools and languages",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <SiVscodium />, color: "text-blue-500" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
      { name: "C", icon: <SiC />, color: "text-gray-600" },
      { name: "pytest", color: "text-blue-600" },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isInView } = useScrollAnimation();
  const [activeId, setActiveId] = useState("genai");

  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <section
      id="skills"
      className="bg-white dark:bg-black relative transition-colors duration-300 py-16 sm:py-20 scroll-mt-20"
    >
      <div className="absolute inset-0 brand-grid brand-grid-fade pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div className="mb-10 sm:mb-14" variants={fadeInUp}>
          <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3">
            Technical Skills
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight">
            What I Work With
          </h2>
        </motion.div>

        {/* Category pill tabs — horizontally scrollable */}
        <motion.div
          className="flex gap-2 overflow-x-auto pb-3 mb-10 sm:mb-12 scrollbar-hide"
          variants={fadeInUp}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border flex-shrink-0 ${
                activeId === cat.id
                  ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border-neutral-950 dark:border-white"
                  : "bg-transparent text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* Panel header */}
            <div className="mb-6 sm:mb-8">
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
                {active.description}
              </p>
            </div>

            {/* Skill chips */}
            <motion.div
              className="flex flex-wrap gap-2.5 sm:gap-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {active.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={staggerItem}
                  className="flex items-center gap-2 px-3.5 py-2 bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-white/20 hover:border-orange-400 dark:hover:border-orange-600 hover:bg-orange-50/40 dark:hover:bg-white/5 transition-all duration-200 rounded-lg group cursor-default"
                >
                  {skill.icon && (
                    <span className={`text-base leading-none flex-shrink-0 ${skill.color ?? "text-neutral-600 dark:text-neutral-400"}`}>
                      {skill.icon}
                    </span>
                  )}
                  <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer count */}
            <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <p className="text-xs text-neutral-400 dark:text-neutral-600">
                {active.skills.length} technologies in this category
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default memo(SkillsSection);
