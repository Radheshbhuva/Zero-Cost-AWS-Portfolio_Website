import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

interface ButtonLinkProps
  extends PropsWithChildren,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
}

export const ButtonLink = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonLinkProps) => {
  const baseClasses =
    'inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-brand-500'
  const variants = {
    primary:
      'bg-ink-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-700 dark:bg-white dark:text-ink-950 dark:hover:bg-slate-200',
    secondary:
      'border border-slate-300 bg-white text-ink-900 hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-ink-900 dark:text-white dark:hover:border-sky-300 dark:hover:text-sky-200',
  }

  return (
    <a className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
