import {Community, SkillSet} from 'models/business';

export type ProfileTemplateProp = {
  full_name?: string;
  csv_email?: string;
  cognizantid_id?: number;
  community_id?: number;
  skills?: SkillSet[];

  isLoading: boolean;
  isError: boolean;
  error: any;
  isFetching: boolean;

  communities?: Community[];

  isCommunitiesLoading: boolean;
  isCommunitiesError: boolean;
  communitiesError: any;
  isCommunitiesFetching: boolean;
};
