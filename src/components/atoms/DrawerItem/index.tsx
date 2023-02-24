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

export const DrawerItem = ({icon, label, onPress}: DrawerItemProps) => {
  const {theme} = useTheme();

  return (
    <Pressable android_ripple={{color: theme.colors.grey4}} onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={icon.name}
          type={icon.type}
          color={icon.color}
          style={styles.icon}
        />
        <Text style={[styles.label, {color: theme.colors.blue2}]}>{label}</Text>
      </View>
    </Pressable>
  );
};
