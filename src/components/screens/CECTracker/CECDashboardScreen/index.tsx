import {CECDashboardTemplate} from 'components/templates/CECTracker';

type CECDashboardScreenProps = CECTrackerDrawerScreenProps<'CEC'>;

export const CECDashboardScreen = ({}: CECDashboardScreenProps) => {
  return <CECDashboardTemplate />;
};
