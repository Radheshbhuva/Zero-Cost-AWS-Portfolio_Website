import { useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navItems, profile } from '../data/portfolio';
import { Container } from './Container';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 transition-colors duration-200">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5 sm:gap-3" aria-label={`${profile.name} home`}>
          <div className="grid size-9 sm:size-10 place-items-center rounded-lg bg-slate-900 font-display text-xs sm:text-sm font-bold text-teal-400 shadow-xs dark:bg-slate-800 dark:text-teal-400 shrink-0">
            {profile.initials}
          </div>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-accent transition truncate max-w-[140px] sm:max-w-none">
              {profile.name}
            </span>
            <span className="hidden text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:block">
              {profile.title}
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="/Radhesh_Bhuva_Resume.pdf"
            download="Radhesh_Bhuva_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-teal-600/30 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 transition hover:bg-teal-100 dark:border-teal-500/30 dark:bg-teal-950/40 dark:text-teal-300 dark:hover:bg-teal-900/60"
          >
            <FiDownload aria-hidden="true" />
            <span>Resume PDF</span>
          </a>

          <button
            type="button"
            onClick={onThemeToggle}
            className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun aria-hidden="true" className="text-base" /> : <FiMoon aria-hidden="true" className="text-base" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 xl:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX aria-hidden="true" className="text-lg" /> : <FiMenu aria-hidden="true" className="text-lg" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen ? (
        <nav
          className="border-t border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-950 xl:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="grid gap-1 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900 transition"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href="/Radhesh_Bhuva_Resume.pdf"
                download="Radhesh_Bhuva_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-teal-700 transition"
              >
                <FiDownload aria-hidden="true" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
