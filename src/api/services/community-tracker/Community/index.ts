import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {
  Community,
  CommunityWithMembersPercentage,
  JobLevel,
} from 'models/business';

export const GetCommunities = async (): Promise<Community[]> => {
  const response = await communityTrackerAPI({
    url: 'community',
    method: HTTPMethod.GET,
  });

  return response?.data;
};

export const GetCommunity = async (communityId: number): Promise<Community> => {
  const response = await communityTrackerAPI({
    url: `community/${communityId}`,
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetCommunityJobLevels = async (): Promise<JobLevel[]> => {
  const response = await communityTrackerAPI({
    url: 'community/job-level',
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetCommunitiesWithPercentage = async (): Promise<
  CommunityWithMembersPercentage[]
> => {
  const response = await communityTrackerAPI({
    url: 'community/percentage',
    method: HTTPMethod.GET,
  });

  return response?.data;
};
