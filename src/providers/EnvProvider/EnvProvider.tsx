import {BASE_URL_DEV, BASE_URL_PROD} from 'react-native-dotenv';
import {EnvContext} from './EnvContext';

type EnvProviderProps = ComponentWithChildren;

export const ThemeProvider = ({children}: EnvProviderProps) => {
  const baseUrl = __DEV__ ? BASE_URL_DEV : BASE_URL_PROD;

  return (
    <EnvContext.Provider value={{baseUrl}}>{children}</EnvContext.Provider>
  );
};
