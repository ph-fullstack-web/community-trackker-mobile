import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import styles from './ErrorMessage.styles';
import {Button, Icon, Text} from 'components/atoms';
import {COLORS, GRADIENT} from 'constants/colors';
import {RootNativeStackScreens} from 'constants/navigation';
import {useThemeProvider} from 'providers';

type ErrorMessageProps = {
  code: number;
  message: string;
  size: number;
  buttonTitle: string;
  onPress?: () => void;
};

const errorMap = new Map<number, Icon>([
  [400, {type: 'material', name: 'error-outline'}],
  [500, {type: 'material', name: 'wifi-off'}],
  [401, {type: 'material', name: 'block-flipped'}],
  [403, {type: 'material', name: 'block-flipped'}],
]);

export const ErrorMessage = (props: ErrorMessageProps) => {
  const {code, message, size, buttonTitle, onPress} = props;
  const {mode} = useThemeProvider();
  const {navigate} =
    useNavigation<
      RootNativeStackScreenProps<RootNativeStackScreens.Login>['navigation']
    >();

  const icon = errorMap.get(code);

  const handleOnPress = () => {
    if (onPress) {
      onPress();
      return;
    }
    navigate(RootNativeStackScreens.Login);
  };

  return (
    <View style={styles.container}>
      <Icon
        type={icon?.type ?? 'material'}
        name={icon?.name ?? 'wifi-off'}
        color={mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.VERY_LIGHT_GRAY}
        size={size}
      />
      <Text
        style={[styles.text, styles[`text_${mode}` as keyof typeof styles]]}
      >
        {message}
      </Text>
      {buttonTitle ? (
        <Button
          title={buttonTitle}
          titleStyle={styles.buttonText}
          buttonStyle={[
            styles.button,
            styles[`button_${mode}` as keyof typeof Button],
          ]}
          containerStyle={styles.buttonContainer}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: GRADIENT[`${mode}_theme` as keyof typeof GRADIENT],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          onPress={handleOnPress}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

ErrorMessage.defaultProps = {
  code: 500,
  message: 'Something went wrong',
  size: 250,
  buttonTitle: 'Back to Login',
};
