interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  description: string
}

export const SectionHeading = ({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => (
  <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-sky-300">
      {eyebrow}
    </p>
    <h2
      id={id}
      className="mt-3 text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl"
    >
      {title}
    </h2>
    <p className="mt-4 text-base leading-7 text-ink-500 dark:text-slate-400">
      {description}
    </p>
  </div>
)
