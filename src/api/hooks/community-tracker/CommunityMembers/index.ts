import {useQuery} from 'react-query';

import {
  GetCommunityWithMembers,
  GetCommunityWithMembersSearch,
} from 'api/services';
import {Query} from 'constants/query';

export const useGetCommunityWithMembers = (communityId: number) => {
  return useQuery(Query.GetCommunityWithMembers, () =>
    GetCommunityWithMembers(communityId)
  );
};

export const useGetCommunityWithMembersSearch = (
  communityId: number,
  page?: number,
  rows?: number,
  search?: string
) => {
  return useQuery(Query.GetCommunityWithMembersSearch, () =>
    GetCommunityWithMembersSearch(communityId, page, rows, search)
  );
};
