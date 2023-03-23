import {Community, SkillSet} from 'models/business';

export type ProfileTemplateProp = {
  full_name?: string;
  csv_email?: string;
  cognizantid_id?: number;
  community?: Community;
  skills?: SkillSet[];
  communities?: Community[];
  isLoading: boolean;
  isError: boolean;
  error: any;
  isCommunitiesError: boolean;
  communitiesError: any;
};
