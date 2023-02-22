import {AppContainer, ScreenHeader, Text} from 'components/atoms';
import {ScreenTitle} from 'constants/navigation';

export const CECDashboardTemplate = () => {
  return (
    <AppContainer keyboardShouldPersistTaps="handled">
      <ScreenHeader title={ScreenTitle.CEC} />
      <Text>Screen is still not available</Text>
    </AppContainer>
  );
};
