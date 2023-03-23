import {AppContainer, ScreenHeader} from 'components/atoms';
import {NotAvailable} from 'components/molecules';
import {ScreenTitle} from 'constants/navigation';

export const ProjectsTemplate = () => {
  return (
    <AppContainer>
      <ScreenHeader title={ScreenTitle.Projects} />
      <NotAvailable />
    </AppContainer>
  );
};
