import {useEffect, useReducer} from 'react';

import {Community} from 'models/business';
import {CommunitiesDataContext} from './CommunitiesDataContext';
import {
  communitiesReducer,
  initialCommunityListState,
  CommunitiesContextActionTypes,
} from './CommunitiesReducer';

type CommunitiesDataProviderProps = ComponentWithChildren;

export const CommunitiesDataProvider = ({
  children,
}: CommunitiesDataProviderProps) => {
  const isLoggedIn = true;
  const [store, dispatch] = useReducer(
    communitiesReducer,
    initialCommunityListState
  );

  useEffect(() => {
    if (isLoggedIn) {
      const mockData: Community[] = [
        {
          communityId: 1,
          name: 'Community AAA',
          description: 'Community AAA Description',
          managerName: 'Manager AAA',
          totalMembers: 10,
          percentage: 11,
        },
        {
          communityId: 2,
          name: 'Community BBB',
          description: 'Community BBB Description',
          managerName: 'Manager BBB',
          totalMembers: 20,
          percentage: 22,
        },
        {
          communityId: 3,
          name: 'Community CCC',
          description: 'Community CCC Description',
          managerName: 'Manager CCC',
          totalMembers: 30,
          percentage: 33,
        },
        {
          communityId: 4,
          name: 'Community DDD',
          description: 'Community DDD Description',
          managerName: 'Manager DDD',
          totalMembers: 40,
          percentage: 44,
        },
        {
          communityId: 5,
          name: 'Community EEE',
          description: 'Community EEE Description',
          managerName: 'Manager EEE',
          totalMembers: 50,
          percentage: 55,
        },
        {
          communityId: 6,
          name: 'Community FFF',
          description: 'Community FFF Description',
          managerName: 'Manager FFF',
          totalMembers: 60,
          percentage: 66,
        },
        {
          communityId: 7,
          name: 'Community GGG',
          description: 'Community GGG Description',
          managerName: 'Manager GGG',
          totalMembers: 70,
          percentage: 77,
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
