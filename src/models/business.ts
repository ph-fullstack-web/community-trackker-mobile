export type Employee = {
  //TODO: delete after people API integration
  employeeId: number;
  cognizantId: number;
  lastName: string;
  firstName: string;
  fullName: string;
  csvEmail: string;
  isActive: boolean;
  dateHired: string;
};

export type User = {
  //TODO: delete after people API integration
  people_id: string;
  cognizantid_id: number;
  username: string;
  csv_email: string;
  full_name: string;
  cecPoints: number;
  skills: SkillSet[];
  communityId: number;
};

export type AdminManager = {
  id: number;
  cognizant_id: string;
  name: string;
  email: string;
  active: boolean;
};

export type Cities = {
  name: string;
  id: number;
};

export type Community = {
  community_id: number;
  community_name: string;
  community_description: string;
  community_manager: string;
  icon?: string;
  is_active: boolean;
  manager: AdminManager;
};

export type CommunityMembers = {
  community_id: string;
  community_name: string;
  members: People[];
  manager: AdminManager;
};

export type CommunityWithMembersPercentage = {
  community_id: number;
  community_name: string;
  community_description: string;
  icon?: string;
  percentage: number;
  members: number;
  manager_full_name: string;
};

export type JobLevel = {
  job_level_id: number;
  job_level_desc: string;
  is_active: boolean;
};

export type PeopleDetails = {
  people_details_id: number;
  people_id: number;
  people_details_desc_id: number;
  is_active: boolean;
};

export type PeopleDetailsDesc = {
  people_details_desc_id: number;
  people_details_desc: string;
  is_active: boolean;
};

export type People = {
  people_id: number;
  cognizantid_id: number;
  last_name: string;
  first_name: string;
  middle_name: string;
  full_name: string;
  csv_email: string;
  hired_date: string;
  community_id: number;
  workstate_id: number;
  joblevel_id: number;
  project_id: number;
  is_active: boolean;
  is_probationary: boolean;
  community: Community;
};

export type Manager = {
  cognizantid_id: number;
  full_name: string;
  csv_email: string;
};

export type PeopleWithSkills = {
  people_id: number;
  cognizantid_id: number;
  full_name: string;
  csv_email: string;
  hired_date: string;
  community_id: number;
  workstate_id: number;
  joblevel_id: number;
  project_id: number;
  is_active: boolean;
  is_probationary: boolean;
  skills: SkillSet[];
  details: PeopleDetailsDesc[];
};

export type Peopleskills = {
  peopleskills_id: number;
  peopleskills_desc: string;
  is_active: boolean;
};

export type SkillSet = {
  id: number;
  description: string;
};

export type Project = {
  id: number;
  project: string;
  project_code: string;
  is_active: boolean;
};

export type WorkState = {
  work_state_id: number;
  work_state_desc: string;
  is_active: boolean;
};
