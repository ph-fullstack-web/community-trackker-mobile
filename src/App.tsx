import {SafeAreaView, LogBox} from 'react-native';

import {RootNavigation} from 'navigation';
import {AppProvider} from 'providers/AppProvider';

import styles from './App.styles';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <RootNavigation />
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
