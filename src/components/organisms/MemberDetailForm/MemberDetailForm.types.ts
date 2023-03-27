import {Community} from 'models/business';

export type MemberDetailFormProps = {
  csv_email: string;
  cognizantid_id: number;
  community: Community;
  communities: Community[];
};
