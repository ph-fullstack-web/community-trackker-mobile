import {Pressable, View} from 'react-native';

import {useThemeProvider} from 'providers/ThemeProvider';
import {Icon} from '../Icon';
import {Text} from '../Text';

import styles from './DrawerItem.styles';

export type DrawerItemProps = {
  icon: Icon;
  label: string;
  onPress: () => void;
};

export const DrawerItem = ({icon, label, onPress}: DrawerItemProps) => {
  const {mode} = useThemeProvider();

  return (
    <Pressable
      android_ripple={styles[`ripple_${mode}` as keyof typeof undefined]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Icon
          name={icon.name}
          type={icon.type}
          color={icon.color}
          style={styles.icon}
        />
        <Text
          style={[styles.label, styles[`text_${mode}` as keyof typeof styles]]}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};
