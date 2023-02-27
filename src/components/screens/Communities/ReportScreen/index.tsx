import {ReportTemplate} from 'components/templates';
import {CommunityDrawerScreens} from 'constants/navigation';

type ReportScreenProps =
  CommunityDrawerScreenProps<CommunityDrawerScreens.Report>;

export const ReportScreen = ({}: ReportScreenProps) => {
  return <ReportTemplate />;
};
