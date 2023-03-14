import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {AdminManager, People} from 'models/business';

export const GetManagers = async (): Promise<People[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.communityManagers.GetManagers(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetCommunityManagers = async (): Promise<AdminManager[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.communityManagers.GetCommunityManagers(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
