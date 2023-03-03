import {useQuery} from 'react-query';

import {
  GetCommunities,
  GetCommunitiesWithPercentage,
  GetCommunity,
  GetCommunityJobLevels,
} from 'api/services';
import {Query} from 'constants/query';

export const useGetCommunities = () => {
  const response = useQuery(Query.GetCommunities, () => GetCommunities());
  return response;
};

export const useGetCommunity = (communityId: number) => {
  const response = useQuery(Query.GetCommunity, () =>
    GetCommunity(communityId)
  );
  return response;
};

export const useGetCommunityJobLevels = () => {
  const response = useQuery(Query.GetCommunityJobLevels, () =>
    GetCommunityJobLevels()
  );
  return response;
};

export const useGetCommunitiesWithPercentage = () => {
  const response = useQuery(Query.GetCommunitiesWithPercentage, () =>
    GetCommunitiesWithPercentage()
  );
  return response;
};
