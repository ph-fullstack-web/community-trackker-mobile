import {AppContainer, ScreenHeader, Text} from 'components/atoms';
import {ScreenTitle} from 'constants/navigation';

export const ReportTemplate = () => {
  return (
    <AppContainer keyboardShouldPersistTaps="handled">
      <ScreenHeader title={ScreenTitle.Report} />
      <Text>Screen is still not available</Text>
    </AppContainer>
  );
};
