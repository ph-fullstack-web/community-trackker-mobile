import {useContext} from 'react';

import {CommunitiesDataContext} from './CommunitiesDataContext';

export const useCommunitiesDataProvider = () => {
  const context = useContext(CommunitiesDataContext);
  if (context === undefined) {
    throw new Error(
      'useCommunitiesDataProvider() hook must be used within <CommunitiesDataContext/>'
    );
  }
  return context;
};
