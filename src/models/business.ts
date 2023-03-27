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

export type CommunityMembersSearch = {
  community_id: string;
  community_name: string;
  manager: AdminManager;
  total_members: number;
  members: PeopleUnderCommunitySearch[];
};

export type CommunityMembersSearchResponse = {
  current_page: number;
  last_page: number;
  community: CommunityMembersSearch;
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

export type PeopleUnderCommunitySearch = {
  people_id: number;
  full_name: string;
  csv_email: string;
  hired_date: string;
  community_id: number;
  is_active: boolean;
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
  community: Community;
  skills: SkillSet[];
  details: PeopleDetailsDesc[];
};

export type PersonBySkills = {
  full_name: string;
  skills: string[];
  project_id: number;
  people_count: number;
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
