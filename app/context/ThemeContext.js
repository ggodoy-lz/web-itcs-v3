'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const FONT_FAMILIES = {
  montserrat: 'Montserrat',
  'dm-sans': 'DM Sans',
  'open-sans': 'Open Sans',
  'poppins': 'Poppins',
  'inter': 'Inter',
  'roboto': 'Roboto',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [font, setFont] = useState('montserrat');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const changeFont = (fontName) => {
    setFont(fontName);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-font', font);
    document.documentElement.style.fontFamily = FONT_FAMILIES[font];
  }, [theme, font]);

  return (
    <ThemeContext.Provider value={{ theme, font, toggleTheme, changeFont }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
