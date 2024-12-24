import SectionIntersectionObserver from "@/components/SectionIntersectionObserver";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionIntersectionObserver hash="#home">
        <HeroSection />
      </SectionIntersectionObserver>
      <SectionIntersectionObserver hash="#projects">
        <ProjectsSection />
      </SectionIntersectionObserver>
      <TapeSection />
      <SectionIntersectionObserver hash="#about">
        <AboutSection />
      </SectionIntersectionObserver>
      <SectionIntersectionObserver hash="#contact">
        <ContactSection />
      </SectionIntersectionObserver>
      <Footer />
    </div>
  );
}
