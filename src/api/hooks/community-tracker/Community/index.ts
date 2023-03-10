import {useQuery} from 'react-query';

import {
  GetCommunities,
  GetCommunitiesWithPercentage,
  GetCommunity,
  GetCommunityJobLevels,
} from 'api/services';
import {Query} from 'constants/query';

export const useGetCommunities = () => {
  return useQuery(Query.GetCommunities, () => GetCommunities());
};

export const useGetCommunity = (communityId: number) => {
  return useQuery(Query.GetCommunity, () => GetCommunity(communityId));
};

export const useGetCommunityJobLevels = () => {
  return useQuery(Query.GetCommunityJobLevels, () => GetCommunityJobLevels());
};

export const useGetCommunitiesWithPercentage = () => {
  return useQuery(Query.GetCommunitiesWithPercentage, () =>
    GetCommunitiesWithPercentage()
  );
};
