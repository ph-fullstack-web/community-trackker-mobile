import {memo} from 'react';
import {View} from 'react-native';

import {Text} from '../Text';
import styles from './ScreenHeader.styles';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
};

export const ScreenHeader = memo((props: ScreenHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text type="title" style={styles.title}>
        {props.title}
      </Text>
      {props.subtitle && (
        <Text type="subtitle" style={styles.subtitle}>
          {props.subtitle}
        </Text>
      )}
    </View>
  );
});
