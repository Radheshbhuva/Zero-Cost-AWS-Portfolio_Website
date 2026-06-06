import { FiCheckCircle } from 'react-icons/fi';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { timeline } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section id="journey" className="section-padding bg-primary text-white dark:bg-slate-950" aria-labelledby="journey-title">
      <Container>
        <SectionHeading
          id="journey-title"
          eyebrow="Experience & Learning"
          title="Education, milestones, and AWS journey"
          description="A concise timeline built for recruiters who want to understand current direction, not just current tools."
          inverted
        />
        <div className="mx-auto max-w-4xl">
          {timeline.map((item, index) => (
            <article key={item.title} className="relative border-l border-white/15 pb-8 pl-8 last:pb-0">
              <span className="absolute -left-3 top-1 grid size-6 place-items-center rounded-full bg-accent text-primary">
                <FiCheckCircle aria-hidden="true" className="text-sm" />
              </span>
              <div className="rounded-lg border border-white/10 bg-white/8 p-6 shadow-lg backdrop-blur">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-lg bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">{item.category}</span>
                  <span className="text-sm font-bold text-slate-300">{item.period}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-200">{item.description}</p>
                <ul className="mt-4 grid gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-semibold text-slate-200">
                      <FiCheckCircle aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {index < timeline.length - 1 ? null : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
