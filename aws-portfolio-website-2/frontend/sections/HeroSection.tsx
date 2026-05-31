import { motion } from 'framer-motion';
import { FiDownload, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import portrait from '../assets/komal-portrait.jpg';
import { Container } from '../components/Container';
import { PrimaryLink } from '../components/PrimaryLink';
import { contact, profile, stats } from '../data/portfolio';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-executive-grid bg-[size:32px_32px] py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700 shadow-sm dark:bg-slate-900 dark:text-accent">
            <FiMapPin aria-hidden="true" />
            {profile.location}
          </p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryLink href="#contact" variant="primary">
              <FiMail aria-hidden="true" />
              Contact
            </PrimaryLink>
            <PrimaryLink href={contact.linkedinUrl} target="_blank" rel="noreferrer" variant="ghost">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </PrimaryLink>
            <PrimaryLink href="/documents/Komal-Khakhkhar-Resume.pdf" download variant="secondary">
              <FiDownload aria-hidden="true" />
              Resume
            </PrimaryLink>
          </div>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    <Icon aria-hidden="true" className="text-accent" />
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-bold text-primary dark:text-white">{stat.value}</dd>
                </div>
              );
            })}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="relative rounded-lg border border-slate-200 bg-white p-3 shadow-corporate dark:border-slate-700 dark:bg-slate-900">
            <img
              src={portrait}
              alt="Professional portrait representing Komal Khakhkhar"
              className="aspect-[4/5] w-full rounded-lg object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-primary/92 p-4 shadow-lg backdrop-blur dark:border-accent/25 dark:bg-slate-950/94">
              <p className="text-sm font-bold text-white">Premium HR Branding</p>
              <p className="mt-1 text-sm font-medium text-slate-200">Recruitment excellence, candidate care, and organized execution.</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
