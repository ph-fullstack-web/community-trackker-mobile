import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {
  CommunityMembers,
  CommunityMembersSearchResponse,
} from 'models/business';

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

export const GetCommunityWithMembersSearch = async (
  communityId: number,
  page?: number,
  rows?: number,
  search?: string
): Promise<CommunityMembersSearchResponse> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.communityMembers.GetCommunityWithMembersSearch(
      communityId,
      page,
      rows,
      search
    ),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
