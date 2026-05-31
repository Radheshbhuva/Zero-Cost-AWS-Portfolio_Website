import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { education } from '../data/portfolio';

export function EducationSection() {
  return (
    <section id="education" className="section-padding bg-surface dark:bg-slate-900">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic foundation for HR and business growth" />
        <div className="mx-auto max-w-4xl">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-l-2 border-accent/30 pb-8 pl-8 last:pb-0"
            >
              <span className="absolute -left-[17px] top-0 grid size-8 place-items-center rounded-full bg-accent text-primary shadow-lg">
                <FiBookOpen aria-hidden="true" />
              </span>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <h3 className="font-display text-xl font-bold text-primary dark:text-white">{item.degree}</h3>
                <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">{item.institution}</p>
                <p className="mt-3 inline-flex rounded-lg bg-accent/10 px-3 py-1 text-sm font-bold text-teal-700 dark:text-teal-300">
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
