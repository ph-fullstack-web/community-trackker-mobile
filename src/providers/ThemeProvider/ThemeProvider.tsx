import {useState} from 'react';
import {ThemeContext, ThemeMode} from './ThemeContext';

type ThemeProviderProps = ComponentWithChildren;

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const toggleTheme = () =>
    setMode(curr => (curr === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{mode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
