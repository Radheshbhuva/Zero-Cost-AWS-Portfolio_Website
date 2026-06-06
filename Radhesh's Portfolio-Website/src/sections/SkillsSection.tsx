import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { skillGroups } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900" aria-labelledby="skills-title">
      <Container>
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Technical skills mapped for cloud and software roles"
          description="Progress indicators show current working confidence, not a ceiling. The focus is practical growth, clean fundamentals, and deployment-ready habits."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <AnimatedCard key={group.title} delay={index * 0.08} className="p-6">
                <div className="mb-6 flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary text-accent dark:bg-white">
                    <Icon aria-hidden="true" className="text-xl" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary dark:text-white">{group.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{group.description}</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{skill.name}</span>
                        <span className="text-xs font-bold text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700" aria-hidden="true">
                        <div className="h-full rounded-full bg-accent" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
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
