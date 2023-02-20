import { useState } from 'react';
import {UserDataProvider} from 'providers/UserDataProvider';
import {ThemeProvider} from 'providers/ThemeProviders';
import theme from '../../../theme';

type AppProvidersProps = ComponentWithChildren;

export const AppProvider = ({children}: AppProvidersProps) => {
  const [appTheme, setAppTheme] = useState(theme.LIGHT)
  console.log("🚀 ~ file: index.tsx:10 ~ AppProvider ~ appTheme:", appTheme)
  
  return (
    <UserDataProvider>
      <ThemeProvider theme={appTheme}> 
        {children}
      </ThemeProvider>
    </UserDataProvider>
  );
};
