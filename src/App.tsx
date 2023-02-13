import { SafeAreaView, StyleSheet } from 'react-native';
import {MainNavigation} from './navigation/MainNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})

export default App;
