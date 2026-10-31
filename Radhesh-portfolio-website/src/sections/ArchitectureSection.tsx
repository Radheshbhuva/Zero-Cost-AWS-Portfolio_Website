import { useState } from 'react';
import { FiArrowRight, FiCloud, FiLayers } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { architectureHighlights } from '../data/portfolio';

export function ArchitectureSection() {
  const [selectedArchId, setSelectedArchId] = useState(architectureHighlights[0].id);
  const activeArch = architectureHighlights.find((a) => a.id === selectedArchId) || architectureHighlights[0];

  return (
    <section id="architecture" className="section-padding bg-white dark:bg-slate-900 transition-colors" aria-labelledby="architecture-title">
      <Container>
        <SectionHeading
          id="architecture-title"
          eyebrow="System Architecture & Cloud Patterns"
          title="Practical Engineering Design & Cloud Schemas"
          description="A deep-dive into the architectural decisions, data flows, and infrastructure patterns behind my core full-stack and cloud projects."
        />

        {/* Blueprint Selector - Horizontal swipeable on smartphones, centered on desktop */}
        <div
          className="mb-6 sm:mb-8 flex overflow-x-auto no-scrollbar sm:flex-wrap sm:justify-center gap-2 pb-2 px-1 -mx-4 sm:mx-0 px-4 sm:px-0"
          role="tablist"
          aria-label="Architecture blueprints"
        >
          {architectureHighlights.map((arch) => (
            <button
              key={arch.id}
              type="button"
              onClick={() => setSelectedArchId(arch.id)}
              className={`min-h-[42px] whitespace-nowrap rounded-lg px-3.5 py-2 text-xs sm:text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 shrink-0 ${
                selectedArchId === arch.id
                  ? 'bg-slate-900 text-white shadow-xs dark:bg-teal-600'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700'
              }`}
              role="tab"
              aria-selected={selectedArchId === arch.id}
            >
              {arch.title.split(' ')[0]} Architecture
            </button>
          ))}
        </div>

        {/* Active Blueprint Display */}
        <AnimatedCard className="overflow-hidden border-slate-200 bg-slate-50/60 p-4 sm:p-6 lg:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-950/70">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-800">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
                <FiCloud aria-hidden="true" />
                {activeArch.service}
              </span>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {activeArch.title}
              </h3>
            </div>
            <div className="self-start sm:self-auto rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-[11px] sm:text-xs font-semibold text-slate-700 shadow-3xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              Pattern: {activeArch.pattern}
            </div>
          </div>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {activeArch.summary}
          </p>

          {/* Component Flow Cards */}
          <div className="mt-6 sm:mt-8">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Pipeline & Infrastructure Components
            </h4>
            <div className="mt-3 grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {activeArch.components.map((comp, idx) => (
                <div
                  key={comp}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3 sm:p-3.5 shadow-3xs dark:border-slate-800 dark:bg-slate-900"
                >
                  <span className="grid size-6 sm:size-7 shrink-0 place-items-center rounded-lg bg-slate-100 font-mono text-[11px] sm:text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    0{idx + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-slate-900 dark:text-white truncate sm:whitespace-normal">
                      {comp}
                    </p>
                    <p className="mt-0.5 text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                      Integrated Subsystem
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter Technical Callout */}
          <div className="mt-6 sm:mt-8 flex flex-col gap-2.5 rounded-xl border border-teal-200/80 bg-teal-50/50 p-3.5 sm:p-4 text-xs text-teal-900 dark:border-teal-900/40 dark:bg-teal-950/20 dark:text-teal-200 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <FiLayers className="text-teal-700 dark:text-accent shrink-0 text-base" />
              <span>
                Want to examine the code implementation behind these architecture patterns?
              </span>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 font-bold text-teal-800 hover:underline dark:text-accent"
            >
              <span>View Detailed Projects</span>
              <FiArrowRight />
            </a>
          </div>
        </AnimatedCard>
      </Container>
    </section>
  );
}
