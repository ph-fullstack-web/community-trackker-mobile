import {communityTrackerAPI} from 'api';
import {HTTPMethod} from 'constants/enums';
import {communityTrackerRoutes} from 'constants/routes';
import {Project} from 'models/business';
import {AddProjectRequest, UpdateProjectRequest} from 'models/requests';

export const GetProjects = async (): Promise<Project[]> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.projects.GetProjects(),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const GetProject = async (projectId: number): Promise<Project> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.projects.GetProject(projectId),
    method: HTTPMethod.GET,
  });

  return response?.data?.data;
};

export const AddProject = async (data: AddProjectRequest): Promise<Project> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.projects.AddProject(),
    method: HTTPMethod.POST,
    data,
  });

  return response?.data?.data;
};

export const UpdateProject = async (
  data: UpdateProjectRequest
): Promise<Project> => {
  const {id, ...payload} = data;
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.projects.UpdateProject(id),
    method: HTTPMethod.PUT,
    data: payload,
  });

  return response?.data?.data;
};

export const DeleteProject = async (projectId: number): Promise<Project> => {
  const response = await communityTrackerAPI({
    url: communityTrackerRoutes.projects.DeleteProject(projectId),
    method: HTTPMethod.DELETE,
  });

  return response?.data?.data;
};
