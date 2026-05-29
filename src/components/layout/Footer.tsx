import { Container } from '../ui/Container'

export const Footer = () => (
  <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
    <Container className="flex flex-col items-center justify-between gap-3 text-center text-sm text-ink-500 sm:flex-row sm:text-left dark:text-slate-400">
      <p>Built with React, TypeScript, Vite, and Tailwind CSS.</p>
      <p>&copy; {new Date().getFullYear()} Radhesh Bhuva</p>
    </Container>
  </footer>
)
