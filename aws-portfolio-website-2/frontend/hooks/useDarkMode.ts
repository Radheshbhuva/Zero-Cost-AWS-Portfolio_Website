import { useEffect, useState } from 'react';

const STORAGE_KEY = 'komal-portfolio-theme';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);

    if (storedTheme) {
      return storedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  return { isDark, setIsDark };
}
