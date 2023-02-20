import {createContext} from 'react';

export type ThemeProps = {
  [key: string]: ApprovedAny;
};

export interface ThemeContextProps {
  theme: Object;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
