import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { Container } from '../components/Container';
import { PrimaryLink } from '../components/PrimaryLink';
import { contact, profile, stats } from '../data/portfolio';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-executive-grid bg-[size:32px_32px] py-16 dark:bg-slate-950 sm:py-20 lg:py-24"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 to-transparent dark:from-slate-950" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
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
          <h1 id="hero-title" className="mt-6 font-display text-4xl font-extrabold leading-tight text-primary dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {profile.introduction}
          </p>
          <p className="mt-4 rounded-lg border border-slate-200 bg-white/80 p-4 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
            {profile.availability}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/resume.pdf"
              download="Radhesh_Bhuva_Resume.pdf"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold transition bg-accent text-primary hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-accent dark:text-primary dark:hover:bg-teal-300 dark:focus-visible:ring-offset-slate-950"
              aria-label="Download resume as PDF"
            >
              <FiDownload aria-hidden="true" />
              Download Resume
            </a>
            <PrimaryLink href="#contact" variant="ghost">
              <FiMail aria-hidden="true" />
              Contact
            </PrimaryLink>
            <PrimaryLink href={contact.githubUrl} target="_blank" rel="noreferrer" variant="secondary">
              <FiGithub aria-hidden="true" />
              GitHub
            </PrimaryLink>
            <PrimaryLink href={contact.linkedinUrl} target="_blank" rel="noreferrer" variant="ghost">
              <FiLinkedin aria-hidden="true" />
              LinkedIn
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
                  <dd className="mt-2 font-display text-xl font-bold text-primary dark:text-white">{stat.value}</dd>
                </div>
              );
            })}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto w-full max-w-lg"
        >
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-corporate dark:border-slate-700 dark:bg-slate-900">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/profile.jpg"
                alt="Radhesh Bhuva portrait photo"
                className="aspect-[3/4] w-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="mt-4 rounded-lg bg-primary p-4 text-white dark:bg-slate-950">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Cloud Focus</p>
              <p className="mt-2 text-sm font-semibold">Cloud fundamentals, clean frontend architecture, and deployment-ready documentation.</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}