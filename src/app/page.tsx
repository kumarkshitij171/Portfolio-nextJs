import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <ProjectSection />

      <ContactMe />
    </div>
  );
}
