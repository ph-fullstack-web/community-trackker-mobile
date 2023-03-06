import {useQuery} from 'react-query';

import {GetPeopleDetails, GetPeopleDetailsDescription} from 'api/services';
import {Query} from 'constants/query';

export const useGetPeopleDetails = () => {
  const response = useQuery(Query.GetCommunities, () => GetPeopleDetails());
  return response;
};

export const useGetPeopleDetailsDescription = () => {
  const response = useQuery(Query.GetCommunities, () =>
    GetPeopleDetailsDescription()
  );
  return response;
};
