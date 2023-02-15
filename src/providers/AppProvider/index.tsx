import {UserDataProvider} from 'providers/UserDataProvider';

type AppProvidersProps = ComponentWithChildren;

export const AppProvider = ({children}: AppProvidersProps) => {
  return <UserDataProvider>{children}</UserDataProvider>;
};
