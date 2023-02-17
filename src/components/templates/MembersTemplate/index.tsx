import {Text} from 'react-native';

import {AppContainer} from 'components/atoms';
import styles from './MembersTemplate.styles';

export const MembersTemplate = () => {
  return (
    <AppContainer>
      <Text style={styles.text}>Members</Text>
    </AppContainer>
  );
};
