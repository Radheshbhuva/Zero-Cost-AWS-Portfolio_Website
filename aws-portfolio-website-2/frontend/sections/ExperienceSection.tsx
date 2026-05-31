import { FiCheck, FiUsers } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { experience } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-surface dark:bg-slate-900">
      <Container>
        <SectionHeading eyebrow="Experience" title="Hands-on coordination experience" />
        <div className="mx-auto max-w-4xl">
          {experience.map((item) => (
            <AnimatedCard key={item.title} className="overflow-hidden">
              <div className="grid gap-0 md:grid-cols-[0.7fr_1.3fr]">
                <div className="bg-primary p-7 text-white dark:bg-slate-950">
                  <FiUsers aria-hidden="true" className="text-3xl text-accent" />
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-accent">{item.category}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold">{item.title}</h3>
                </div>
                <div className="p-7">
                  <ul className="grid gap-4">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3 text-slate-700 dark:text-slate-200">
                        <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-primary">
                          <FiCheck aria-hidden="true" className="text-xs" />
                        </span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
