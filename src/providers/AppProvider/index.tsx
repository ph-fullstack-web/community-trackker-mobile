import {QueryClient, QueryClientProvider} from 'react-query';

import {ThemeProvider} from 'providers/ThemeProvider';
import {UserDataProvider} from 'providers/UserDataProvider';

type AppProvidersProps = ComponentWithChildren;

export const AppProvider = ({children}: AppProvidersProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UserDataProvider>
    </QueryClientProvider>
  );
};
