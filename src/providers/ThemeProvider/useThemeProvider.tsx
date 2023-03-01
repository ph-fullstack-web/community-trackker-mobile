import {useContext} from 'react';

import {ThemeContext} from './ThemeContext';

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useThemeProvider() hook must be used within <ThemeContext/>'
    );
  }
  return context;
};
