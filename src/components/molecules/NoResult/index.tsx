import {View} from 'react-native';

import {Text} from 'components/atoms';
import styles from './NoResult.styles';

type NoResultProps = {
  message: string;
};

export const NoResult = (props: NoResultProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
    </View>
  );
};

NoResult.defaultProps = {
  message: 'No Record Found',
};
