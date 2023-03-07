import {useQuery} from 'react-query';

import {GetCommunityWithMembers} from 'api/services';
import {Query} from 'constants/query';

export const useGetCommunityWithMembers = (communityId: number) => {
  return useQuery(Query.GetCommunityWithMembers, () =>
    GetCommunityWithMembers(communityId)
  );
};
