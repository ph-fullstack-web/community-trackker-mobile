export type AddProjectRequest = {
  project: string;
  project_code: string;
  is_active: boolean;
};

export type UpdateProjectRequest = {
  id: number;
  project_name: string;
  project_code: string;
  is_active: boolean;
};
