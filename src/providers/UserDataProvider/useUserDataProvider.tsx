import {useContext} from 'react';

import {UserDataContext} from './UserDataContext';

export const useUserDataProvider = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error(
      'useUserDataProvider() hook must be used within <UserDataContext/>'
    );
  }
  return context;
};
