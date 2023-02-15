import {Text} from 'react-native';

import {AppContainer} from 'components/atoms';
import styles from './CECDashboardScreen.styles';

export const CECDashboardScreen = () => {
  return (
    <AppContainer style={styles.container}>
      <Text style={styles.text}>CEC Requests</Text>
    </AppContainer>
  );
};
