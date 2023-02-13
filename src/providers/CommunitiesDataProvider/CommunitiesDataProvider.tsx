import {useEffect, useReducer} from 'react';

import {Community} from 'models/business';
import {CommunitiesDataContext} from './CommunitiesDataContext';
import {
  communityiesReducer,
  initialCommunityListState,
  CommunitiesContextActionTypes,
} from './CommunitiesReducer';

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
      const mockData: Community[] = [
        {
          communityId: '00001',
          name: 'Full Stack Web',
        },
      ];

      dispatch({
        type: CommunitiesContextActionTypes.LoadComplete,
        payload: {
          communityList: mockData,
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
