import { FiCheckCircle } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { skillCategories } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-slate-50/70 dark:bg-slate-950 transition-colors" aria-labelledby="skills-title">
      <Container>
        <SectionHeading
          id="skills-title"
          eyebrow="Technical Skills"
          title="Core Engineering & Cloud Competencies"
          description="Organized into verified technical domains. Categorized honestly based on practical project implementation and academic foundation, without arbitrary percentage ratings."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <AnimatedCard key={cat.title} delay={index * 0.05} className="flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-teal-50 text-lg text-teal-700 dark:bg-slate-800 dark:text-accent">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    {cat.note ? (
                      <span className="inline-block rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
                        {cat.note}
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="mt-5 flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-3xs transition hover:border-teal-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                    >
                      <span className="size-1.5 rounded-full bg-teal-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4 text-center text-xs text-slate-600 shadow-2xs dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400 sm:flex sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <FiCheckCircle className="text-teal-600 dark:text-accent text-sm shrink-0" />
            <span className="font-medium">
              Recruiter Transparency: Skills represent direct hands-on project implementation and coursework. No fabricated &ldquo;expert&rdquo; claims.
            </span>
          </div>
          <a
            href="#projects"
            className="mt-2 inline-block font-bold text-teal-700 hover:underline dark:text-accent sm:mt-0"
          >
            Review Project Proof &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}
