import {useQuery} from 'react-query';

import {GetManagers, GetCommunityManagers} from 'api/services';
import {Query} from 'constants/query';

export const useGetManagers = () => {
  const response = useQuery(Query.GetManagers, () => GetManagers());
  return response;
};

export const useGetCommunityManagers = () => {
  const response = useQuery(Query.GetCommunityManagers, () =>
    GetCommunityManagers()
  );
  return response;
};
