import { FiHash } from 'react-icons/fi';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { interests } from '../data/portfolio';

export function InterestsSection() {
  return (
    <section className="section-padding bg-surface dark:bg-slate-900">
      <Container>
        <SectionHeading eyebrow="Interests" title="Professional interests that shape the brand" />
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
          {interests.map((interest) => (
            <span key={interest} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
              <FiHash aria-hidden="true" className="text-accent" />
              {interest}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
