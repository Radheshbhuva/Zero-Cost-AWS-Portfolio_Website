import { FiCalendar, FiCheckCircle, FiCompass, FiTarget } from 'react-icons/fi';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { areasOfInterest, timeline } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section id="journey" className="section-padding bg-slate-900 text-white dark:bg-slate-950 transition-colors" aria-labelledby="journey-title">
      <Container>
        <SectionHeading
          id="journey-title"
          eyebrow="Milestones & Timeline"
          title="Engineering Journey & Career Progression"
          description="A structured timeline of academic preparation, project milestones, and practical cloud infrastructure experience."
          inverted
        />

        {/* Timeline List */}
        <div className="mx-auto max-w-3xl space-y-6">
          {timeline.map((item, index) => (
            <div key={item.title} className="relative pl-8 sm:pl-10">
              {/* Connector line */}
              {index < timeline.length - 1 ? (
                <div
                  className="absolute left-3.5 top-6 h-full w-0.5 bg-slate-800 dark:bg-slate-800"
                  aria-hidden="true"
                />
              ) : null}

              {/* Marker icon */}
              <div className="absolute left-0 top-1.5 grid size-7 place-items-center rounded-full bg-teal-500/20 text-teal-400 ring-4 ring-slate-900 dark:ring-slate-950">
                <FiCheckCircle className="text-xs" aria-hidden="true" />
              </div>

              {/* Card content */}
              <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700/60 pb-3">
                  <span className="rounded-md bg-teal-500/10 px-2.5 py-0.5 text-xs font-bold text-teal-300">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <FiCalendar aria-hidden="true" />
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-teal-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Interest Banner */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-teal-500/20 text-teal-400">
              <FiTarget aria-hidden="true" className="text-lg" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Areas of Technical Interest
              </h3>
              <p className="text-xs text-slate-400">
                Core engineering domains targeted for full-stack and cloud internship opportunities
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {areasOfInterest.map((interest) => (
              <span
                key={interest}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-teal-500/60 hover:text-white"
              >
                <FiCompass className="text-teal-400 text-xs" />
                {interest}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
