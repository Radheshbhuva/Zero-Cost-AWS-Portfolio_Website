import { ExternalLink } from 'lucide-react'
import { projects } from '../../data/portfolio'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export const Projects = () => (
  <section
    id="projects"
    className="py-16 sm:py-20"
    aria-labelledby="projects-title"
  >
    <Container>
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        title="Selected learning projects"
        description="Focused projects that show responsive design, frontend fundamentals, and cloud deployment curiosity."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1}>
            <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-ink-900">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-ink-900 dark:text-white">
                  {project.title}
                </h3>
                <ExternalLink
                  className="mt-1 shrink-0 text-ink-500"
                  size={20}
                  aria-hidden="true"
                />
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-ink-500 dark:text-slate-400">
                {project.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Project technologies">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-sky-950/60 dark:text-sky-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
)
