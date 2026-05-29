import { skills } from '../../data/portfolio'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export const Skills = () => (
  <section
    id="skills"
    className="bg-white py-16 sm:py-20 dark:bg-ink-900/40"
    aria-labelledby="skills-title"
  >
    <Container>
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="Technologies I work with"
        description="A practical mix of frontend tools, programming languages, backend fundamentals, and cloud basics."
      />
      <Reveal>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="rounded-md border border-slate-200 bg-ink-50 p-4 text-center shadow-sm dark:border-slate-800 dark:bg-ink-950"
            >
              <span className="block text-base font-semibold text-ink-900 dark:text-white">
                {skill.name}
              </span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-wide text-ink-500 dark:text-slate-500">
                {skill.category}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>
  </section>
)
