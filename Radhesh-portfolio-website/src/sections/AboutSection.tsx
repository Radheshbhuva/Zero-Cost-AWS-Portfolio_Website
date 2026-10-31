import { FiCheckCircle, FiCloud, FiCode, FiLayers, FiServer } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { education } from '../data/portfolio';

const corePillars = [
  {
    title: 'Primary Domain: Full-Stack & Backend',
    icon: FiServer,
    text: 'Building structured, testable web systems with React, TypeScript, and Node.js/Express. Strong focus on REST API contracts, database schema design, and modular monorepos.',
  },
  {
    title: 'Secondary Domain: AWS Cloud & DevOps',
    icon: FiCloud,
    text: 'Hands-on exploration of AWS infrastructure (Amazon S3, EC2, CloudFront, Route 53, IAM), containerization using Docker, and automated CI/CD workflows via GitHub Actions.',
  },
  {
    title: 'Core Computer Engineering Foundation',
    icon: FiCode,
    text: 'Academic rigor in Data Structures & Algorithms, Object-Oriented Programming (C++, Java), Operating Systems, and Networking at Marwadi University.',
  },
  {
    title: 'Practical, Verifiable Engineering',
    icon: FiLayers,
    text: 'Commitment to real, working architectures without exaggerations. All projects feature clean separation of concerns, containerization, and documented cloud deployments.',
  },
];

export function AboutSection() {
  const edu = education[0];

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900 transition-colors" aria-labelledby="about-title">
      <Container>
        <SectionHeading
          id="about-title"
          eyebrow="Academic & Technical Background"
          title="Engineering Student Focused on Scalable Web & Cloud Systems"
          description="Positioned as a dedicated Computer Engineering undergraduate with verifiable hands-on project experience in full-stack engineering and cloud hosting."
        />

        {/* 4 Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <AnimatedCard key={pillar.title} delay={index * 0.06} className="p-6">
                <span className="grid size-11 place-items-center rounded-lg bg-teal-50 text-xl text-teal-700 dark:bg-slate-800 dark:text-accent">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {pillar.text}
                </p>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Education Highlight Card */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs dark:border-slate-800 dark:bg-slate-950/60 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-accent">
                Degree & Institution
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                {edu.institution}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-2xs dark:border-slate-800 dark:bg-slate-900">
                <p className="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Academic Performance
                </p>
                <p className="font-display text-lg font-bold text-teal-700 dark:text-accent">
                  {edu.result}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-2xs dark:border-slate-800 dark:bg-slate-900">
                <p className="text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Graduation Timeline
                </p>
                <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {edu.period}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {edu.detail}
          </p>

          {/* Relevant Coursework */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Relevant Academic Coursework
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {edu.coursework.map((course) => (
                <span
                  key={course}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-3xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  <FiCheckCircle className="text-teal-600 dark:text-accent" />
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
