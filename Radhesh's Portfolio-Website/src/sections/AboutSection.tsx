import { FiCloud, FiCode, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { education } from '../data/portfolio';

const focusAreas = [
  {
    title: 'Career Goals',
    icon: FiTarget,
    text: 'Prepare for internships and entry-level software roles by building practical projects, improving engineering fundamentals, and presenting work clearly to recruiters.',
  },
  {
    title: 'Cloud Computing Interest',
    icon: FiCloud,
    text: 'Learning AWS fundamentals through serverless architecture patterns, API integrations, and static website deployment workflows.',
  },
  {
    title: 'Software Development Interest',
    icon: FiCode,
    text: 'Focused on React, TypeScript, reusable components, clean UI implementation, and full-stack application structure.',
  },
  {
    title: 'Learning Journey',
    icon: FiTrendingUp,
    text: 'Combining academic computer engineering study with hands-on projects, GitHub practice, and recruiter-ready documentation.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950" aria-labelledby="about-title">
      <Container>
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="A practical engineer-in-training with a cloud-first mindset"
          description="Radhesh is building toward cloud engineering, frontend development, full-stack development, and software engineering internships."
        />
        <div className="grid gap-6 lg:grid-cols-4">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedCard key={item.title} delay={index * 0.07} className="p-6">
                <span className="grid size-12 place-items-center rounded-lg bg-primary text-xl text-accent dark:bg-white">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-primary dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </AnimatedCard>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Education</p>
          {education.map((item) => (
            <div key={item.degree} className="mt-3 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary dark:text-white">{item.degree}</h3>
                <p className="mt-1 font-semibold text-slate-700 dark:text-slate-200">{item.institution}</p>
                <p className="mt-3 max-w-4xl leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-left shadow-sm dark:bg-slate-950 lg:text-right">
                <p className="font-bold text-primary dark:text-white">{item.result}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
