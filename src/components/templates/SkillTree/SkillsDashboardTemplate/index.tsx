import {AppContainer, ScreenHeader} from 'components/atoms';
import {NotAvailable} from 'components/molecules';
import {ScreenTitle} from 'constants/navigation';

export const SkillsDashboardTemplate = () => {
  return (
    <AppContainer>
      <ScreenHeader title={ScreenTitle.Skills} />
      <NotAvailable />
    </AppContainer>
  );
};
