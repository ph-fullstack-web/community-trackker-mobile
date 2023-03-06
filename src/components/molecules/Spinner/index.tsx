import {
  View,
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {COLORS} from 'constants/colors';
import {useThemeProvider} from 'providers';

import styles from './Spinner.styles';

type SpinnerProps = ActivityIndicatorProps & {
  viewStyle?: StyleProp<ViewStyle>;
};

export const Spinner = (props: SpinnerProps) => {
  const {mode} = useThemeProvider();

  return (
    <View style={[styles.spinnerContainer, props.viewStyle]}>
      <ActivityIndicator
        size={props.size ?? 75}
        color={mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.LIGHT_BLUE}
      />
    </View>
  );
};
