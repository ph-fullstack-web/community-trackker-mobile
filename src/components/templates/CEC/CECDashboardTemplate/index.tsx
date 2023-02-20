import {AppContainer, Text} from 'components/atoms';
import styles from './CECDashboardTemplate.styles';

export const CECDashboardTemplate = () => {
  return (
    <AppContainer style={styles.container}>
      <Text style={styles.text}>CEC Requests</Text>
    </AppContainer>
  );
};
