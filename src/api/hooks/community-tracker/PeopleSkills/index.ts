import {useMutation, useQuery} from 'react-query';

import {
  DeletePeopleSkill,
  GetPeopleSkills,
  UpdatePeopleSkill,
} from 'api/services';
import {Query} from 'constants/query';
import {UpdateSkillRequest} from 'models/requests';

export const useGetPeopleSkills = () => {
  return useQuery(Query.GetPeopleSkills, () => GetPeopleSkills());
};

export const useUpdatePeopleSkill = () => {
  return useMutation((data: UpdateSkillRequest) => UpdatePeopleSkill(data));
};

export const useDeletePeopleSkill = () => {
  return useMutation((skillId: number) => DeletePeopleSkill(skillId));
};
