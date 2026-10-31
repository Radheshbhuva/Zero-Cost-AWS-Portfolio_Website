import { useMemo, useState } from 'react';
import {
  FiCheckCircle,
  FiClock,
  FiExternalLink,
  FiGithub,
  FiLayers,
} from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/portfolio';
import type { ProjectCategory } from '../types/portfolio';

const filterTabs: ProjectCategory[] = ['All', 'Full-Stack', 'Cloud & AWS', 'Frontend'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding bg-slate-50/70 dark:bg-slate-950 transition-colors" aria-labelledby="projects-title">
      <Container>
        <SectionHeading
          id="projects-title"
          eyebrow="Technical Projects"
          title="Verifiable Software & Cloud Implementations"
          description="Detailed breakdown of full-stack platforms, cloud deployments, and web systems. Every project reflects verified architecture and hands-on engineering contributions."
        />

        {/* Filter Tabs - Swipeable horizontally on smartphone viewports */}
        <div
          className="mb-6 sm:mb-8 flex overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-2 pb-2 -mx-4 sm:mx-0 px-4 sm:px-0"
          role="tablist"
          aria-label="Project category filters"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              className={`min-h-[42px] whitespace-nowrap rounded-lg px-3.5 py-2 text-xs sm:text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 shrink-0 ${
                activeFilter === tab
                  ? 'bg-slate-900 text-white shadow-xs dark:bg-teal-600'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700'
              }`}
              role="tab"
              aria-selected={activeFilter === tab}
            >
              {tab === 'All' ? `All Projects (${projects.length})` : tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isCompleted = project.status === 'Completed';

            return (
              <AnimatedCard key={project.id} delay={index * 0.05} className="flex flex-col p-4 sm:p-6 lg:p-7">
                {/* Header row: Status + Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 sm:pb-4 dark:border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] sm:text-xs font-bold ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300'
                      }`}
                    >
                      {isCompleted ? (
                        <FiCheckCircle aria-hidden="true" className="text-xs" />
                      ) : (
                        <FiClock aria-hidden="true" className="text-xs" />
                      )}
                      {project.status}
                    </span>

                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] sm:text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  {project.featured ? (
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-accent">
                      Featured
                    </span>
                  ) : null}
                </div>

                {/* Title & Subtitle */}
                <div className="mt-3.5 sm:mt-4">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-teal-700 dark:text-accent">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                {/* Technical Contributions */}
                <div className="mt-3.5 sm:mt-4 flex-1">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Technical Contributions:
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {project.contributions.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Summary Box */}
                <div className="mt-4 rounded-lg border border-slate-200/80 bg-slate-50 p-2.5 sm:p-3 text-[11px] sm:text-xs dark:border-slate-800 dark:bg-slate-900/60">
                  <span className="font-bold text-slate-700 dark:text-slate-200">
                    Architecture:{' '}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {project.architectureSummary}
                  </span>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Actions - Mobile stacked with full width, desktop inline */}
                <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-3xs transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      <FiGithub aria-hidden="true" />
                      <span>View GitHub Code</span>
                    </a>
                  ) : null}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                      rel={project.liveUrl.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg bg-teal-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-3xs transition hover:bg-teal-700"
                    >
                      <FiExternalLink aria-hidden="true" />
                      <span>Live Endpoint</span>
                    </a>
                  ) : null}

                  <a
                    href="#architecture"
                    className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    <FiLayers aria-hidden="true" />
                    <span>Architecture Pattern</span>
                  </a>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
