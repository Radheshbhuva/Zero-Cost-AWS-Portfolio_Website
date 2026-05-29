import { Cloud, Code2, GraduationCap } from 'lucide-react'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const aboutCards = [
  {
    title: 'Computer Engineering Student',
    description:
      'Building a strong foundation in programming, systems, and practical problem solving.',
    icon: GraduationCap,
  },
  {
    title: 'Web Development',
    description:
      'Interested in creating clean, responsive, and accessible frontend experiences.',
    icon: Code2,
  },
  {
    title: 'Cloud Computing',
    description:
      'Exploring AWS basics and deployment concepts for modern web applications.',
    icon: Cloud,
  },
]

export const About = () => (
  <section id="about" className="py-16 sm:py-20" aria-labelledby="about-title">
    <Container>
      <SectionHeading
        id="about-title"
        eyebrow="About"
        title="A learner with a builder's mindset"
        description="I am studying Computer Engineering at Marwadi University with a CGPA of 7.35 and a growing interest in cloud computing and web development."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {aboutCards.map((card, index) => {
          const Icon = card.icon

          return (
            <Reveal key={card.title} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-ink-900">
                <Icon className="text-brand-600 dark:text-sky-300" size={28} />
                <h3 className="mt-5 text-lg font-semibold text-ink-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-500 dark:text-slate-400">
                  {card.description}
                </p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Container>
  </section>
)
