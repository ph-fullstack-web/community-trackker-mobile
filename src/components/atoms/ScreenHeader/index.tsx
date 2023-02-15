import {Text, View} from 'react-native';

import styles from './ScreenHeader.styles';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
};

export const ScreenHeader = (props: ScreenHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.subtitle && <Text style={styles.subtitle}>{props.subtitle}</Text>}
    </View>
  );
};
