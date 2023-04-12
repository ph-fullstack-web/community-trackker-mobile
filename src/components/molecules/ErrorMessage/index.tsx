import {HttpStatusCode} from 'axios';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './ErrorMessage.styles';
import {ErrorMessageProps} from './ErrorMessage.types';

import {Button, Icon, Text} from 'components/atoms';
import {COLORS} from 'constants/colors';
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
          gradient
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
