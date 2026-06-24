export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  year: string;
  status?: string;
  stars?: number;
  featured?: boolean;
};

export const allProjects: Project[] = [
  {
    id: 5,
    title: "UWindsor RAG Bot",
    description:
      "Local, privacy-first AI advisor for the University of Windsor. Scrapes ~200 official pages, builds a vector knowledge base, and answers questions with cited context — no paid APIs.",
    image: "/projects/uwindsor rag bot  (1).png",
    tags: ["Python", "FastAPI", "ChromaDB", "Ollama", "RAG"],
    category: "AI",
    demoUrl: "/projects/uwindsor-rag-bot",
    githubUrl: "https://github.com/arvnd-rdy/Uwindsor_Ragbot",
    year: "2025",
    status: "Live",
    stars: 10,
    featured: true,
  },
  {
    id: 1,
    title: "Job Monitor Bot",
    description:
      "Automated job application tracker that monitors Walmart and Loblaw careers 24/7, sending instant Telegram notifications when new positions are posted.",
    image: "/projects/jobmonitor1.png",
    tags: ["Python", "Selenium", "Telegram API", "Automation"],
    category: "Automation",
    demoUrl: "/projects/job-monitor-bot",
    githubUrl: "https://github.com/arvnd-rdy/walmart_and_lowblow_jobmonitor",
    year: "2024",
    status: "Live",
    stars: 45,
    featured: true,
  },
  {
    id: 3,
    title: "Insight Advantage",
    description:
      "Professional consulting platform connecting organizations with skilled consultants. Real-time messaging, AI-powered matching, and payment integration.",
    image: "/projects/advatage_match.png",
    tags: ["React", "Node.js", "SQL Server", "Socket.IO", "Stripe"],
    category: "Full Stack",
    demoUrl: "/projects/insight-advantage",
    githubUrl: "https://github.com/arvnd-rdy/Advantage_match",
    year: "2024",
    status: "Live",
    stars: 23,
    featured: true,
  },
  {
    id: 2,
    title: "Interactive Portfolio",
    description:
      "Modern, responsive portfolio built with React and TypeScript. Features smooth animations, dark/light themes, and modular component architecture.",
    image: "/projects/portfolio1.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    demoUrl: "/projects/portfolio-website",
    githubUrl: "https://github.com/arvnd-rdy/arvnd-rdy.github.io",
    year: "2024",
    status: "Live",
    stars: 8,
    featured: true,
  },
  {
    id: 4,
    title: "EcoArt Market",
    description:
      "Sustainable art marketplace where artists showcase and sell eco-friendly artwork. Features authentication, order management, and payment processing.",
    image: "/projects/ecoart1.png",
    tags: ["Django", "Python", "Bootstrap", "SQLite"],
    category: "Full Stack",
    demoUrl: "/projects/ecoart-market",
    githubUrl: "https://github.com/arvnd-rdy/Eco-art",
    year: "2024",
    status: "Live",
    stars: 18,
    featured: true,
  },
];

export const projectCategories = ["All", "AI", "Automation", "Frontend", "Full Stack"] as const;
