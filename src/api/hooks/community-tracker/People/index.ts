import {useQuery} from 'react-query';

import {
  GetPeople,
  GetPeopleWorkState,
  GetPerson,
  GetPersonByCsvEmail,
  GetPeopleWithSkills,
} from 'api/services';
import {Query} from 'constants/query';

export const useGetPeople = () => {
  const response = useQuery(Query.GetPeople, () => GetPeople());
  return response?.data;
};

export const useGetPeopleWorkState = () => {
  const response = useQuery(Query.GetPeopleWorkState, () =>
    GetPeopleWorkState()
  );
  return response?.data;
};

export const useGetPersonByCsvEmail = (csvEmail: string) => {
  const response = useQuery(Query.GetPersonByCsvEmail, () =>
    GetPersonByCsvEmail(csvEmail)
  );
  return response?.data;
};

export const useGetPerson = (peopleId: number) => {
  const response = useQuery(Query.GetPerson, () => GetPerson(peopleId));
  return response?.data;
};

export const useGetPeopleWithSkills = (skills: string) => {
  const response = useQuery(Query.GetPeopleWithSkills, () =>
    GetPeopleWithSkills(skills)
  );
  return response?.data;
};
