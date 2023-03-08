import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {CommunityMembers} from 'models/business';

export const GetCommunityWithMembers = async (
  communityId: number
): Promise<CommunityMembers> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.communityMembers.GetCommunityWithMembers(
      communityId
    ),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
