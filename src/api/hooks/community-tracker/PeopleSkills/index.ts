import {useQuery} from 'react-query';

import {GetPeopleSkills} from 'api/services';
import {Query} from 'constants/query';

export const useGetPeopleSkills = () => {
  return useQuery(Query.GetPeopleSkills, () => GetPeopleSkills());
};
