import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { languages } from '../data/portfolio';

export function LanguagesSection() {
  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <Container>
        <SectionHeading eyebrow="Languages" title="Communication across candidate and business contexts" />
        <div className="mx-auto grid max-w-4xl gap-5">
          {languages.map((language, index) => (
            <motion.div
              key={language.language}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-primary dark:text-white">{language.language}</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{language.level}</p>
                </div>
                <p className="text-sm font-bold text-accent">{language.proficiency}%</p>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${language.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
