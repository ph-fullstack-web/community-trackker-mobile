import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';

export const GetCommunityWithMembers = async (communityId: number) => {
  const response = await communityTrackerAPI({
    url: `community-members/${communityId}`,
    method: HTTPMethod.GET,
  });
  return response?.data?.data;
};
