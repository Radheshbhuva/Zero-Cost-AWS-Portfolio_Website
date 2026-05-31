import { FiAward } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { certifications } from '../data/portfolio';

export function CertificationsSection() {
  return (
    <section className="section-padding bg-surface dark:bg-slate-900" aria-labelledby="certifications-title">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Practical credentials" />
        <div id="certifications-title" className="sr-only">
          Certifications
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {certifications.map((certification, index) => (
            <AnimatedCard key={certification.name} delay={index * 0.08} className="p-6">
              <FiAward aria-hidden="true" className="text-3xl text-accent" />
              <h3 className="mt-5 font-display text-xl font-bold text-primary dark:text-white">{certification.name}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{certification.detail}</p>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
