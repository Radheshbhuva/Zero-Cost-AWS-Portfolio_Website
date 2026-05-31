import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navItems, profile } from '../data/portfolio';
import { Container } from './Container';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/80 bg-white/92 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/92">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="Komal Khakhkhar home">
          <span className="grid size-10 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-accent dark:bg-white">
            KK
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-primary dark:text-white">{profile.name}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">{profile.title}</span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-primary dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onThemeToggle}
            className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-primary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white lg:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {isOpen ? (
        <nav className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden" aria-label="Mobile navigation">
          <Container className="grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
