import {CECDashboardTemplate} from 'components/templates/CECTracker';
import {CommunityDrawerScreens} from 'constants/navigation';

type CECDashboardScreenProps =
  CommunityDrawerScreenProps<CommunityDrawerScreens.CECRequestsDrawer>;

export const CECDashboardScreen = ({}: CECDashboardScreenProps) => {
  return <CECDashboardTemplate />;
};
