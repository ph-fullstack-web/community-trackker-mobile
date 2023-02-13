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
          name: 'Community AAA',
          managerName: 'Manager AAA',
          totalMembers: 10,
        },
        {
          communityId: '00002',
          name: 'Community BBB',
          managerName: 'Manager BBB',
          totalMembers: 20,
        },
        {
          communityId: '00003',
          name: 'Community CCC',
          managerName: 'Manager CCC',
          totalMembers: 30,
        },
        {
          communityId: '00004',
          name: 'Community DDD',
          managerName: 'Manager DDD',
          totalMembers: 40,
        },
        {
          communityId: '00005',
          name: 'Community EEE',
          managerName: 'Manager EEE',
          totalMembers: 50,
        },
        {
          communityId: '00006',
          name: 'Community FFF',
          managerName: 'Manager FFF',
          totalMembers: 60,
        },
        {
          communityId: '00007',
          name: 'Community GGG',
          managerName: 'Manager GGG',
          totalMembers: 70,
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
