import {AppContainer, ScreenHeader} from 'components/atoms';
import {NotAvailable} from 'components/molecules';
import {ScreenTitle} from 'constants/navigation';

export const CECDashboardTemplate = () => {
  return (
    <AppContainer>
      <ScreenHeader title={ScreenTitle.CEC} />
      <NotAvailable />
    </AppContainer>
  );
};
