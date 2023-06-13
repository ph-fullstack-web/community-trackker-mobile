import {TextInput as DefaultTextInput} from 'react-native';
import {useThemeProvider} from 'providers';
import {COLORS} from 'constants/colors';

export type TextInputProps = DefaultTextInput['props'] & {
  id: string;
};

export const TextInput = (props: TextInputProps) => {
  const {mode} = useThemeProvider();
  const placeHolderColor =
    mode === 'light' ? COLORS.BLACK : COLORS.ULTRA_LIGHT_GRAY;
  return (
    <DefaultTextInput placeholderTextColor={placeHolderColor} {...props} />
  );
};
