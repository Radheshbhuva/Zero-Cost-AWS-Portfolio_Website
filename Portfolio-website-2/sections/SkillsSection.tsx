import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { skillGroups } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Recruitment-ready strengths with business discipline"
          description="A balanced skill set across HR coordination, computer proficiency, and professional execution."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <AnimatedCard key={group.title} delay={index * 0.08} className="p-6">
                <div className="mb-5 flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-lg bg-primary text-accent dark:bg-white">
                    <Icon aria-hidden="true" className="text-xl" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-primary dark:text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
