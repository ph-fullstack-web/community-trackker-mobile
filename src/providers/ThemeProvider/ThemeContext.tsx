import {createContext} from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextProps {
  mode?: ThemeMode | string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
