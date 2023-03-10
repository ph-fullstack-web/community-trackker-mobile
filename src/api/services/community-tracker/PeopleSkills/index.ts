import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {Peopleskills} from 'models/business';

export const GetPeopleSkills = async (): Promise<Peopleskills[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.peopleSkills.GetPeopleSkills(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
