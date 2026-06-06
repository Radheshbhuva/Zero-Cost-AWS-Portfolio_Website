import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

interface AnimatedCardProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-lg border border-slate-200 bg-white shadow-corporate transition duration-300 hover:-translate-y-1 hover:border-accent/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 ${className}`}
    >
      {children}
    </motion.article>
  );
}
