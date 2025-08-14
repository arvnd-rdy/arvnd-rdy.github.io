import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Award, Book, GraduationCap, ExternalLink, Code2, Database, Zap, Users } from "lucide-react";

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const education = [
    {
      degree: "Master's in Applied Computing",
      school: "University of Windsor",
      year: "2024 - 2026",
      status: "Current",
      type: "Master's Degree"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Lovely Professional University",
      year: "2019 - 2023",
      status: "Completed",
      grade: "8.6 CGPA",
      type: "Bachelor's Degree"
    }
  ];

  const skills = [
    "Full Stack Development",
    "AI & Machine Learning",
    "Cloud Architecture",
    "DevOps & CI/CD",
    "Mobile Development",
    "Data Science",
    "UI/UX Design",
    "Technical Leadership"
  ];

  const interests = [
    "Quantum Computing",
    "Space Technology",
    "Open Source",
    "Photography",
    "Hiking",
    "Cooking",
    "Reading",
    "Travel"
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar },
    { label: "Projects Built", value: "15+", icon: Award },
    { label: "Technologies", value: "25+", icon: Book },
    { label: "Current Location", value: "Canada", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-white py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto max-w-7xl px-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <motion.h1 
            className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={staggerItem}>THE STORY BEHIND THE CODE</motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed max-w-3xl"
            variants={staggerItem}
          >
            From curious kid taking apart electronics to building enterprise applications—
            discover the journey, philosophy, and passion that drives my work as a Full Stack & AI/ML Developer.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        className="container mx-auto max-w-7xl px-8 py-16"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Hero Introduction */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <motion.div 
                className="sticky top-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/hero.png"
                  alt="Arvind Reddy - Full Stack & AI/ML Developer"
                  className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                />
                <div className="mt-6 text-center">
                  <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                    👋 Available for opportunities
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                  Driven by curiosity and a love for clean code
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  I'm Arvind Reddy, and I build user-friendly experiences that solve real problems, 
                  one line of code at a time.
                </p>
              </div>
              
              {/* Quick stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-black text-gray-900">2+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-black text-gray-900">15+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Projects Built</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-black text-gray-900">3</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Featured Projects</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                  <div className="text-3xl font-black text-gray-900">🇨🇦</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Based in Canada</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* My Story - Timeline Layout */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-16 text-center uppercase tracking-wide">My Journey</h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              <div className="space-y-12">
                {/* Childhood Curiosity */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-white text-xl">🔧</span>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">The Spark</h3>
                    <p className="text-gray-600 leading-relaxed">
                      My journey into technology started with a simple fascination: <strong className="text-gray-900">how do things work?</strong> 
                      As a kid, I was the one taking apart old electronics just to see the circuits inside, much to my parents' dismay. 
                      That curiosity never left me; it just evolved from hardware to software.
                    </p>
                  </div>
                </div>

                {/* College Discovery */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">The Discovery</h3>
                    <p className="text-gray-600 leading-relaxed">
                      During my Bachelor's in Computer Science, I discovered the magic of turning ideas into reality through code. 
                      But what really hooked me was seeing how technology could solve real-world problems. Whether it was automating 
                      a tedious process or creating an intuitive interface that just <em>makes sense</em>, I found my passion in 
                      building solutions that genuinely help people.
                    </p>
                  </div>
                </div>

                {/* Current Focus */}
                <div className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center relative z-10">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">The Mission</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Today, as I pursue my Master's in Applied Computing at the University of Windsor, I channel that same curiosity 
                      into creating <strong className="text-gray-900">clean, efficient, and scalable applications</strong>. From automating job searches 
                      with Python to building enterprise consulting platforms with React and Node.js, I love the challenge of 
                      turning complex problems into elegant solutions.
                    </p>
                    <div className="bg-gray-50 border-l-4 border-gray-900 p-4 rounded-r-lg">
                      <p className="text-gray-700 font-medium italic">
                        "For me, there's no better feeling than solving a complex puzzle with code and seeing it come to life to help a user."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* My Philosophy & Process */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-wide">How I Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My approach to development is rooted in understanding problems deeply and crafting solutions that last.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-xl">1</span>
                </div>
                <h3 className="font-black text-gray-900 mb-2 uppercase tracking-wide">Understand</h3>
                <p className="text-gray-600 text-sm">Deep dive into the real problem behind the requirement</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-xl">2</span>
                </div>
                <h3 className="font-black text-gray-900 mb-2 uppercase tracking-wide">Research</h3>
                <p className="text-gray-600 text-sm">Explore solutions, technologies, and best practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-xl">3</span>
                </div>
                <h3 className="font-black text-gray-900 mb-2 uppercase tracking-wide">Build</h3>
                <p className="text-gray-600 text-sm">Create clean, maintainable solutions with user focus</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-xl">4</span>
                </div>
                <h3 className="font-black text-gray-900 mb-2 uppercase tracking-wide">Iterate</h3>
                <p className="text-gray-600 text-sm">Continuously improve based on feedback and learning</p>
              </div>
            </div>

            {/* Philosophy Cards */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-wide">Clean Code</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I write code that's readable and maintainable. Clean code isn't just about following conventions—
                  it's about respecting the next developer who will work with it.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-wide">User-First</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every technical decision starts with understanding user needs. I focus on solving real problems 
                  that genuinely help people in their daily lives.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-4 uppercase tracking-wide">Continuous Learning</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Technology evolves rapidly. I stay curious, embrace new tools and methodologies, 
                  and believe every project teaches something valuable.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats Grid */}
        <motion.section className="mb-16" variants={fadeInUp}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-gray-600" />
                <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-wide">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-5 h-5 text-gray-600" />
                      <Badge variant="outline" className="border-gray-300 text-gray-700">
                        {edu.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-wide">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 font-medium mb-2">{edu.school}</p>
                    {edu.grade && (
                      <p className="text-sm text-gray-500">Grade: {edu.grade}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={edu.status === 'Current' ? 'default' : 'secondary'}
                      className={edu.status === 'Current' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}
                    >
                      {edu.status}
                    </Badge>
                    <p className="text-sm text-gray-500 mt-2">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills & Expertise */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-16 text-center uppercase tracking-wide">Skills & Expertise</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Skills */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-wide">Frontend Development</h3>
                      <p className="text-gray-600 text-sm">Building responsive and interactive user interfaces</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-300 text-gray-700">React</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">TypeScript</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Tailwind CSS</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Next.js</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Framer Motion</Badge>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-wide">Backend Development</h3>
                      <p className="text-gray-600 text-sm">Creating robust server-side applications and APIs</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Node.js</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Python</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">SQL Server</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Express.js</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Socket.IO</Badge>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gray-900 rounded-lg p-3">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-wide">Automation & Tools</h3>
                      <p className="text-gray-600 text-sm">Automating processes and building efficient tools</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Selenium</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Web Scraping</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">APIs</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Git</Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Docker</Badge>
                  </div>
                </div>
              </div>

              {/* Right Column - Philosophy */}
              <div className="space-y-8">
                <div className="bg-gray-900 rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-wide">My Philosophy</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2">Code Quality</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        I'm a strong advocate for writing readable, maintainable code. Clean code isn't just 
                        about following conventions—it's about respecting the next developer.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Problem-First Approach</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        I start by understanding the real problem behind the technical requirement. 
                        Then I research, prototype, and iterate with user needs first.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Continuous Learning</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Technology evolves rapidly, and I believe in staying curious and adapting. 
                        Every project teaches me something new.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wide">Current Focus</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-600">Master's in Applied Computing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-600">Full-Stack Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-600">AI/ML Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-600">Process Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Beyond the Code */}
        <motion.section className="mb-20" variants={fadeInUp}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-gray-900 mb-16 text-center uppercase tracking-wide">Beyond the Code</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Personal Interests */}
              <div className="lg:col-span-2 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-wide">
                  What I Love Doing
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  When I'm not at my keyboard, you can usually find me exploring new hiking trails around Windsor, 
                  experimenting with photography to capture the perfect shot, or getting lost in a good sci-fi novel. 
                  I'm also passionate about cooking—there's something therapeutic about following a recipe and creating 
                  something delicious from scratch (much like coding, actually!).
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {interests.map((interest, index) => (
                    <div key={interest} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl mb-2">
                        {interest === 'Photography' && '📸'}
                        {interest === 'Hiking' && '🥾'}
                        {interest === 'Cooking' && '👨‍🍳'}
                        {interest === 'Reading' && '📚'}
                        {interest === 'Travel' && '✈️'}
                        {interest === 'Quantum Computing' && '⚛️'}
                        {interest === 'Space Technology' && '🚀'}
                        {interest === 'Open Source' && '💻'}
                      </div>
                      <div className="text-sm font-medium text-gray-700">{interest}</div>
                    </div>
                  ))}
                </div>

                {/* Fun Fact */}
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-900">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-900 rounded-full p-2 flex-shrink-0">
                      <span className="text-white text-lg">💡</span>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 mb-2 uppercase tracking-wide">Fun Fact</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        I once built a Python script to automatically track and notify me of job postings 
                        because I was tired of missing opportunities—and it actually helped me land interviews! 
                        Sometimes the best solutions come from personal frustrations. That project is now featured 
                        in my portfolio as the "Job Monitor Bot."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spotify Now Playing */}
              <div className="bg-gray-900 rounded-lg p-6 text-white">
                <h3 className="text-lg font-black mb-4 uppercase tracking-wide flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Now Playing
                </h3>
                
                {/* Spotify Embed */}
                <div className="bg-black/30 rounded-lg p-4 mb-4">
                  <iframe 
                    src="https://open.spotify.com/embed/track/4iV5W9uYEdYUVa79Axb7Rh?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  Music fuels my coding sessions. Currently vibing to some lo-fi beats while working on projects.
                </p>
                
                <div className="flex items-center gap-2 text-green-400 text-sm mt-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Live from Spotify
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="text-center bg-gray-900 rounded-lg p-12 text-white" variants={fadeInUp}>
          <h2 className="text-3xl font-black mb-6">
            Think We'd Be a Good Fit?
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto text-lg">
            I'm always excited to collaborate on projects that challenge me to grow and create meaningful impact. 
            Whether you're looking for a full-stack developer, need automation solutions, or want to discuss 
            the latest in AI/ML, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg">
                Let's Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium"
              >
                Check Out My Work
              </Button>
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-gray-400 text-sm">
              Want the full details? 
              <Button 
                variant="link" 
                className="text-white hover:text-gray-200 p-0 ml-1 underline"
                onClick={() => {/* Add resume download logic */}}
              >
                Download my resume
              </Button>
            </p>
          </div>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default About;
