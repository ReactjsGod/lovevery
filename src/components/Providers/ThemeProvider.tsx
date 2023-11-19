'use client';

import React from 'react';
import {ThemeContext} from '@interfaces'


const ThemeContext = React.createContext<ThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<string>('light');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    document.documentElement.classList.add(savedTheme);
    document.documentElement.classList.remove(
      savedTheme === 'dark' ? 'light' : 'dark'
    );
  }, []);

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(
      theme === 'dark' ? 'light' : 'dark'
    );
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContext => {
  const themeContext = React.useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return themeContext;
};

