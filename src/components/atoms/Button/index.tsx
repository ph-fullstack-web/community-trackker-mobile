import {
  Button as DefaultButton,
  ButtonProps as DefaultButtonProps,
} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';

import {GRADIENT} from 'constants/colors';
import {useThemeProvider} from 'providers';

export type ButtonProps = DefaultButtonProps & {
  gradient?: boolean;
};

export const Button = ({gradient = false, ...props}: ButtonProps) => {
  const {mode} = useThemeProvider();

  return gradient ? (
    <DefaultButton
      {...props}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
        start: {x: 0, y: 0.5},
        end: {x: 1, y: 0.5},
      }}
    />
  ) : (
    <DefaultButton {...props} />
  );
};
