import { FiDownload } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-950">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Academic projects with business and analytical relevance"
          description="Research and analysis work that supports evidence-based thinking in business and HR contexts."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.08} className="p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-bold leading-snug text-primary dark:text-white">{project.title}</h3>
                <a
                  href={project.downloadHref}
                  download
                  className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-3 text-sm font-bold text-primary transition hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                  aria-label={`${project.downloadLabel}: ${project.title}`}
                >
                  <FiDownload aria-hidden="true" />
                  <span className="hidden sm:inline">PDF</span>
                </a>
              </div>
              <div className="space-y-5">
                <ProjectBlock label="Overview" text={project.description} />
                <div>
                  <p className="project-label">Skills Used</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.skillsUsed.map((skill) => (
                      <span key={skill} className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <ProjectBlock label="Learnings" text={project.learnings} />
                <ProjectBlock label="Professional Impact" text={project.impact} />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="project-label">{label}</p>
      <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}
