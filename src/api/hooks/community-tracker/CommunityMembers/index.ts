import {useQuery} from 'react-query';

import {GetCommunityWithMembers} from 'api/services';
import {Query} from 'constants/query';

export const useGetCommunityWithMembers = (communityId: number) => {
  const response = useQuery(Query.GetCommunityWithMembers, () =>
    GetCommunityWithMembers(communityId)
  );
  return response;
};
