import {createContext} from 'react';

export interface EnvContextProps {
  baseUrl: string;
}

export const EnvContext = createContext<EnvContextProps | undefined>(undefined);
