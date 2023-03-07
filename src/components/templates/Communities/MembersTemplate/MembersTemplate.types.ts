import {People} from 'models/business';

export type MembersTemplateProps = {
  membersList?: People[];
  community_name?: string;
  manager_name?: string;
  isLoading: boolean;
  isError: boolean;
  error: any;
  isFetching: boolean;
};
