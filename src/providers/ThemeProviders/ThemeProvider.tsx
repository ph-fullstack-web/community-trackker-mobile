import {useState} from 'react';

import {ThemeContext} from './ThemeContext';

type ThemeProviderProps = ComponentWithChildren;

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
