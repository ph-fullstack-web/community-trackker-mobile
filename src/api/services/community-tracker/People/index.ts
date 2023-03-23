import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {
  People,
  PeopleWithSkills,
  PersonBySkills,
  WorkState,
} from 'models/business';

export const GetPeople = async (): Promise<People[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.people.GetPeople(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPeopleWorkState = async (): Promise<WorkState[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.people.GetPeopleWorkState(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPerson = async (
  personId: number
): Promise<PeopleWithSkills> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.people.GetPerson(personId),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPersonByCsvEmail = async (
  csvEmail: string
): Promise<People> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.people.GetPersonByCsvEmail(csvEmail),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPeopleBySkills = async (
  skills: string
): Promise<PersonBySkills[]> => {
  if (skills.length) {
    const response = await communityTrackerAPI({
      url: communityTrackerRoutes.people.GetPeopleBySkills(skills),
      method: HTTPMethod.GET,
    });

    return response?.data?.data;
  }
  return Promise.resolve([]);
};
