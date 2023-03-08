import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {PeopleDetails, PeopleDetailsDesc} from 'models/business';

export const GetPeopleDetails = async (): Promise<PeopleDetails[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.peopleDetails.GetPeopleDetails(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetPeopleDetailsDescription = async (): Promise<
  PeopleDetailsDesc[]
> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.peopleDetails.GetPeopleDetailsDescription(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};
