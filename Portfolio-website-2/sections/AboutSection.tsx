import { FiCompass } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { values } from '../data/portfolio';

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="A people-first HR professional with a business mindset"
          description="I enjoy working with people, managing recruitment activities, coordinating events, and supporting organizational growth through effective talent management."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.08} className="p-6">
              <div className="mb-5 grid size-12 place-items-center rounded-lg bg-accent/10 text-accent">
                <FiCompass aria-hidden="true" className="text-xl" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary dark:text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
