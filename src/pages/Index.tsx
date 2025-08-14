
import { ScrollProgress } from "@/components/ScrollProgress";
import ContextualGreeting from "@/components/ContextualGreeting";
import SoundToggle from "@/components/SoundToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="overflow-y-auto">
      <ScrollProgress />
      <ContextualGreeting />
      <SoundToggle />
      <section><HeroSection /></section>
      <section><AboutSection /></section>
      <section><SkillsSection /></section>
      <section><ProjectsSection /></section>
      <section><ExperienceSection /></section>
      <section><ContactSection /></section>
    </div>
  );
};

export default Index;
