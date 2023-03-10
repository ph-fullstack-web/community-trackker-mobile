import {useQuery} from 'react-query';

import {
  GetPeople,
  GetPeopleWorkState,
  GetPerson,
  GetPersonByCsvEmail,
  GetPeopleBySkills,
} from 'api/services';
import {Query} from 'constants/query';

export const useGetPeople = () => {
  return useQuery(Query.GetPeople, () => GetPeople());
};

export const useGetPeopleWorkState = () => {
  return useQuery(Query.GetPeopleWorkState, () => GetPeopleWorkState());
};

export const useGetPersonByCsvEmail = (csvEmail: string) => {
  return useQuery(Query.GetPersonByCsvEmail, () =>
    GetPersonByCsvEmail(csvEmail)
  );
};

export const useGetPerson = (peopleId: number) => {
  return useQuery(Query.GetPerson, () => GetPerson(peopleId));
};

export const useGetPeopleBySkills = (skills: string) => {
  return useQuery(Query.GetPeopleBySkills, () => GetPeopleBySkills(skills));
};
