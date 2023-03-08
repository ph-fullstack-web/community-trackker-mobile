import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {
  Community,
  CommunityWithMembersPercentage,
  JobLevel,
} from 'models/business';

export const GetCommunities = async (): Promise<Community[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.community.GetCommunities(),
    method: HTTPMethod.GET,
  });

  return response?.data;
};

export const GetCommunity = async (communityId: number): Promise<Community> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.community.GetCommunity(communityId),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetCommunityJobLevels = async (): Promise<JobLevel[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.community.GetCommunityJobLevels(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetCommunitiesWithPercentage = async (): Promise<
  CommunityWithMembersPercentage[]
> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.community.GetCommunitiesWithPercentage(),
    method: HTTPMethod.GET,
  });

  return response?.data;
};
