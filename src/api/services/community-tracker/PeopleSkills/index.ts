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

export const UpdatePeopleSkill = async (data: Peopleskills) => {
  const {peopleskills_id, peopleskills_desc, is_active} = data;
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.peopleSkills.UpdatePeopleSkill(peopleskills_id),
    method: HTTPMethod.PUT,
    data: {
      description: peopleskills_desc,
      is_active,
    },
  });

  return response?.data?.data;
};

export const DeletePeopleSkill = async (
  skillId: number
): Promise<Peopleskills> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.peopleSkills.DeletePeopleSkill(skillId),
    method: HTTPMethod.DELETE,
  });

  return response?.data?.data;
};
