import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, GraduationCap, Code2, Database, Zap, Users, Book, Download } from "lucide-react";
import { downloadResume } from "@/utils/downloadResume";
import Navbar from "@/components/Navbar";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "30+", label: "Technologies" },
  { value: "🇨🇦", label: "Based in Canada" },
];

const education = [
  {
    degree: "Master's in Applied Computing",
    school: "University of Windsor",
    year: "2024 – 2026",
    status: "Current",
    location: "Windsor, ON, Canada",
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Lovely Professional University",
    year: "2019 – 2023",
    status: "Completed",
    grade: "8.6 CGPA",
    location: "Punjab, India",
  },
];

const philosophy = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Clean Code",
    body: "I write code that's readable and maintainable — not just for me, but for whoever works on it next.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "User-First",
    body: "Every technical decision starts with understanding user needs. I build things that genuinely help people.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Always Learning",
    body: "Tech moves fast. I stay curious, embrace new tools, and every project teaches me something new.",
  },
];

const interests = [
  { emoji: "🎬", label: "Movies" },
  { emoji: "📺", label: "Web Series" },
  { emoji: "📖", label: "Web Novels" },
  { emoji: "🎮", label: "Gaming" },
  { emoji: "🤖", label: "AI Trends" },
  { emoji: "🌍", label: "Travel" },
];

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Navbar />

      {/* Hero header */}
      <div className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 bg-white dark:bg-neutral-950">
        <div className="absolute inset-0 brand-grid brand-grid-fade pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={staggerItem}
              className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3"
            >
              About Me
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight mb-6"
            >
              The Story Behind the Code
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed"
            >
              From curious kid taking apart electronics to building RAG systems and full-stack apps —
              here's the journey, the philosophy, and what drives me.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.main
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20 sm:space-y-24"
      >
        {/* Intro — photo + bio + stats */}
        <motion.section variants={fadeInUp}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Photo */}
            <motion.div variants={fadeInLeft} className="flex justify-center lg:justify-start">
              <div className="relative group" style={{ perspective: 1200 }}>
                <div
                  className="absolute -inset-6 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 60% 40%, rgba(234,88,12,0.4) 0%, rgba(234,88,12,0.05) 60%, transparent 75%)",
                  }}
                />
                <div className="relative overflow-hidden rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.55)]">
                  <img
                    src="/hero.png"
                    alt="Aravind Reddy"
                    className="w-[280px] sm:w-[340px] lg:w-[380px] object-cover block"
                    style={{ aspectRatio: "3/4" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* Bio + stats */}
            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed">
                <p>
                  Hey, I'm Aravind — an AI/ML Engineer and Full Stack Developer currently pursuing my
                  Master's in Applied Computing at the University of Windsor.
                </p>
                <p>
                  My journey started with a simple fascination: <span className="text-neutral-900 dark:text-white font-medium">how do things work?</span> As a kid
                  I was the one taking apart electronics just to see the circuits inside. That curiosity
                  never left — it just evolved from hardware to software, and now to AI systems.
                </p>
                <p>
                  Today I build RAG pipelines, multi-agent workflows, and full-stack applications.
                  I like making things that actually help people — whether it's a smart tool, a clean UI,
                  or an immersive 3D scene, I'm all in.
                </p>
                <p className="text-neutral-900 dark:text-neutral-200 font-medium text-xs sm:text-sm">
                  Open to full-time roles in AI/ML and Full Stack Engineering.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-neutral-950 dark:text-white mb-1">{s.value}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-1">
                <Button
                  onClick={downloadResume}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 text-xs sm:text-sm font-bold rounded-none border border-orange-700 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Link to="/">
                  <Button
                    variant="outline"
                    className="border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-none bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    View Projects
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section variants={fadeInUp}>
          <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3">
            Education
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white tracking-tight mb-8 sm:mb-10">
            Academic Background
          </h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-950 dark:text-white text-base sm:text-lg leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-500 text-sm font-medium mt-0.5">{edu.school}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                      {edu.grade && <span>· {edu.grade}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                  <span
                    className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                      edu.status === "Current"
                        ? "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
                    }`}
                  >
                    {edu.status}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section variants={fadeInUp}>
          <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3">
            How I Work
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white tracking-tight mb-8 sm:mb-10">
            My Philosophy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {philosophy.map((p, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 border-l-4 border-l-orange-500 bg-white dark:bg-neutral-950 hover:shadow-md hover:shadow-orange-100 dark:hover:shadow-orange-950/20 transition-all duration-300 p-6"
              >
                <div className="w-9 h-9 rounded-full bg-orange-600 flex items-center justify-center text-white mb-4">
                  {p.icon}
                </div>
                <h3 className="font-bold text-neutral-950 dark:text-white text-base mb-2">{p.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Beyond the code */}
        <motion.section variants={fadeInUp}>
          <p className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3">
            Outside Work
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white tracking-tight mb-6">
            Beyond the Code
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed max-w-2xl mb-8">
            When I'm not coding I'm binge-watching the latest web series, getting absorbed in a good movie,
            or diving into epic fantasy web novels. I love stories that challenge perspectives and spark creativity —
            they feed into how I think about building products.
          </p>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                <span>{item.emoji}</span>
                {item.label}
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section variants={fadeInUp}>
          <div className="rounded-2xl bg-neutral-950 dark:bg-neutral-900 border border-neutral-800 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Let's work together
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base">
                Open to full-time roles, collaborations, and interesting projects.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                onClick={downloadResume}
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 text-sm font-bold rounded-none border border-orange-700 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Link to="/#contact">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-neutral-950 px-5 py-2.5 text-sm font-bold rounded-none bg-transparent transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default About;
