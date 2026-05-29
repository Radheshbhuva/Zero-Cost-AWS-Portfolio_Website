import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { ButtonLink } from '../ui/ButtonLink'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    aria-labelledby="hero-title"
  >
    <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(22,163,74,0.15),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_30%)]" />
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-ink-700 shadow-sm dark:border-slate-800 dark:bg-ink-900 dark:text-slate-300">
            <Sparkles size={16} aria-hidden="true" />
            Frontend Developer | Computer Engineering Student
          </p>
          <h1
            id="hero-title"
            className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Hi, I am Radhesh Bhuva.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-500 dark:text-slate-400">
            I build responsive, accessible, and performance-focused web
            experiences with React and TypeScript while growing my foundation in
            cloud computing and modern software engineering.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="/radhesh-bhuva-resume.txt"
              download="Radhesh-Bhuva-Resume.txt"
            >
              <Download className="mr-2" size={18} aria-hidden="true" />
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me
              <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-ink-900">
            <div className="rounded-md bg-ink-900 p-5 text-white dark:bg-black">
              <p className="text-sm text-sky-200">Portfolio snapshot</p>
              <dl className="mt-6 grid gap-4">
                <div className="rounded-md bg-white/10 p-4">
                  <dt className="text-sm text-slate-300">Current focus</dt>
                  <dd className="mt-1 font-semibold">
                    React, TypeScript, AWS Basics
                  </dd>
                </div>
                <div className="rounded-md bg-white/10 p-4">
                  <dt className="text-sm text-slate-300">Education</dt>
                  <dd className="mt-1 font-semibold">
                    Computer Engineering, Marwadi University
                  </dd>
                </div>
                <div className="rounded-md bg-white/10 p-4">
                  <dt className="text-sm text-slate-300">Goal</dt>
                  <dd className="mt-1 font-semibold">
                    Create useful, fast, and reliable web products
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
)
