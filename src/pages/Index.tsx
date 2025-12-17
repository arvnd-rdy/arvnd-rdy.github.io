
import { lazy, Suspense } from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import ContextualGreeting from "@/components/ContextualGreeting";
import SoundToggle from "@/components/SoundToggle";
import HeroSection from "@/components/HeroSection";

// Lazy load sections below the fold for better initial load performance
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));


const ContactSection = lazy(() => import("@/components/ContactSection"));

// Simple loading placeholder for lazy-loaded sections
const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

const Index = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <ScrollProgress />
      <ContextualGreeting />
      <SoundToggle />
      <section><HeroSection /></section>
      <Suspense fallback={<SectionLoader />}>
        <section><AboutSection /></section>
        <section><SkillsSection /></section>
        <section><ProjectsSection /></section>
        <section><ExperienceSection /></section>


        <section><ContactSection /></section>
      </Suspense>
    </div>
  );
};

export default Index;
