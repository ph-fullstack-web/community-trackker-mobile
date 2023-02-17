import {SafeAreaView, StyleSheet} from 'react-native';

import {MainNavigation} from 'navigation/MainNavigation';
import {AppProvider} from 'providers/AppProvider';

const App = () => {
  console.log('hi there');
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <MainNavigation />
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
