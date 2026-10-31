import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { useDarkMode } from './hooks/useDarkMode';
import { HomePage } from './pages/HomePage';

function App() {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      <ScrollProgress />
      <Navbar
        isDark={isDark}
        onThemeToggle={() => setIsDark(!isDark)}
      />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
