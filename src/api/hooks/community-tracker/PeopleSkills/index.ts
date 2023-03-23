import {useMutation, useQuery} from 'react-query';

import {
  DeletePeopleSkill,
  GetPeopleSkills,
  UpdatePeopleSkill,
} from 'api/services';
import {Query} from 'constants/query';
import {Peopleskills} from 'models/business';

export const useGetPeopleSkills = () => {
  return useQuery(Query.GetPeopleSkills, () => GetPeopleSkills());
};

export const useUpdatePeopleSkill = () => {
  return useMutation((data: Peopleskills) => UpdatePeopleSkill(data));
};

export const useDeletePeopleSkill = () => {
  return useMutation((skillId: number) => DeletePeopleSkill(skillId));
};
