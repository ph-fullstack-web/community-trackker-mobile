import {Text} from 'react-native';

import {AppContainer} from 'components/atoms';
import styles from './CECDashboardTemplate.styles';

export const CECDashboardTemplate = () => {
  return (
    <AppContainer style={styles.container}>
      <Text style={styles.text}>CEC Requests</Text>
    </AppContainer>
  );
};
