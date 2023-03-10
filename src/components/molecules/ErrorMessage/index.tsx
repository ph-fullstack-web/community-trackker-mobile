import {HttpStatusCode} from 'axios';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import styles from './ErrorMessage.styles';
import {ErrorMessageProps} from './ErrorMessage.types';

import {Button, Icon, Text} from 'components/atoms';
import {COLORS, GRADIENT} from 'constants/colors';
import {errorIconMap} from 'constants/errors';
import {RootNativeStackScreens} from 'constants/navigation';
import {useThemeProvider} from 'providers';

export const ErrorMessage = ({
  status,
  message,
  size,
  buttonTitle,
  showButton,
  onPress,
}: ErrorMessageProps) => {
  const {mode} = useThemeProvider();
  const {navigate} =
    useNavigation<
      RootNativeStackScreenProps<RootNativeStackScreens.Login>['navigation']
    >();

  let icon = errorIconMap.get(HttpStatusCode.InternalServerError);

  if (errorIconMap.has(status)) {
    icon = errorIconMap.get(status);
  }

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
        type={icon!.type}
        name={icon!.name}
        color={mode === 'light' ? COLORS.MIDNIGHT_BLUE : COLORS.VERY_LIGHT_GRAY}
        size={size}
      />
      <Text
        style={[styles.text, styles[`text_${mode}` as keyof typeof styles]]}
      >
        {message}
      </Text>
      {showButton ? (
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
  code: HttpStatusCode.InternalServerError,
  message: 'Something went wrong',
  size: 250,
  buttonTitle: 'Back to Login',
  showButton: true,
};
