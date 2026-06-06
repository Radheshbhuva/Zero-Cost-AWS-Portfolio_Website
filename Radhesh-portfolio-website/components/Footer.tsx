import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { contact, navItems, profile } from '../data/portfolio';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <Container className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
        <div>
          <p className="font-display text-xl font-bold text-primary dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm font-semibold text-accent">{profile.title}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">{profile.tagline}</p>
        </div>

        <nav aria-label="Footer quick links" className="grid grid-cols-2 gap-2 text-sm font-semibold sm:grid-cols-4 lg:grid-cols-2">
          {navItems.slice(0, 8).map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-2 py-1 text-slate-600 hover:text-teal-700 dark:text-slate-300 dark:hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3 lg:justify-self-end">
          <a className="footer-icon" href={`mailto:${contact.email}`} aria-label="Email Radhesh Bhuva">
            <FiMail aria-hidden="true" />
          </a>
          <a className="footer-icon" href={`tel:${contact.phone.replace(/\s+/g, '')}`} aria-label="Call Radhesh Bhuva">
            <FiPhone aria-hidden="true" />
          </a>
          <a className="footer-icon" href={contact.githubUrl} target="_blank" rel="noreferrer" aria-label="Open GitHub">
            <FiGithub aria-hidden="true" />
          </a>
          <a className="footer-icon" href={contact.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
            <FiLinkedin aria-hidden="true" />
          </a>
        </div>
      </Container>
      <Container className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>Copyright 2026 Radhesh Bhuva. Built with React, TypeScript, Vite, and AWS-ready static hosting.</p>
      </Container>
    </footer>
  );
}