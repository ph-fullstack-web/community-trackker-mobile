import {Text as DefaultText, TextProps as DefaultTextProps} from 'react-native';

import {useThemeProvider} from 'providers';
import styles from './Text.styles';

export type TextProps = DefaultTextProps &
  ComponentWithChildren & {
    id?: string;
    type: 'title' | 'subtitle' | 'default';
  };

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
