import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
}

export function SectionHeading({ eyebrow, title, description, inverted = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl font-bold sm:text-4xl ${inverted ? 'text-white' : 'text-primary dark:text-white'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${inverted ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
