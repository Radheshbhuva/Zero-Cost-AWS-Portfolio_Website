import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { Container } from '../components/Container';
import { contact, profile, stats } from '../data/portfolio';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50/60 py-10 sm:py-16 lg:py-20 dark:bg-slate-950 transition-colors"
      aria-labelledby="hero-title"
    >
      {/* Background accents */}
      <div
        className="pointer-events-none absolute inset-0 bg-executive-grid bg-[size:24px_24px] sm:bg-[size:32px_32px] opacity-40 dark:opacity-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/5"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-600/20 bg-teal-50/90 px-3 py-1 text-[11px] sm:text-xs font-bold text-teal-800 dark:border-teal-400/20 dark:bg-teal-950/50 dark:text-teal-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              Open for Internships (2025–2028)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-slate-600 shadow-3xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <FiMapPin aria-hidden="true" className="text-teal-600 dark:text-accent" />
              {profile.location}
            </span>
          </div>

          {/* Headline & Subheading */}
          <h1
            id="hero-title"
            className="mt-4 sm:mt-6 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="mt-2 sm:mt-3 font-display text-lg sm:text-2xl font-bold text-teal-700 dark:text-accent">
            {profile.title}
          </p>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.introduction}
          </p>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a
              href="/Radhesh_Bhuva_Resume.pdf"
              download="Radhesh_Bhuva_Resume.pdf"
              className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:bg-teal-700 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            >
              <FiDownload aria-hidden="true" className="text-base" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] flex-1 sm:flex-none items-center justify-center gap-1.5 rounded-lg border border-transparent bg-slate-200/80 px-4 text-xs sm:text-sm font-semibold text-slate-800 transition hover:bg-slate-300/80 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <span>Projects</span>
              </a>

              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="grid min-h-[44px] min-w-[44px] place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
                aria-label="GitHub Profile"
              >
                <FiGithub aria-hidden="true" className="text-base sm:text-lg" />
              </a>

              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="grid min-h-[44px] min-w-[44px] place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin aria-hidden="true" className="text-base sm:text-lg" />
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="grid min-h-[44px] min-w-[44px] place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
                aria-label="Email Radhesh"
              >
                <FiMail aria-hidden="true" className="text-base sm:text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Recruiter Stats - Optimized for Phone Screens */}
          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-3 shadow-3xs dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Mobile-Adaptive Cloud & Engineering Console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto w-full max-w-lg"
        >
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-slate-200 shadow-xl">
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-3.5 py-2.5 sm:px-4 sm:py-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="size-2.5 sm:size-3 rounded-full bg-rose-500/80" />
                <span className="size-2.5 sm:size-3 rounded-full bg-amber-500/80" />
                <span className="size-2.5 sm:size-3 rounded-full bg-emerald-500/80" />
                <span className="ml-1.5 font-mono text-[11px] sm:text-xs font-semibold text-slate-400 truncate max-w-[140px] sm:max-w-none">
                  radhesh@cloud:~$
                </span>
              </div>
              <span className="rounded bg-teal-950/80 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-teal-400 border border-teal-800/40 shrink-0">
                AWS S3: ACTIVE
              </span>
            </div>

            {/* Console Content */}
            <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed break-words">
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-start gap-1.5">
                  <span className="text-teal-400 select-none">&gt;</span>
                  <div>
                    <span className="text-slate-400">target: </span>
                    <span className="font-semibold text-white">
                      [Full-Stack, Backend, Cloud, DevOps]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-1.5">
                  <span className="text-teal-400 select-none">&gt;</span>
                  <div>
                    <span className="text-slate-400">stack: </span>
                    <span className="text-amber-300">
                      React 18, TypeScript, Node.js, Express, PostgreSQL
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-1.5">
                  <span className="text-teal-400 select-none">&gt;</span>
                  <div>
                    <span className="text-slate-400">aws: </span>
                    <span className="text-cyan-300">
                      Amazon S3, EC2, CloudFront, Route 53, IAM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-1.5">
                  <span className="text-teal-400 select-none">&gt;</span>
                  <div>
                    <span className="text-slate-400">devops: </span>
                    <span className="text-emerald-400">
                      Docker, Compose, GitHub Actions
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Project Snapshots */}
              <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/80 p-3">
                <p className="font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] text-teal-400 flex items-center justify-between">
                  <span>Architecture Highlights</span>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-normal">Verified</span>
                </p>
                <div className="mt-2 space-y-1.5 text-[10px] sm:text-[11px]">
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-1">
                    <span className="font-semibold text-slate-200">DeployFixLab</span>
                    <span className="rounded bg-emerald-950 px-1.5 py-0.5 text-[9px] sm:text-[10px] text-emerald-400">
                      Completed &bull; Express + Postgres
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-1">
                    <span className="font-semibold text-slate-200">Saturn Intraday</span>
                    <span className="rounded bg-amber-950 px-1.5 py-0.5 text-[9px] sm:text-[10px] text-amber-400">
                      In Dev &bull; TS Monorepo
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">Zero-Cost S3</span>
                    <span className="rounded bg-teal-950 px-1.5 py-0.5 text-[9px] sm:text-[10px] text-teal-400">
                      Zero Cost &bull; Production
                    </span>
                  </div>
                </div>
              </div>

              {/* Recruiter Quick Link */}
              <div className="mt-3.5 flex items-center justify-between text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px]">
                  <FiCheckCircle className="text-emerald-400" />
                  <span>Resume Ready</span>
                </span>
                <a
                  href="/Radhesh_Bhuva_Resume.pdf"
                  download="Radhesh_Bhuva_Resume.pdf"
                  className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-teal-400 hover:underline"
                >
                  Download PDF <FiDownload />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}