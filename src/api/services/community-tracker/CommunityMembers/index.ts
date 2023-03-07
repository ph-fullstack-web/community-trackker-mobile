import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {CommunityMembers} from 'models/business';

export const GetCommunityWithMembers = async (
  communityId: number
): Promise<CommunityMembers> => {
  const response = await communityTrackerAPI({
    url: `community-members/${communityId}`,
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
