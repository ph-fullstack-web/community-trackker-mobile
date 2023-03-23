import {useContext} from 'react';

import {MutationContext} from './MutationContext';

export const useMutationProvider = () => {
  const context = useContext(MutationContext);

  if (context === undefined) {
    throw new Error(
      'useMutationProvider() hook must be used within <MutationContext/>'
    );
  }
  return context;
};
