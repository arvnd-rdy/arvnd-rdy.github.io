import { useEffect, useState } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = "";
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = element.id;
        }
      });

      // If we're at the very top, set to about
      if (window.scrollY < 100) {
        currentSection = "about";
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial call
    handleScroll();
    
    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return { activeSection, scrollToSection };
};