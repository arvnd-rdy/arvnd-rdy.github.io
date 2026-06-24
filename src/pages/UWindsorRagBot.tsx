import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, BookOpen, DatabaseZap, Shield, Cpu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { EnhancedButton } from "@/components/EnhancedButton";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const UWindsorRagBot = () => {
  const pipelineSteps = [
    {
      title: "Targeted Web Scraping",
      description:
        "Use Crawl4AI to parse the UWindsor sitemap, ignore junk pages, and extract clean Markdown from important academic, residence, and student service pages."
    },
    {
      title: "Vectorization & Storage",
      description:
        "Chunk the content into 3,000+ passages and embed them with HuggingFace all-MiniLM-L6-v2, storing vectors locally in ChromaDB for fast semantic search."
    },
    {
      title: "Context-Aware Q&A",
      description:
        "Given a question, retrieve top-matching chunks from ChromaDB and feed them into a local Qwen 2.5 (7B) model running in Ollama to generate grounded answers."
    },
    {
      title: "Private Chat Interface",
      description:
        "Expose the pipeline through a FastAPI backend and a Streamlit chat UI, keeping all data processing and LLM calls on the user's own machine."
    }
  ];

  const techStack = [
    "Python",
    "FastAPI",
    "Streamlit",
    "Crawl4AI",
    "HuggingFace Transformers",
    "all-MiniLM-L6-v2",
    "ChromaDB",
    "Ollama",
    "Qwen 2.5 (7B)",
    "RAG"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          {/* Back Button */}
          <motion.div variants={staggerItem} className="mb-8">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div variants={staggerItem} className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-gray-700 border-gray-300">
                  AI • RAG • Local LLM
                </Badge>

                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  UWindsor RAG Bot
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  A local, privacy-first AI advisor for the University of Windsor that turns{" "}
                  <span className="font-semibold text-gray-900">~200 official pages</span> into a vector{" "}
                  &quot;second brain&quot;, answering student questions with cited, up-to-date information instead of
                  hallucinations.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <EnhancedButton
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                  href="https://github.com/arvnd-rdy/Uwindsor_Ragbot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50"
                  href="#pipeline"
                >
                  <Code2 className="w-4 h-4" />
                  RAG Pipeline
                </EnhancedButton>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">UWindsor Pages</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">~200</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DatabaseZap className="w-4 h-4" />
                    <span className="text-sm">Vector Chunks</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">3,000+</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Cpu className="w-4 h-4" />
                    <span className="text-sm">LLM Runtime</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Local</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">APIs Used</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">0 Paid</div>
                </div>
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div variants={staggerItem}>
              <div className="relative">
                <ImageWithSkeleton
                  src="/projects/uwindsor rag bot  (1).png"
                  alt="UWindsor RAG Bot Interface"
                  className="w-full rounded-2xl shadow-2xl"
                  skeletonClassName="rounded-2xl aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Problem & Solution */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* The Problem */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h2 className="text-3xl font-black text-gray-900">The Problem</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  UWindsor&apos;s website is spread across hundreds of pages, PDFs, and nested links. Students often
                  have to manually dig through multiple tabs just to answer simple questions about deadlines, residence,
                  or program rules.
                </p>
                <p>
                  Generic AI models like ChatGPT don&apos;t have access to this internal structure and frequently{" "}
                  <span className="font-semibold text-gray-900">hallucinate dates or outdated information</span>, which
                  is unacceptable for decisions like course drops or visa-impacting deadlines.
                </p>
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div variants={staggerItem} className="space-y-6">
              <h2 className="text-3xl font-black text-gray-900">The Engineering Solution</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I built a dedicated Retrieval-Augmented Generation (RAG) system that treats the official UWindsor site
                  as the single source of truth and keeps{" "}
                  <span className="font-semibold text-gray-900">all data and inference fully local</span>.
                </p>
                <p>
                  Instead of guessing, the bot retrieves the exact pages that mention a policy or date, passes them to a
                  local Qwen model, and returns answers with citations so students can verify every response.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* RAG Pipeline */}
      <motion.section
        id="pipeline"
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">RAG Pipeline</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end pipeline from sitemap filtering to local LLM inference, optimized for privacy and accuracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8">
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Technical Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built entirely on open-source tools to keep everything local, transparent, and reproducible.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="justify-center py-2 border-gray-300 text-gray-700 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl px-8 text-center">
          <motion.div variants={staggerItem} className="space-y-8">
            <h2 className="text-4xl font-black mb-4">Open-Source UWindsor AI Advisor</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              This project demonstrates end-to-end RAG engineering — from web scraping and vector search to local LLM
              orchestration and a production-ready chat interface.
            </p>

            <div className="flex gap-4 justify-center">
              <EnhancedButton
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
                href="https://github.com/arvnd-rdy/Uwindsor_Ragbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Explore Code
              </EnhancedButton>
              <EnhancedButton
                size="lg"
                variant="outline"
                className="border-gray-500 text-white hover:bg-gray-800 px-8 py-3"
                href="https://github.com/arvnd-rdy/Uwindsor_Ragbot#readme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Read Setup Guide
              </EnhancedButton>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default UWindsorRagBot;

