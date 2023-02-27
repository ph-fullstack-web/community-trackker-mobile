import {SafeAreaView} from 'react-native';

import {RootNavigation} from 'navigation';
import {AppProvider} from 'providers/AppProvider';

import styles from './App.styles';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <RootNavigation />
      </SafeAreaView>
    </AppProvider>
  );
};

export default App;
