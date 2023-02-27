import {ReactNode} from 'react';

import {AppCardProps} from 'components/molecules';
import {User} from 'models/business';

export type DashboardTemplateProps = {
  user: User | undefined;
  applications: AppCardProps[];
};

export type DashboardSection = {
  title: string;
  content: ReactNode;
};
