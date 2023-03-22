import {createContext} from 'react';

export interface MutationContextProps {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

export const MutationContext = createContext<MutationContextProps | undefined>(
  undefined
);
