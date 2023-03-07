import {useQuery} from 'react-query';

import {GetPeopleDetails, GetPeopleDetailsDescription} from 'api/services';
import {Query} from 'constants/query';

export const useGetPeopleDetails = () => {
  const response = useQuery(Query.GetPeopleDetails, () => GetPeopleDetails());
  return response?.data;
};

export const useGetPeopleDetailsDescription = () => {
  const response = useQuery(Query.GetPeopleDetailsDescription, () =>
    GetPeopleDetailsDescription()
  );
  return response?.data;
};
