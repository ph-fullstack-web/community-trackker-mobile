import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {
  People,
  PeopleWithSkills,
  PersonBySkills,
  WorkState,
} from 'models/business';

export const GetPeople = async (): Promise<People[]> => {
  const response = await communityTrackerAPI({
    url: 'people',
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPeopleWorkState = async (): Promise<WorkState[]> => {
  const response = await communityTrackerAPI({
    url: 'people/workstate',
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPerson = async (
  personId: number
): Promise<PeopleWithSkills> => {
  const response = await communityTrackerAPI({
    url: `people/${personId}`,
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPersonByCsvEmail = async (
  csvEmail: string
): Promise<People> => {
  const response = await communityTrackerAPI({
    url: `people/email/${csvEmail}`,
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPeopleBySkills = async (
  skills: string
): Promise<PersonBySkills[]> => {
  const response = await communityTrackerAPI({
    url: `people/skills?skills=${skills}`,
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
