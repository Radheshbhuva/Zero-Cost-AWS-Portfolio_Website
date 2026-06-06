import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { useDarkMode } from './hooks/useDarkMode';
import { HomePage } from './pages/HomePage';

function App() {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-surface text-primary antialiased dark:bg-slate-950 dark:text-slate-100">
      <ScrollProgress />
      <Navbar isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
