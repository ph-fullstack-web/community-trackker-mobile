import {QueryClient, QueryClientProvider} from 'react-query';

import {MutationProvider} from 'providers/MutationProvider';
import {ThemeProvider} from 'providers/ThemeProvider';

type AppProvidersProps = ComponentWithChildren;

export const AppProvider = ({children}: AppProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MutationProvider>{children}</MutationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
