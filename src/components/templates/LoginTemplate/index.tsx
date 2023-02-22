import {AppContainer} from 'components/atoms';
import {NotAvailable} from 'components/molecules';

export const LoginTemplate = () => {
  return (
    <AppContainer keyboardShouldPersistTaps="handled">
      <NotAvailable />
    </AppContainer>
  );
};
