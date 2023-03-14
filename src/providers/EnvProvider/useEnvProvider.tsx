import {useContext} from 'react';

import {EnvContext} from './EnvContext';

export const useEnvProvider = () => {
  const context = useContext(EnvContext);

  if (context === undefined) {
    throw new Error('useEnvProvider() hook must be used within <EnvContext/>');
  }
  return context;
};
