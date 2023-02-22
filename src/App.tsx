import {SafeAreaView, StyleSheet} from 'react-native';

import {RootNavigation} from 'navigation';
import {AppProvider} from 'providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <RootNavigation />
      </SafeAreaView>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
