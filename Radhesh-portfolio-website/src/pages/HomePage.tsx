import { AboutSection } from '../sections/AboutSection';
import { ArchitectureSection } from '../sections/ArchitectureSection';
import { ContactSection } from '../sections/ContactSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { HeroSection } from '../sections/HeroSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ArchitectureSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}