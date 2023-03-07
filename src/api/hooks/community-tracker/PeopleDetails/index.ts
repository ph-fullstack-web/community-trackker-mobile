import {useQuery} from 'react-query';

import {GetPeopleDetails, GetPeopleDetailsDescription} from 'api/services';
import {Query} from 'constants/query';

export const useGetPeopleDetails = () => {
  return useQuery(Query.GetPeopleDetails, () => GetPeopleDetails());
};

export const useGetPeopleDetailsDescription = () => {
  return useQuery(Query.GetPeopleDetailsDescription, () =>
    GetPeopleDetailsDescription()
  );
};
