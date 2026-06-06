import { useMemo, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/portfolio';
import type { ProjectCategory } from '../types/portfolio';

const filters: Array<'All' | ProjectCategory> = ['All', 'Web Development', 'Cloud', 'AWS', 'React'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter || project.techStack.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-950" aria-labelledby="projects-title">
      <Container>
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Premium project showcase for recruiters"
          description="Filter by role-relevant categories. The project card architecture is powered by typed data, so future work can be added without rewriting UI components."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg border px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeFilter === filter
                  ? 'border-accent bg-accent text-primary'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
              }`}
              role="tab"
              aria-selected={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.08} className="overflow-hidden">
              <img src={project.image} alt={`${project.title} project preview`} className="aspect-[16/9] w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-lg bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-teal-700 dark:text-accent">
                    {project.category}
                  </span>
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-primary dark:text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  {project.outcome}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a className="project-action" href={project.githubUrl} target="_blank" rel="noreferrer">
                    <FiGithub aria-hidden="true" />
                    GitHub Repository
                  </a>
                  <a className="project-action project-action-primary" href={project.liveUrl} target={project.liveUrl.startsWith('http') ? '_blank' : undefined} rel={project.liveUrl.startsWith('http') ? 'noreferrer' : undefined}>
                    <FiExternalLink aria-hidden="true" />
                    Live Demo
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
