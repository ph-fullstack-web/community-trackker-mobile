import {Text as DefaultText, TextProps as DefaultTextProps} from 'react-native';

import styles from './Text.styles';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type TextTypeProps = {
  type: 'title' | 'subtitle' | 'default';
};

export type TextProps = ThemeProps &
  DefaultTextProps &
  ComponentWithChildren &
  TextTypeProps;

export const Text = (props: TextProps) => {
  return (
    <DefaultText {...props} style={[styles[props.type], props.style]}>
      {props.children}
    </DefaultText>
  );
};

Text.defaultProps = {
  type: 'default',
};
