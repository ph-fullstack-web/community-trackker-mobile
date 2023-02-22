import {View} from 'react-native';

import styles from './NotAvailable.styles';
import {Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';

type NotAvailableProps = {
  message: string;
  icon: Icon;
};

export const NotAvailable = (props: NotAvailableProps) => {
  const {message, icon} = props;
  return (
    <View style={styles.container}>
      <Icon
        name={icon.name}
        type={icon.type}
        color={icon.color}
        size={icon.size}
      />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

NotAvailable.defaultProps = {
  message: 'Screen is under development',
  icon: {
    name: 'engineering',
    type: 'material',
    color: COLORS.MIDNIGHT_BLUE,
    size: 250,
  },
};
