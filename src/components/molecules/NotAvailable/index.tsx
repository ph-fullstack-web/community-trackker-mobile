import {View} from 'react-native';

import styles from './NotAvailable.styles';
import {Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers';

type NotAvailableProps = {
  message: string;
  icon: Icon;
};

export const NotAvailable = (props: NotAvailableProps) => {
  const {message, icon} = props;
  const {mode} = useThemeProvider();
  return (
    <View style={styles.container}>
      <Icon
        name={icon.name}
        type={icon.type}
        color={mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.VERY_LIGHT_GRAY}
        size={icon.size}
      />
      <Text
        style={[styles.text, styles[`text_${mode}` as keyof typeof styles]]}
      >
        {message}
      </Text>
    </View>
  );
};

NotAvailable.defaultProps = {
  message: 'Screen is under development',
  icon: {
    name: 'engineering',
    type: 'material',
    size: 250,
  },
};
