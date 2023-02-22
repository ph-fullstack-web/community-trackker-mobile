import {AppContainer, ScreenHeader, Text} from 'components/atoms';
import {ScreenTitle} from 'constants/navigation';

export const SkillsDashboardTemplate = () => {
  return (
    <AppContainer keyboardShouldPersistTaps="handled">
      <ScreenHeader title={ScreenTitle.Skills} />
      <Text>Screen is still not available</Text>
    </AppContainer>
  );
};
