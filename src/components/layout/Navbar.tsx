import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { navigationItems } from '../../data/portfolio'
import { Container } from '../ui/Container'

interface NavbarProps {
  isDarkMode: boolean
  onToggleTheme: () => void
}

export const Navbar = ({ isDarkMode, onToggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800/80 dark:bg-ink-950/80">
      <Container>
        <nav
          className="flex min-h-16 items-center justify-between"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            className="text-base font-bold tracking-tight text-ink-900 dark:text-white"
            onClick={closeMenu}
          >
            Radhesh Bhuva
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-slate-100 hover:text-ink-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-ink-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
              onClick={onToggleTheme}
              aria-label={
                isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-ink-700 transition hover:bg-slate-100 md:hidden dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {isOpen ? (
          <div id="mobile-menu" className="grid gap-1 pb-4 md:hidden">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-ink-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </Container>
    </header>
  )
}
