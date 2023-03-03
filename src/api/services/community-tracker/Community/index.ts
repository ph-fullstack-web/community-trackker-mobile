import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';

export const GetCommunities = async () => {
  const response = await communityTrackerAPI({
    url: 'community',
    method: HTTPMethod.GET,
  });
  return response?.data;
};

export const GetCommunity = async (communityId: number) => {
  const response = await communityTrackerAPI({
    url: `community/${communityId}`,
    method: HTTPMethod.GET,
  });
  return response?.data?.data;
};

export const GetCommunityJobLevels = async () => {
  const response = await communityTrackerAPI({
    url: 'community/job-level',
    method: HTTPMethod.GET,
  });
  return response?.data?.data;
};

export const GetCommunitiesWithPercentage = async () => {
  const response = await communityTrackerAPI({
    url: 'community/percentage',
    method: HTTPMethod.GET,
  });
  return response?.data;
};
