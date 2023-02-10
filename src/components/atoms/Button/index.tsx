import {Button as DefaultButton} from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ButtonProps = ThemeProps & DefaultButton['props'];

export const Button = (props: ButtonProps) => {
  const {onPress, title, ...otherProps} = props;

  return <DefaultButton title={title} onPress={onPress} {...otherProps} />;
};
