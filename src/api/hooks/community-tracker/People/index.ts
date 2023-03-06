import {useQuery} from 'react-query';

import {
  GetPeople,
  GetPeopleWorkState,
  GetPerson,
  GetPersonSkills,
} from 'api/services';
import {Query} from 'constants/query';

export const useGetPeople = () => {
  const response = useQuery(Query.GetPeople, () => GetPeople());
  return response;
};

export const useGetPeopleWorkState = () => {
  const response = useQuery(Query.GetPeople, () => GetPeopleWorkState());
  return response;
};

export const useGetPerson = (peopleId: number) => {
  const response = useQuery(Query.GetPeople, () => GetPerson(peopleId));
  return response;
};

export const useGetPersonSkills = (skillId: number) => {
  const response = useQuery(Query.GetPeople, () => GetPersonSkills(skillId));
  return response;
};
