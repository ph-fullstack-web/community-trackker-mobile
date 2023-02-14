import {useEffect, useReducer} from 'react';

import {CommunitiesDataContext} from './CommunitiesDataContext';
import {
  communityiesReducer,
  initialCommunityListState,
  CommunitiesContextActionTypes,
} from './CommunitiesReducer';

import {mockCommunities} from 'mocks/communities';

type CommunitiesDataProviderProps = ComponentWithChildren;

export const CommunitiesDataProvider = ({
  children,
}: CommunitiesDataProviderProps) => {
  const isLoggedIn = true;
  const [store, dispatch] = useReducer(
    communityiesReducer,
    initialCommunityListState
  );

  useEffect(() => {
    if (isLoggedIn) {
      dispatch({
        type: CommunitiesContextActionTypes.LoadComplete,
        payload: {
          communityList: mockCommunities,
        },
      });
    }
  }, [isLoggedIn]);

  return (
    <CommunitiesDataContext.Provider
      value={{
        communityList: store.communityList,
        isDataLoading: store.isDataLoading,
      }}
    >
      {children}
    </CommunitiesDataContext.Provider>
  );
};
