import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';

export const GetPeopleDetails = async () => {
  const response = await communityTrackerAPI({
    url: 'peopledetails',
    method: HTTPMethod.GET,
  });

  return response?.data;
};

export const GetPeopleDetailsDescription = async () => {
  const response = await communityTrackerAPI({
    url: 'peopledetails/description',
    method: HTTPMethod.GET,
  });

  return response?.data;
};
