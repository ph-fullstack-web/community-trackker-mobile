import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {Peopleskills} from 'models/business';

export const GetPeopleSkills = async (): Promise<Peopleskills[]> => {
  const response = await communityTrackerAPI({
    url: 'peopleskills',
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
