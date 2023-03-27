import {useMutation, useQuery} from 'react-query';

import {
  AddProject,
  DeleteProject,
  GetProject,
  GetProjects,
  UpdateProject,
} from 'api/services';
import {Query} from 'constants/query';
import {AddProjectRequest, UpdateProjectRequest} from 'models/requests';

export const useGetProjects = () => {
  return useQuery(Query.GetProjects, () => GetProjects());
};

export const useGetProject = (projectId: number) => {
  return useQuery(Query.GetProject, () => GetProject(projectId));
};

export const useAddProject = () => {
  return useMutation((data: AddProjectRequest) => AddProject(data));
};

export const useUpdateProject = () => {
  return useMutation((data: UpdateProjectRequest) => UpdateProject(data));
};

export const useDeleteProject = () => {
  return useMutation((projectId: number) => DeleteProject(projectId));
};
