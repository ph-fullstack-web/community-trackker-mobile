import {memo} from 'react';
import {TextInput as DefaultTextInput} from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextInputProps = ThemeProps & DefaultTextInput['props'];

export const TextInput = memo((props: TextInputProps) => {
  return <DefaultTextInput {...props} />;
});
