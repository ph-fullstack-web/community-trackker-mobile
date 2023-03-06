import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';

export const GetPeopleSkills = async () => {
  const response = await communityTrackerAPI({
    url: 'peopleskills',
    method: HTTPMethod.GET,
  });

  return response?.data;
};
