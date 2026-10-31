import { FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { contact, navItems, profile } from '../data/portfolio';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 sm:py-12 dark:border-slate-800 dark:bg-slate-950 transition-colors">
      <Container className="grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:items-start">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid size-9 place-items-center rounded-lg bg-slate-900 font-display text-xs font-bold text-teal-400 dark:bg-slate-800 shrink-0">
              {profile.initials}
            </div>
            <span className="font-display text-base font-bold text-slate-900 dark:text-white">
              {profile.name}
            </span>
          </div>
          <p className="mt-1.5 text-xs font-semibold text-teal-700 dark:text-accent">
            {profile.title}
          </p>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {profile.tagline}
          </p>
          <p className="mt-2.5 text-[11px] text-slate-400 dark:text-slate-500">
            Marwadi University, Computer Engineering (2024&ndash;2028)
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Navigation
          </p>
          <nav aria-label="Footer quick links" className="mt-3 grid grid-cols-2 gap-2 text-xs font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-[32px] flex items-center text-slate-600 transition hover:text-teal-700 dark:text-slate-400 dark:hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Direct Actions & Socials */}
        <div className="lg:justify-self-end">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            Resume & Profiles
          </p>
          <div className="mt-3">
            <a
              href="/Radhesh_Bhuva_Resume.pdf"
              download="Radhesh_Bhuva_Resume.pdf"
              className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-3xs transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <FiDownload aria-hidden="true" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

          <div className="mt-4 flex gap-2">
            <a
              className="grid min-h-[44px] min-w-[44px] place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-800 dark:text-slate-400 dark:hover:text-accent"
              href={`mailto:${contact.email}`}
              aria-label="Email Radhesh Bhuva"
            >
              <FiMail aria-hidden="true" className="text-base" />
            </a>
            <a
              className="grid min-h-[44px] min-w-[44px] place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-800 dark:text-slate-400 dark:hover:text-accent"
              href={`tel:${contact.phone.replace(/\s+/g, '')}`}
              aria-label="Call Radhesh Bhuva"
            >
              <FiPhone aria-hidden="true" className="text-base" />
            </a>
            <a
              className="grid min-h-[44px] min-w-[44px] place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-800 dark:text-slate-400 dark:hover:text-accent"
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
            >
              <FiGithub aria-hidden="true" className="text-base" />
            </a>
            <a
              className="grid min-h-[44px] min-w-[44px] place-items-center rounded-lg border border-slate-200 text-slate-600 transition hover:border-teal-500 hover:text-teal-700 dark:border-slate-800 dark:text-slate-400 dark:hover:text-accent"
              href={contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin aria-hidden="true" className="text-base" />
            </a>
          </div>
        </div>
      </Container>

      <Container className="mt-6 sm:mt-8 border-t border-slate-100 pt-5 text-center text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400 sm:flex sm:items-center sm:justify-between sm:text-left">
        <p>&copy; {new Date().getFullYear()} Radhesh Bhuva. Built with React, TypeScript, Vite &amp; AWS S3.</p>
        <p className="mt-1 sm:mt-0">Surat, Gujarat, India &bull; Open for Internships</p>
      </Container>
    </footer>
  );
}