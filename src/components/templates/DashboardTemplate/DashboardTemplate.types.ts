import {ReactNode} from 'react';

import {AppCardProps} from 'components/molecules';
import {SkillSet} from 'models/business';

export type DashboardTemplateProps = {
  applications: AppCardProps[];
  skills?: SkillSet[];
  full_name?: string;
  csv_email?: string;
  isLoading: boolean;
  isError: boolean;
  error: any;
};

export type DashboardSection = {
  title: string;
  content: ReactNode;
};
