import { contactLinks } from '../../data/portfolio'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export const Contact = () => (
  <section id="contact" className="py-16 sm:py-20" aria-labelledby="contact-title">
    <Container>
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Let's connect"
        description="Reach out for collaboration, project discussions, or frontend and cloud learning opportunities."
      />
      <Reveal>
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="flex items-center justify-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-ink-900 shadow-sm transition hover:-translate-y-1 hover:border-brand-500 hover:text-brand-600 hover:shadow-soft dark:border-slate-800 dark:bg-ink-900 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-200"
              >
                <Icon size={20} aria-hidden="true" />
                {link.label}
              </a>
            )
          })}
        </div>
      </Reveal>
    </Container>
  </section>
)
