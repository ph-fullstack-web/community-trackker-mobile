import {AppContainer, ScreenHeader} from 'components/atoms';
import {NotAvailable} from 'components/molecules';
import {ScreenTitle} from 'constants/navigation';

export const ReportTemplate = () => {
  return (
    <AppContainer keyboardShouldPersistTaps="handled">
      <ScreenHeader title={ScreenTitle.Report} />
      <NotAvailable />
    </AppContainer>
  );
};
