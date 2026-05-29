import { CalendarDays, School, Star } from 'lucide-react'
import { education } from '../../data/portfolio'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export const Education = () => (
  <section
    id="education"
    className="bg-white py-16 sm:py-20 dark:bg-ink-900/40"
    aria-labelledby="education-title"
  >
    <Container>
      <SectionHeading
        id="education-title"
        eyebrow="Education"
        title="Academic foundation"
        description="Currently pursuing computer engineering with a focus on software development fundamentals."
      />
      <Reveal>
        <article className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-ink-50 p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-ink-950">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-600 dark:text-sky-300">
                <School size={18} aria-hidden="true" />
                {education.institution}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-ink-900 dark:text-white">
                {education.degree}
              </h3>
            </div>
            <dl className="grid gap-3 text-sm text-ink-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} aria-hidden="true" />
                <dt className="sr-only">Graduation year</dt>
                <dd>Graduation Year: {education.graduationYear}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} aria-hidden="true" />
                <dt className="sr-only">CGPA</dt>
                <dd>CGPA: {education.cgpa}</dd>
              </div>
            </dl>
          </div>
        </article>
      </Reveal>
    </Container>
  </section>
)
