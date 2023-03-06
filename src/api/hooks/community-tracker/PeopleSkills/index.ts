import {useQuery} from 'react-query';

import {GetPeopleSkills} from 'api/services';
import {Query} from 'constants/query';

export const useGetPeopleSkills = () => {
  const response = useQuery(Query.GetCommunities, () => GetPeopleSkills());
  return response;
};
