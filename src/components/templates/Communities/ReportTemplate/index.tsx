import {AppContainer, ScreenHeader} from 'components/atoms';
import {NotAvailable} from 'components/molecules';
import {ScreenTitle} from 'constants/navigation';

export const ReportTemplate = () => {
  return (
    <AppContainer>
      <ScreenHeader title={ScreenTitle.Report} />
      <NotAvailable />
    </AppContainer>
  );
};
