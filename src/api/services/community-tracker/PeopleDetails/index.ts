import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {PeopleDetails, PeopleDetailsDesc} from 'models/business';

export const GetPeopleDetails = async (): Promise<PeopleDetails[]> => {
  const response = await communityTrackerAPI({
    url: 'peopledetails',
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPeopleDetailsDescription = async (): Promise<
  PeopleDetailsDesc[]
> => {
  const response = await communityTrackerAPI({
    url: 'peopledetails/description',
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
