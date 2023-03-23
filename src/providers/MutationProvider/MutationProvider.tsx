import {useState} from 'react';
import {MutationContext} from './MutationContext';

type MutationProviderProps = ComponentWithChildren;

export const MutationProvider = ({children}: MutationProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showLoader = () => {
    setIsLoading(() => true);
  };

  const hideLoader = () => {
    setIsLoading(() => false);
  };

  return (
    <MutationContext.Provider value={{isLoading, showLoader, hideLoader}}>
      {children}
    </MutationContext.Provider>
  );
};
