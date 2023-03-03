import {Text as DefaultText, TextProps as DefaultTextProps} from 'react-native';

import {useThemeProvider} from 'providers';
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
  const {mode} = useThemeProvider();
  const isTitle = props.type === 'title' ? styles.bold : null;
  return (
    <DefaultText
      {...props}
      style={[
        isTitle,
        styles[`${props.type}_${mode}` as keyof typeof undefined],
        props.style,
      ]}
    >
      {props.children}
    </DefaultText>
  );
};

Text.defaultProps = {
  type: 'default',
};
