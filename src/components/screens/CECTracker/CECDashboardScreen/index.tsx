import {CECDashboardTemplate} from 'components/templates/CECTracker';
import {CommunityDrawerScreens} from 'constants/navigation';

type CECDashboardScreenProps =
  CommunityDrawerScreenProps<CommunityDrawerScreens.CEC>;

export const CECDashboardScreen = ({}: CECDashboardScreenProps) => {
  return <CECDashboardTemplate />;
};
