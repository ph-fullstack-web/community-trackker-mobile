import {useQuery} from 'react-query';

import {GetManagers, GetCommunityManagers} from 'api/services';
import {Query} from 'constants/query';

export const useGetManagers = () => {
  return useQuery(Query.GetManagers, () => GetManagers());
};

export const useGetCommunityManagers = () => {
  return useQuery(Query.GetCommunityManagers, () => GetCommunityManagers());
};
