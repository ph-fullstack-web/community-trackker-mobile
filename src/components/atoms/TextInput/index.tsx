import {TextInput as DefaultTextInput} from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export const TextInput = (props: TextInputProps) => {
  const {...otherProps} = props;

  return <DefaultTextInput {...otherProps} />;
};
