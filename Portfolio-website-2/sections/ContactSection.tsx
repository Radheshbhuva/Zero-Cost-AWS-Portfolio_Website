import { FormEvent } from 'react';
import type { ReactNode } from 'react';
import { FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { contact, contactHighlights } from '../data/portfolio';

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get('subject') || 'Portfolio contact');
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '');
    const body = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');
    const gmailUrl = new URL('https://mail.google.com/mail/');

    gmailUrl.searchParams.set('view', 'cm');
    gmailUrl.searchParams.set('fs', '1');
    gmailUrl.searchParams.set('to', contact.email);
    gmailUrl.searchParams.set('su', subject);
    gmailUrl.searchParams.set('body', body);

    window.location.assign(gmailUrl.toString());
  };

  return (
    <section id="contact" className="section-padding bg-primary text-white dark:bg-slate-950">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect talent with opportunity"
          description="Available for HR coordination, recruitment support, talent acquisition conversations, and professional networking."
          inverted
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <AnimatedCard className="!border-slate-700 !bg-secondary p-6 !text-white dark:!bg-slate-900">
            <div className="space-y-5">
              <ContactLink icon={<FiMail aria-hidden="true" />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
              <ContactLink icon={<FiPhone aria-hidden="true" />} label="Phone" value={contact.phone} href={`tel:${contact.phone.replace(/\s+/g, '')}`} />
              <ContactLink icon={<FiMapPin aria-hidden="true" />} label="Location" value={contact.location} href="https://www.google.com/maps/search/Surat+Rajkot+Gujarat+India" />
              <ContactLink icon={<FiLinkedin aria-hidden="true" />} label="LinkedIn" value={contact.linkedinLabel} href={contact.linkedinUrl} />
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {contactHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <span key={highlight.label} className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white">
                    <Icon aria-hidden="true" className="text-accent" />
                    {highlight.label}
                  </span>
                );
              })}
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
                <input name="subject" type="text" required placeholder="Recruitment opportunity" />
              </label>
              <label className="form-field">
                <span>Message</span>
                <textarea name="message" rows={5} required placeholder="Write your message" />
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
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-300">{label}</span>
        <span className="mt-1 block font-semibold text-white">{value}</span>
      </span>
    </a>
  );
}
