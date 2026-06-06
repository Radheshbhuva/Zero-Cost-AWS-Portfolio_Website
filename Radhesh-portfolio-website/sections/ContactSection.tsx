import { FormEvent } from 'react';
import type { ReactNode } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { contact, profile } from '../data/portfolio';

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get('subject') || 'Portfolio opportunity');
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '');
    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailto);
  };

  return (
    <section id="contact" className="section-padding bg-primary text-white dark:bg-slate-950" aria-labelledby="contact-title">
      <Container>
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Ready for internship and entry-level engineering conversations"
          description="Use the form or direct links to contact Radhesh for cloud engineering, frontend, full-stack, or software engineering opportunities."
          inverted
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimatedCard className="!border-slate-700 !bg-secondary p-6 !text-white dark:!bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Contact Information</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-white">{profile.name}</h3>
            <p className="mt-2 font-semibold text-accent">{profile.title}</p>
            <div className="mt-6 space-y-4">
              <ContactLink icon={<FiMail aria-hidden="true" />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
              <ContactLink icon={<FiPhone aria-hidden="true" />} label="Phone" value={contact.phone} href={`tel:${contact.phone.replace(/\s+/g, '')}`} />
              <ContactLink icon={<FiMapPin aria-hidden="true" />} label="Location" value={contact.location} href="https://www.google.com/maps/search/Gujarat+India" />
              <ContactLink icon={<FiGithub aria-hidden="true" />} label="GitHub" value="Radheshbhuva" href={contact.githubUrl} />
              <ContactLink icon={<FiLinkedin aria-hidden="true" />} label="LinkedIn" value={contact.linkedinLabel} href={contact.linkedinUrl} />
            </div>
          </AnimatedCard>

          <AnimatedCard className="border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-field">
                  <span>Name</span>
                  <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
                </label>
                <label className="form-field">
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                </label>
              </div>
              <label className="form-field">
                <span>Subject</span>
                <input name="subject" type="text" required placeholder="Internship or software role opportunity" />
              </label>
              <label className="form-field">
                <span>Message</span>
                <textarea name="message" rows={5} required placeholder="Share role details, project feedback, or collaboration context." />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-bold text-primary transition hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                <FiSend aria-hidden="true" />
                Send Message
              </button>
            </form>
          </AnimatedCard>
        </div>
      </Container>
    </section>
  );
}

function ContactLink({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex gap-4 rounded-lg border border-white/15 p-4 transition hover:border-accent/60 hover:bg-white/8">
      <span className="mt-1 text-xl text-accent">{icon}</span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-300">{label}</span>
        <span className="mt-1 block break-words font-semibold text-white">{value}</span>
      </span>
    </a>
  );
}
