import { FormEvent, useState } from 'react';
import type { ReactNode } from 'react';
import {
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiLink,
} from 'react-icons/fi';
import { AnimatedCard } from '../components/AnimatedCard';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { contact, profile } from '../data/portfolio';
import { validateContactForm, type ContactFormData } from '../utils/validation';
import { openGmailWithFormData, getGmailFallbackUrl } from '../utils/gmail';

interface FormErrors {
  [key: string]: string | undefined;
}

export function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSuccess(false);
    setFallbackUrl('');

    const formData = new FormData(event.currentTarget);
    const contactData: ContactFormData = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      subject: String(formData.get('subject') || ''),
      message: String(formData.get('message') || ''),
    };

    const validationErrors = validateContactForm(contactData);

    if (validationErrors.length > 0) {
      const errorMap: FormErrors = {};
      validationErrors.forEach((error) => {
        errorMap[error.field] = error.message;
      });
      setErrors(errorMap);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const success = openGmailWithFormData({
      recipient: contact.email,
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
    });

    if (success) {
      setShowSuccess(true);
      setTimeout(() => {
        event.currentTarget.reset();
        setShowSuccess(false);
      }, 2500);
    } else {
      const url = getGmailFallbackUrl({
        recipient: contact.email,
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message,
      });
      setFallbackUrl(url);
      setErrors({
        general: 'Pop-up blocked. Click the button below to open Gmail or email directly.',
      });
    }

    setIsSubmitting(false);
  };

  const handleCopyLink = () => {
    if (fallbackUrl) {
      navigator.clipboard.writeText(fallbackUrl).then(() => {
        alert('Gmail compose link copied to clipboard!');
      }).catch(() => {
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Internship Inquiry')}`;
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-900 text-white dark:bg-slate-950 transition-colors" aria-labelledby="contact-title">
      <Container>
        <SectionHeading
          id="contact-title"
          eyebrow="Contact & Inquiries"
          title="Connect for Full-Stack & Cloud Engineering Roles"
          description="Available for Software Engineering, Full-Stack Development, Backend, and AWS Cloud Engineering internship discussions."
          inverted
        />

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Details Card */}
          <AnimatedCard className="!border-slate-800 !bg-slate-800/60 p-4 sm:p-6 lg:p-7 !text-white">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-400">
              Direct Contact
            </span>
            <h3 className="mt-1.5 sm:mt-2 font-display text-xl sm:text-2xl font-bold text-white">
              {profile.name}
            </h3>
            <p className="mt-0.5 text-xs sm:text-sm font-semibold text-teal-400">
              {profile.title}
            </p>

            <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
              <ContactLink
                icon={<FiMail aria-hidden="true" />}
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactLink
                icon={<FiPhone aria-hidden="true" />}
                label="Phone"
                value={contact.phone}
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              />
              <ContactLink
                icon={<FiMapPin aria-hidden="true" />}
                label="Location"
                value={contact.location}
                href="https://www.google.com/maps/search/Surat+Gujarat+India"
              />
              <ContactLink
                icon={<FiGithub aria-hidden="true" />}
                label="GitHub"
                value="RadheshBhuva"
                href={contact.githubUrl}
              />
              <ContactLink
                icon={<FiLinkedin aria-hidden="true" />}
                label="LinkedIn"
                value="radhesh-bhuva-8aa893319"
                href={contact.linkedinUrl}
              />
            </div>
          </AnimatedCard>

          {/* Form Card */}
          <AnimatedCard className="border-slate-200 bg-white p-4 sm:p-6 lg:p-7 dark:border-slate-800 dark:bg-slate-900">
            <form onSubmit={handleSubmit} className="grid gap-3.5 sm:gap-4" noValidate>
              {errors.general ? (
                <div
                  className="space-y-2.5 rounded-lg bg-red-50 p-3 text-xs text-red-700 dark:bg-red-950/30 dark:text-red-300"
                  role="alert"
                >
                  <p className="font-semibold">{errors.general}</p>
                  {fallbackUrl ? (
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md bg-red-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-red-700"
                    >
                      <FiLink aria-hidden="true" />
                      Copy Gmail Link
                    </button>
                  ) : null}
                </div>
              ) : null}

              {showSuccess ? (
                <div
                  className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-xs font-semibold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
                  role="status"
                >
                  <FiCheckCircle className="text-base shrink-0" />
                  <span>Redirecting to your mail client...</span>
                </div>
              ) : null}

              <div className="grid gap-3.5 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <span>Your Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base sm:text-sm font-normal text-slate-900 outline-none transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                  {errors.name ? (
                    <span className="text-[11px] font-medium text-red-500">{errors.name}</span>
                  ) : null}
                </label>

                <label className="grid gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <span>Your Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base sm:text-sm font-normal text-slate-900 outline-none transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                  {errors.email ? (
                    <span className="text-[11px] font-medium text-red-500">{errors.email}</span>
                  ) : null}
                </label>
              </div>

              <label className="grid gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                <span>Subject</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity / Technical collaboration"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base sm:text-sm font-normal text-slate-900 outline-none transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
                {errors.subject ? (
                  <span className="text-[11px] font-medium text-red-500">{errors.subject}</span>
                ) : null}
              </label>

              <label className="grid gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share details regarding roles, projects, or feedback..."
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-base sm:text-sm font-normal text-slate-900 outline-none transition focus:border-teal-500 focus:ring-1 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
                {errors.message ? (
                  <span className="text-[11px] font-medium text-red-500">{errors.message}</span>
                ) : null}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 text-xs sm:text-sm font-bold text-white transition enabled:hover:bg-teal-700 disabled:opacity-60 active:scale-[0.99]"
              >
                <FiSend aria-hidden="true" />
                <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>
            </form>
          </AnimatedCard>
        </div>
      </Container>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex min-h-[46px] items-center gap-3 rounded-lg border border-slate-700/80 bg-slate-900/60 p-2.5 sm:p-3 transition hover:border-teal-500/60 hover:bg-slate-900"
    >
      <span className="text-base sm:text-lg text-teal-400 shrink-0">{icon}</span>
      <div className="min-w-0 flex-1">
        <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </span>
        <span className="block truncate text-xs font-semibold text-white">
          {value}
        </span>
      </div>
    </a>
  );
}
