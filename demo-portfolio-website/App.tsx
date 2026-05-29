import { lazy, Suspense } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { useDarkMode } from './hooks/useDarkMode'

const About = lazy(() =>
  import('./components/sections/About').then((module) => ({
    default: module.About,
  })),
)
const Skills = lazy(() =>
  import('./components/sections/Skills').then((module) => ({
    default: module.Skills,
  })),
)
const Projects = lazy(() =>
  import('./components/sections/Projects').then((module) => ({
    default: module.Projects,
  })),
)
const Education = lazy(() =>
  import('./components/sections/Education').then((module) => ({
    default: module.Education,
  })),
)
const Contact = lazy(() =>
  import('./components/sections/Contact').then((module) => ({
    default: module.Contact,
  })),
)

const SectionFallback = () => (
  <div className="mx-auto my-12 h-24 w-full max-w-6xl animate-pulse rounded-lg bg-slate-200/70 dark:bg-slate-800/70" />
)

function App() {
  const { isDarkMode, toggleTheme } = useDarkMode()

  return (
    <div className="min-h-screen">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
