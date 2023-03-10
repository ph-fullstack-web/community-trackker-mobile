import {Dispatch, SetStateAction} from 'react';
import {PeopleUnderCommunitySearch} from 'models/business';

export type MembersTemplateProps = {
  rows: number;
  setSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<number>>;
  currentPage?: number;
  lastPage?: number;
  membersList?: PeopleUnderCommunitySearch[];
  community_name?: string;
  manager_name?: string;
  isLoading: boolean;
  isError: boolean;
  error: any;
  isFetching: boolean;
};
