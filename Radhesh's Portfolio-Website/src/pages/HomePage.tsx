import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { GitHubSection } from '../sections/GitHubSection';
import { HeroSection } from '../sections/HeroSection';
import { SkillsSection } from '../sections/SkillsSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <GitHubSection />
      <ContactSection />
    </main>
  );
}