import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {AdminManager, People} from 'models/business';

export const GetManagers = async (): Promise<People[]> => {
  const response = await communityTrackerAPI({
    url: 'managers',
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetCommunityManagers = async (): Promise<AdminManager[]> => {
  const response = await communityTrackerAPI({
    url: 'managers/community',
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
