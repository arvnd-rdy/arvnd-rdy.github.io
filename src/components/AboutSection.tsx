import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { downloadResume } from "@/utils/downloadResume";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/utils/animations";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const AboutSection = () => {
  const { ref, isInView } = useScrollAnimation();

  // Mouse tracking for 3D tilt — mirrors hero
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <motion.section
      id="about"
      className="bg-orange-50/40 dark:bg-black flex flex-col justify-center transition-colors duration-300 relative py-12 sm:py-16 scroll-mt-20 sm:scroll-mt-28"
    >
      <div className="absolute inset-0 brand-grid brand-grid-fade pointer-events-none" />

      <motion.div
        ref={ref}
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section label */}
        <motion.p
          className="text-orange-600 dark:text-orange-500 font-semibold text-sm sm:text-base tracking-tight mb-3 sm:mb-4"
          variants={fadeInUp}
        >
          About Me
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* Right — text */}
          <motion.div
            className="space-y-5 sm:space-y-6 order-2 lg:order-2"
            variants={fadeInRight}
          >
            <motion.h2
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-950 dark:text-white leading-none tracking-tight"
              variants={staggerItem}
            >
              Who I Am
            </motion.h2>

            <motion.div
              className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-[15px] md:text-base max-w-lg"
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem}>
                I'm an AI/ML engineer — which is a polite way of saying I build RAG
                systems, multi-agent workflows, and ML applications, then stay until
                the eval metrics stop lying to me. Python and FastAPI are where I
                spend most of my time; curiosity is what keeps me there.
              </motion.p>
              <motion.p variants={staggerItem}>
                I care about hybrid retrieval, solid evaluation, and shipping things
                that work outside a notebook. I've picked up full-stack development
                and automation along the way, because in the real world your model
                still needs an API, a database, and the occasional human who can
                use it without a PhD.
              </motion.p>
              <motion.p variants={staggerItem}>
                I'm open to full-time roles where the problems are hard and the
                team takes the craft seriously. I still mess around with game dev
                and 3D on the side — mostly to remind myself that not every bug
                lives in a vector database.
              </motion.p>
              <motion.p
                variants={staggerItem}
                className="text-neutral-900 dark:text-neutral-200 font-medium text-xs sm:text-sm"
              >
                Right now, I am looking for a full-time opportunity.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col xs:flex-row gap-3 pt-2"
              variants={staggerContainer}
            >
              <Button
                onClick={downloadResume}
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg border border-orange-700 text-xs sm:text-sm font-bold rounded-none"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-2 border-neutral-950 dark:border-white text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 px-5 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 text-xs sm:text-sm font-bold rounded-none bg-transparent w-full xs:w-auto"
                >
                  Know More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Left — photo with tilt + glow */}
          <motion.div
            className="flex justify-center lg:justify-start order-1 lg:order-1"
            variants={fadeInLeft}
          >
            <div
              ref={cardRef}
              className="relative group"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => { setIsHovering(false); setMousePosition({ x: 0, y: 0 }); }}
              style={{ perspective: 1200 }}
            >
              {/* Orange radial glow */}
              <div
                className="absolute -inset-6 sm:-inset-8 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgba(234,88,12,0.45) 0%, rgba(234,88,12,0.08) 55%, transparent 75%)",
                }}
              />

              <motion.div
                className="relative overflow-hidden rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.55)]"
                animate={{
                  rotateX: isHovering ? mousePosition.y * -6 : 0,
                  rotateY: isHovering ? mousePosition.x * 6 : 0,
                  scale: isHovering ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/hero.png"
                  alt="Aravind Reddy"
                  className="w-[240px] h-[360px] xs:w-[280px] xs:h-[420px] sm:w-[320px] sm:h-[480px] md:w-[350px] md:h-[520px] lg:w-[384px] lg:h-[560px] object-cover object-[center_15%] block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
