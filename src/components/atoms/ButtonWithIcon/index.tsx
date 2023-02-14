import {
  PressableProps,
  View as DefaultView,
  Pressable as DefaultPressable,
} from 'react-native';
import {Icon as DefaultIcon, IconProps} from '@rneui/themed';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ButtonWithIconProps = ThemeProps &
  DefaultView['props'] &
  PressableProps &
  IconProps;

export const ButtonWithIcon = (props: ButtonWithIconProps) => {
  const {style, onPress, name, type, color} = props;

  return (
    <DefaultView style={style}>
      <DefaultPressable onPress={onPress}>
        <DefaultIcon name={name} type={type} color={color} />
      </DefaultPressable>
    </DefaultView>
  );
};
