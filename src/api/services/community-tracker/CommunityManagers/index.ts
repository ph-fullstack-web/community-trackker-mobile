import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';

export const GetManagers = async () => {
  const response = await communityTrackerAPI({
    url: 'managers',
    method: HTTPMethod.GET,
  });
  return response?.data?.data;
};

export const GetCommunityManagers = async () => {
  const response = await communityTrackerAPI({
    url: 'managers/community',
    method: HTTPMethod.GET,
  });
  return response?.data?.data;
};
