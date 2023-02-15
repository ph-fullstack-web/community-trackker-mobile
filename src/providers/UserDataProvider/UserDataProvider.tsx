import {useEffect, useReducer} from 'react';

import {UserDataContext} from './UserDataContext';
import {
  userReducer,
  initialUserState,
  UserContextActionTypes,
} from './UserReducer';

import {mockUser} from 'mocks/user';

type UserDataProviderProps = ComponentWithChildren;

export const UserDataProvider = ({children}: UserDataProviderProps) => {
  const [store, dispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    dispatch({
      type: UserContextActionTypes.Login,
      payload: {
        user: mockUser,
      },
    });
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        user: store.user,
        isDataLoading: store.isDataLoading,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
