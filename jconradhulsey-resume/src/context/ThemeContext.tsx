"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeContextType = {
  isInverted: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isInverted, setIsInverted] = useState(false);

  const toggleTheme = () => {
    setIsInverted(prev => !prev);
    // Save theme preference to localStorage
    localStorage.setItem('themeInverted', (!isInverted).toString());
  };

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeInverted');
    if (savedTheme) {
      setIsInverted(savedTheme === 'true');
    }
  }, []);

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    if (isInverted) {
      root.style.setProperty('--primary-color', '#233d4d');
      root.style.setProperty('--secondary-color', '#fe7f2d');
      root.style.setProperty('--text-on-primary', '#fe7f2d');
      root.style.setProperty('--text-on-secondary', '#233d4d');
    } else {
      root.style.setProperty('--primary-color', '#fe7f2d');
      root.style.setProperty('--secondary-color', '#233d4d');
      root.style.setProperty('--text-on-primary', '#233d4d');
      root.style.setProperty('--text-on-secondary', '#fe7f2d');
    }
  }, [isInverted]);

  return (
    <ThemeContext.Provider value={{ isInverted, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 