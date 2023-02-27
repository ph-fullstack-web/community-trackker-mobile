import {memo, useMemo} from 'react';
import {Pressable, View} from 'react-native';
import {useTheme} from '@rneui/themed';

import {Icon} from '../Icon';
import {Text} from '../Text';

import styles from './DrawerItem.styles';

export type DrawerItemProps = {
  icon: Icon;
  label: string;
  onPress: () => void;
};

export const DrawerItem = memo(({icon, label, onPress}: DrawerItemProps) => {
  const {theme} = useTheme();
  const rippleStyle = useMemo(
    () => ({color: theme.colors.grey4}),
    [theme.colors.grey4]
  );
  const textStyle = useMemo(
    () => [styles.label, {color: theme.colors.blue2}],
    [theme.colors.blue2]
  );

  return (
    <Pressable android_ripple={rippleStyle} onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={icon.name}
          type={icon.type}
          color={icon.color}
          style={styles.icon}
        />
        <Text style={textStyle}>{label}</Text>
      </View>
    </Pressable>
  );
});
