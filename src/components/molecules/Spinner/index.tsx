import {View, ActivityIndicator} from 'react-native';

import styles from './Spinner.styles';

export const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={75} />
    </View>
  );
};
