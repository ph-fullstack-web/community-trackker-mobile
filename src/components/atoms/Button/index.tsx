import {
  PressableProps,
  TextProps,
  Pressable as DefaultPressable,
  Text as DefaultText,
  View as DefaultView,
  TextStyle,
  StyleProp,
} from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type ButtonText = {
  text: string;
  textStyle?: StyleProp<TextStyle>;
};

export type ButtonProps = ThemeProps &
  ButtonText &
  DefaultView['props'] &
  PressableProps &
  TextProps;

export const Button = (props: ButtonProps) => {
  const {style, textStyle, onPress, text} = props;

  return (
    <DefaultView style={style}>
      <DefaultPressable onPress={onPress}>
        <DefaultText style={textStyle}>{text}</DefaultText>
      </DefaultPressable>
    </DefaultView>
  );
};
