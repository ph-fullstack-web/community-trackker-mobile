import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {Peopleskills} from 'models/business';
import {UpdateSkillRequest} from 'models/requests';

export const GetPeopleSkills = async (): Promise<Peopleskills[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.peopleSkills.GetPeopleSkills(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const UpdatePeopleSkill = async (
  data: UpdateSkillRequest
): Promise<Peopleskills> => {
  const {peopleskills_id, ...payload} = data;
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.peopleSkills.UpdatePeopleSkill(peopleskills_id),
    method: HTTPMethod.PUT,
    data: payload,
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
