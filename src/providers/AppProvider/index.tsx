import {UserDataProvider} from 'providers/UserDataProvider';
import {ThemeProvider} from 'providers/ThemeProvider';

type AppProvidersProps = ComponentWithChildren;

export const AppProvider = ({children}: AppProvidersProps) => {
  return (
    <UserDataProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserDataProvider>
  );
};
