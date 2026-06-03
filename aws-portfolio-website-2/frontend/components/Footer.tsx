import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { contact, profile } from '../data/portfolio';
import { Container } from './Container';
import { VisitorCounter } from './VisitorCounter';
import { VisitorCounterErrorBoundary } from './VisitorCounterErrorBoundary';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <Container className="flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-xl font-bold text-primary dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm font-semibold text-accent">{profile.title}</p>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">"{profile.tagline}"</p>
        </div>
        
         <VisitorCounterErrorBoundary>
          <VisitorCounter className="mx-auto lg:mx-0" />
        </VisitorCounterErrorBoundary>
        
        <div className="flex justify-center gap-3">
          <a className="footer-icon" href={`mailto:${contact.email}`} aria-label="Email Komal Khakhkhar">
            <FiMail aria-hidden="true" />
          </a>
          <a className="footer-icon" href={`tel:${contact.phone.replace(/\s+/g, '')}`} aria-label="Call Komal Khakhkhar">
            <FiPhone aria-hidden="true" />
          </a>
          <a className="footer-icon" href={contact.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
            <FiLinkedin aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
