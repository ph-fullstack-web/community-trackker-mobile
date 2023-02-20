import {Pressable, View} from 'react-native';

import styles from './DrawerItem.styles';
import {Icon} from '../Icon';
import {Text} from '../Text';
import {COLORS} from 'constants/colors';

export type DrawerItemProps = {
  icon: Icon;
  label: string;
  onPress: () => void;
};

export const DrawerItem = ({icon, label, onPress}: DrawerItemProps) => {
  return (
    <Pressable
      android_ripple={{color: COLORS.VERY_LIGHT_GRAY}}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Icon
          name={icon.name}
          type={icon.type}
          color={icon.color}
          style={styles.icon}
        />
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};
