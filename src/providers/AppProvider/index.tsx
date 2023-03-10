import {QueryClient, QueryClientProvider} from 'react-query';

import {ThemeProvider} from 'providers/ThemeProvider';

type AppProvidersProps = ComponentWithChildren;

export const AppProvider = ({children}: AppProvidersProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
