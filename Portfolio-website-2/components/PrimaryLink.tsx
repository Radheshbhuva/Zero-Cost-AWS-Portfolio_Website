import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface PrimaryLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const variants = {
  primary: 'bg-accent text-primary hover:bg-teal-300 focus-visible:ring-accent',
  secondary:
    'bg-primary text-white hover:bg-secondary focus-visible:ring-primary dark:bg-accent dark:text-primary dark:hover:bg-teal-300',
  ghost:
    'border border-slate-300 bg-white text-primary hover:border-accent hover:text-teal-700 focus-visible:ring-accent dark:border-slate-500 dark:bg-slate-800 dark:text-white dark:hover:border-accent dark:hover:text-accent',
};

export function PrimaryLink({ children, className = '', variant = 'primary', ...props }: PrimaryLinkProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
