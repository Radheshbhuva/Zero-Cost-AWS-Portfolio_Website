import { AboutSection } from '../sections/AboutSection';
import { CertificationsSection } from '../sections/CertificationsSection';
import { ContactSection } from '../sections/ContactSection';
import { EducationSection } from '../sections/EducationSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { HeroSection } from '../sections/HeroSection';
import { InterestsSection } from '../sections/InterestsSection';
import { LanguagesSection } from '../sections/LanguagesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <LanguagesSection />
      <InterestsSection />
      <ContactSection />
    </main>
  );
}
