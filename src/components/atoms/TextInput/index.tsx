import {TextInput as DefaultTextInput} from 'react-native';
import {useThemeProvider} from 'providers/ThemeProvider';
import {COLORS} from 'constants/colors';

export type TextInputProps = DefaultTextInput['props'];

export const TextInput = (props: TextInputProps) => {
  const {...otherProps} = props;
  const {mode} = useThemeProvider();
  const placeHolderColor =
    mode === 'light' ? COLORS.BLACK : COLORS.ULTRA_LIGHT_GRAY;
  return (
    <DefaultTextInput placeholderTextColor={placeHolderColor} {...otherProps} />
  );
};
