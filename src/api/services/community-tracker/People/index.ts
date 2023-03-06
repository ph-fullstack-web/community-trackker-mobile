import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';

export const GetPeople = async () => {
  const response = await communityTrackerAPI({
    url: 'people',
    method: HTTPMethod.GET,
  });

  return response?.data;
};

export const GetPeopleWorkState = async () => {
  const response = await communityTrackerAPI({
    url: 'people/workstate',
    method: HTTPMethod.GET,
  });

  return response?.data;
};

export const GetPerson = async (personId: number) => {
  const response = await communityTrackerAPI({
    url: `people/${personId}`,
    method: HTTPMethod.GET,
  });

  return response?.data;
};

export const GetPersonSkills = async (skillId: number) => {
  const response = await communityTrackerAPI({
    url: `people/skills?skills=${skillId}`,
    method: HTTPMethod.GET,
  });

  return response?.data;
};
