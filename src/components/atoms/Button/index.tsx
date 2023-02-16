import {
  Button as DefaultButton,
  ButtonProps as DefaultButtonProps,
} from '@rneui/base';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ButtonProps = ThemeProps & DefaultButtonProps;

export const Button = (props: ButtonProps) => {
  return <DefaultButton {...props} />;
};
