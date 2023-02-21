import {UserDataProvider} from 'providers/UserDataProvider';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {sampleTheme} from '../../../theme';

type AppProvidersProps = ComponentWithChildren;

const appTheme = createTheme(sampleTheme);

export const AppProvider = ({children}: AppProvidersProps) => {
  return (
    <UserDataProvider>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </UserDataProvider>
  );
};
