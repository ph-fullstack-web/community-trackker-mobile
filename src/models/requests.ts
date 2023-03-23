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

export type UpdateSkillRequest = {
  peopleskills_id: number;
  description: string;
  is_active: boolean;
};
