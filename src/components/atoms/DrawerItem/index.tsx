import {Pressable, Text, View} from 'react-native';

import styles from './DrawerItem.styles';
import {Icon} from '../Icon';

export type DrawerItemProps = {
  icon: Icon;
  label: string;
  onPress: () => void;
};

export const DrawerItem = ({icon, label, onPress}: DrawerItemProps) => {
  return (
    <Pressable android_ripple={{color: '#ccc'}} onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon.name} type={icon.type} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};
