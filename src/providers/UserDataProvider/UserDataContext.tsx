import {createContext} from 'react';

import {User} from 'models/business';

export interface UserDataContextProps {
  isUserLoggedIn: boolean;
  user: User | undefined;
  isDataLoading: boolean;
}

export const UserDataContext = createContext<UserDataContextProps | undefined>(
  undefined
);
